const bcrypt = require("bcrypt");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


async function criarAdmin() {

    const nome = "Aser Ucuachalo";

    const email = "ucuachaloaser@gmail.com";

    const password = "odeth1986";


    const hash =
        await bcrypt.hash(password, 12);


    await pool.query(
        `
        INSERT INTO admins
        (
            name,
            email,
            password_hash
        )
        VALUES
        ($1, $2, $3)
        `,
        [
            nome,
            email,
            hash
        ]
    );


    console.log(
        "Administrador criado com sucesso."
    );

    console.log(
        "E-mail:",
        email
    );

    console.log(
        "Troque a password antes de colocar o site online."
    );


    await pool.end();

}


criarAdmin()
    .catch(error => {

        console.error(error);

        process.exit(1);

    });
    