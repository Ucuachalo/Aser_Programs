const express = require("express");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;


/* =========================
   POSTGRESQL
========================= */

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


/*
   Em produção, usando HTTPS:
   secure deve ficar true.
*/

const isProduction =
    process.env.NODE_ENV === "production";


app.set("trust proxy", 1);


app.use(
    session({
        store: new pgSession({
            pool: pool,
            tableName: "user_sessions",
            createTableIfMissing: true
        }),

        secret: process.env.SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            secure: isProduction,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 8
        }
    })
);


/* =========================
   ARQUIVOS PÚBLICOS
========================= */

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


/* =========================
   LIMITAR LOGIN
========================= */

const loginLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    limit: 10,

    standardHeaders: "draft-8",

    legacyHeaders: false,

    message: {
        error:
            "Demasiadas tentativas. Tente novamente mais tarde."
    }

});


/* =========================
   MIDDLEWARE ADMIN
========================= */

function requireAdmin(req, res, next) {

    if (!req.session.adminId) {

        return res.status(401).json({
            error: "Não autenticado."
        });

    }

    next();

}


/* =========================
   LOGIN
========================= */

app.post(
    "/api/login",
    loginLimiter,
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;


            if (!email || !password) {

                return res.status(400).json({
                    error:
                        "E-mail e palavra-passe são obrigatórios."
                });

            }


            const result = await pool.query(
                `
                SELECT *
                FROM admins
                WHERE LOWER(email) = LOWER($1)
                `,
                [email.trim()]
            );


            if (result.rows.length === 0) {

                return res.status(401).json({
                    error:
                        "E-mail ou palavra-passe inválidos."
                });

            }


            const admin = result.rows[0];


            const passwordCorrect =
                await bcrypt.compare(
                    password,
                    admin.password_hash
                );


            if (!passwordCorrect) {

                return res.status(401).json({
                    error:
                        "E-mail ou palavra-passe inválidos."
                });

            }


            /*
               Regenera a sessão depois do login.
               Isso ajuda a evitar session fixation.
            */

            req.session.regenerate(
                error => {

                    if (error) {

                        console.error(error);

                        return res.status(500).json({
                            error:
                                "Não foi possível iniciar a sessão."
                        });

                    }


                    req.session.adminId =
                        admin.id;

                    req.session.adminName =
                        admin.name;

                    req.session.adminEmail =
                        admin.email;


                    req.session.save(
                        saveError => {

                            if (saveError) {

                                console.error(saveError);

                                return res.status(500).json({
                                    error:
                                        "Erro ao guardar a sessão."
                                });

                            }


                            res.json({
                                success: true,
                                name: admin.name
                            });

                        }
                    );

                }
            );

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error: "Erro interno do servidor."
            });

        }

    }
);


/* =========================
   VERIFICAR LOGIN
========================= */

app.get(
    "/api/me",
    requireAdmin,
    async (req, res) => {

        res.json({

            authenticated: true,

            admin: {
                id: req.session.adminId,
                name: req.session.adminName,
                email: req.session.adminEmail
            }

        });

    }
);


/* =========================
   LOGOUT
========================= */

app.post(
    "/api/logout",
    requireAdmin,
    (req, res) => {

        req.session.destroy(error => {

            if (error) {

                return res.status(500).json({
                    error:
                        "Não foi possível terminar a sessão."
                });

            }


            res.clearCookie("connect.sid");

            res.json({
                success: true
            });

        });

    }
);


/* =========================
   CARROS - ADMIN
========================= */

app.get(
    "/api/admin/cars",
    requireAdmin,
    async (req, res) => {

        try {

            const result =
                await pool.query(
                    `
                    SELECT *
                    FROM cars
                    ORDER BY created_at DESC
                    `
                );


            res.json(result.rows);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error:
                    "Erro ao carregar veículos."
            });

        }

    }
);


/* =========================
   ADICIONAR CARRO
========================= */

app.post(
    "/api/admin/cars",
    requireAdmin,
    async (req, res) => {

        try {

            const {
                brand,
                model,
                category,
                year,
                price,
                km,
                transmission,
                fuel,
                image,
                description
            } = req.body;


            if (
                !brand ||
                !model ||
                !category ||
                !year ||
                !price
            ) {

                return res.status(400).json({
                    error:
                        "Preencha os campos obrigatórios."
                });

            }


            const result =
                await pool.query(
                    `
                    INSERT INTO cars
                    (
                        brand,
                        model,
                        category,
                        year,
                        price,
                        km,
                        transmission,
                        fuel,
                        image,
                        description
                    )
                    VALUES
                    ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
                    RETURNING *
                    `,
                    [
                        brand,
                        model,
                        category,
                        year,
                        price,
                        km,
                        transmission,
                        fuel,
                        image,
                        description
                    ]
                );


            res.status(201).json(
                result.rows[0]
            );

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error:
                    "Erro ao adicionar veículo."
            });

        }

    }
);


/* =========================
   ELIMINAR CARRO
========================= */

app.delete(
    "/api/admin/cars/:id",
    requireAdmin,
    async (req, res) => {

        try {

            await pool.query(
                `
                DELETE FROM cars
                WHERE id = $1
                `,
                [req.params.id]
            );


            res.json({
                success: true
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error:
                    "Erro ao eliminar veículo."
            });

        }

    }
);


/* =========================
   ALTERAR ESTADO
========================= */

app.patch(
    "/api/admin/cars/:id/status",
    requireAdmin,
    async (req, res) => {

        try {

            const {
                status
            } = req.body;


            const estadosPermitidos = [
                "disponivel",
                "reservado",
                "vendido"
            ];


            if (
                !estadosPermitidos.includes(status)
            ) {

                return res.status(400).json({
                    error:
                        "Estado inválido."
                });

            }


            const result =
                await pool.query(
                    `
                    UPDATE cars
                    SET status = $1
                    WHERE id = $2
                    RETURNING *
                    `,
                    [
                        status,
                        req.params.id
                    ]
                );


            res.json(result.rows[0]);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                error:
                    "Erro ao atualizar veículo."
            });

        }

    }
);


/* =========================
   SERVIDOR
========================= */

app.listen(
    PORT,
    () => {

        console.log(
            `AutoVenda rodando em http://localhost:${PORT}`
        );

    }
);