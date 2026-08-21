/* =========================
   DADOS DOS VEÍCULOS
========================= */

const carrosPadrao = [

    {
        id: 1,
        brand: "Toyota",
        model: "Land Cruiser",
        category: "SUV",
        year: 2023,
        price: 28000000,
        km: "25.000 km",
        transmission: "Automático",
        fuel: "Diesel",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=80",
        description: "Toyota Land Cruiser em excelente estado, ideal para família e viagens. Veículo robusto, confortável e preparado para diferentes tipos de estrada."
    },

    {
        id: 2,
        brand: "Toyota",
        model: "RAV4",
        category: "SUV",
        year: 2022,
        price: 18500000,
        km: "42.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1568844293986-8c3c0f4b9b5e?auto=format&fit=crop&w=900&q=80",
        description: "SUV moderno, confortável e económico para utilização urbana e viagens."
    },

    {
        id: 3,
        brand: "Hyundai",
        model: "Tucson",
        category: "SUV",
        year: 2023,
        price: 14500000,
        km: "18.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=900&q=80",
        description: "Hyundai Tucson moderno, com excelente espaço interior e conforto."
    },

    {
        id: 4,
        brand: "BMW",
        model: "X5",
        category: "SUV",
        year: 2023,
        price: 35000000,
        km: "20.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80",
        description: "SUV premium BMW com elevado nível de conforto, tecnologia e desempenho."
    },

    {
        id: 5,
        brand: "Mercedes",
        model: "C200",
        category: "Sedan",
        year: 2022,
        price: 22000000,
        km: "30.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
        description: "Mercedes-Benz C200 elegante e confortável, ideal para utilização diária."
    },

    {
        id: 6,
        brand: "Toyota",
        model: "Corolla",
        category: "Sedan",
        year: 2023,
        price: 12000000,
        km: "15.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
        description: "Toyota Corolla económico e confiável para uso urbano e viagens."
    },

    {
        id: 7,
        brand: "BMW",
        model: "Série 3",
        category: "Sedan",
        year: 2021,
        price: 19000000,
        km: "45.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
        description: "BMW Série 3 com excelente desempenho e acabamento premium."
    },

    {
        id: 8,
        brand: "Toyota",
        model: "Hilux",
        category: "Pickup",
        year: 2022,
        price: 16000000,
        km: "55.000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=80",
        description: "Toyota Hilux 4x4 robusta, ideal para trabalho, negócios e viagens."
    },

    {
        id: 9,
        brand: "Ford",
        model: "Ranger",
        category: "Pickup",
        year: 2022,
        price: 17500000,
        km: "48.000 km",
        transmission: "Manual",
        fuel: "Diesel",
        image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=900&q=80",
        description: "Ford Ranger 4x4 com excelente capacidade e desempenho."
    },

    {
        id: 10,
        brand: "Ford",
        model: "Mustang",
        category: "Desportivo",
        year: 2023,
        price: 26000000,
        km: "12.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=900&q=80",
        description: "Ford Mustang desportivo com grande desempenho e design marcante."
    },

    {
        id: 11,
        brand: "BMW",
        model: "M4",
        category: "Desportivo",
        year: 2024,
        price: 42000000,
        km: "5.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
        description: "BMW M4 de alto desempenho, com tecnologia e acabamento premium."
    },

    {
        id: 12,
        brand: "Toyota",
        model: "Yaris",
        category: "Economico",
        year: 2022,
        price: 8500000,
        km: "38.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
        description: "Toyota Yaris compacto, económico e excelente para utilização urbana."
    },

    {
        id: 13,
        brand: "Hyundai",
        model: "i10",
        category: "Economico",
        year: 2021,
        price: 7000000,
        km: "50.000 km",
        transmission: "Manual",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
        description: "Hyundai i10 económico e prático para o dia a dia."
    },

    {
        id: 14,
        brand: "Mercedes",
        model: "Classe S",
        category: "Luxo",
        year: 2024,
        price: 55000000,
        km: "4.000 km",
        transmission: "Automático",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
        description: "Mercedes-Benz Classe S com máximo conforto, tecnologia e luxo."
    },

    {
        id: 15,
        brand: "BMW",
        model: "Série 7",
        category: "Luxo",
        year: 2024,
        price: 48000000,
        km: "6.000 km",
        transmission: "Automático",
        fuel: "Híbrido",
        image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80",
        description: "BMW Série 7 premium com tecnologia avançada e elevado conforto."
    }

];


/* =========================
   LOCAL STORAGE
========================= */

let carrosSalvos =
    JSON.parse(localStorage.getItem("autovenda_carros")) || [];

let carros = [
    ...carrosPadrao,
    ...carrosSalvos
];

let favoritos =
    JSON.parse(localStorage.getItem("autovenda_favoritos")) || [];


/* =========================
   ELEMENTOS
========================= */

const search = document.getElementById("search");
const category = document.getElementById("category");
const brand = document.getElementById("brand");
const maxPrice = document.getElementById("maxPrice");

const carsContainer =
    document.getElementById("carsContainer");

const noResults =
    document.getElementById("noResults");

const totalCars =
    document.getElementById("totalCars");


/* =========================
   FORMATAÇÃO
========================= */

function formatarPreco(valor) {

    return new Intl.NumberFormat("pt-AO").format(valor)
        + " Kz";

}


/* =========================
   MOSTRAR CARROS
========================= */

function mostrarCarros(lista = carros) {

    carsContainer.innerHTML = "";

    totalCars.textContent =
        `${lista.length} veículo${lista.length !== 1 ? "s" : ""}`;


    if (lista.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    lista.forEach(carro => {

        const favorito =
            favoritos.includes(carro.id);

        const card = document.createElement("article");

        card.className = "car-card";


        card.innerHTML = `

            <div class="car-image">

                <img
                    src="${carro.image}"
                    alt="${carro.brand} ${carro.model}"
                    onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80'"
                >

                <button
                    class="favorite ${favorito ? "active" : ""}"
                    onclick="alternarFavorito(${carro.id})"
                >
                    ${favorito ? "♥" : "♡"}
                </button>

            </div>


            <div class="car-info">

                <span class="badge">
                    ${carro.category}
                </span>

                <h3>
                    ${carro.brand} ${carro.model}
                </h3>

                <p class="details">
                    ${carro.year}
                    • ${carro.transmission}
                    • ${carro.fuel}
                    • ${carro.km}
                </p>

                <p class="price">
                    ${formatarPreco(carro.price)}
                </p>


                <div class="card-actions">

                    <button
                        class="details-button"
                        onclick="abrirDetalhes(${carro.id})"
                    >
                        Ver detalhes
                    </button>

                    <button
                        class="interest-button"
                        onclick="contactar('${carro.brand} ${carro.model}')"
                    >
                        WhatsApp
                    </button>

                </div>

            </div>

        `;

        carsContainer.appendChild(card);

    });

}


/* =========================
   FILTROS
========================= */

function filtrarCarros() {

    const texto =
        search.value.toLowerCase().trim();

    const categoria =
        category.value;

    const marca =
        brand.value;

    const preco =
        maxPrice.value;


    const resultado = carros.filter(carro => {

        const nome =
            `${carro.brand} ${carro.model}`
            .toLowerCase();

        const correspondeTexto =
            nome.includes(texto);

        const correspondeCategoria =
            !categoria ||
            carro.category === categoria;

        const correspondeMarca =
            !marca ||
            carro.brand === marca;

        const correspondePreco =
            !preco ||
            carro.price <= Number(preco);


        return (
            correspondeTexto &&
            correspondeCategoria &&
            correspondeMarca &&
            correspondePreco
        );

    });


    mostrarCarros(resultado);

}


search.addEventListener(
    "input",
    filtrarCarros
);

category.addEventListener(
    "change",
    filtrarCarros
);

brand.addEventListener(
    "change",
    filtrarCarros
);

maxPrice.addEventListener(
    "change",
    filtrarCarros
);


/* =========================
   CATEGORIAS
========================= */

function selecionarCategoria(nome) {

    category.value = nome;

    filtrarCarros();

    document
        .getElementById("carros")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   FAVORITOS
========================= */

function alternarFavorito(id) {

    if (favoritos.includes(id)) {

        favoritos =
            favoritos.filter(
                favorito => favorito !== id
            );

    } else {

        favoritos.push(id);

    }


    localStorage.setItem(
        "autovenda_favoritos",
        JSON.stringify(favoritos)
    );


    filtrarCarros();

}


function verificarFavorito(id) {

    return favoritos.includes(id);

}


/* =========================
   DETALHES
========================= */

let carroAtual = null;


function abrirDetalhes(id) {

    const carro =
        carros.find(c => c.id === id);

    if (!carro) return;

    carroAtual = carro;


    document.getElementById("detailImage").src =
        carro.image;

    document.getElementById("detailCategory").textContent =
        carro.category;

    document.getElementById("detailName").textContent =
        `${carro.brand} ${carro.model}`;

    document.getElementById("detailPrice").textContent =
        formatarPreco(carro.price);

    document.getElementById("detailYear").textContent =
        carro.year;

    document.getElementById("detailTransmission").textContent =
        carro.transmission;

    document.getElementById("detailFuel").textContent =
        carro.fuel;

    document.getElementById("detailKm").textContent =
        carro.km;

    document.getElementById("detailDescription").textContent =
        carro.description;


    atualizarBotaoFavoritoDetalhes();


    document
        .getElementById("detailsModal")
        .classList.add("active");

}


function atualizarBotaoFavoritoDetalhes() {

    const botao =
        document.getElementById("favoriteDetail");

    const ativo =
        verificarFavorito(carroAtual.id);


    botao.textContent =
        ativo
            ? "♥ Remover favorito"
            : "♡ Adicionar favorito";

}


document
    .getElementById("favoriteDetail")
    .addEventListener("click", () => {

        if (!carroAtual) return;

        alternarFavorito(carroAtual.id);

        atualizarBotaoFavoritoDetalhes();

    });


document
    .getElementById("whatsappDetail")
    .addEventListener("click", () => {

        if (!carroAtual) return;

        contactar(
            `${carroAtual.brand} ${carroAtual.model}`
        );

    });


/* =========================
   MODAIS
========================= */

function fecharModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");

}


window.addEventListener("click", event => {

    if (
        event.target.classList.contains("modal")
    ) {

        event.target.classList.remove("active");

    }

});


/* =========================
   WHATSAPP
========================= */

function contactar(carro) {

    const numero =
        "+244 931 351 743";

    const mensagem =
        `Olá! Vi o ${carro} no site AutoVenda e tenho interesse. Gostaria de receber mais informações.`;

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(
        url,
        "_blank"
    );

}


/* =========================
   ADMIN
========================= */

function abrirAdmin() {

    atualizarListaAdmin();

    document
        .getElementById("adminModal")
        .classList.add("active");

}


function atualizarListaAdmin() {

    const container =
        document.getElementById("adminCars");

    container.innerHTML = "";


    if (carrosSalvos.length === 0) {

        container.innerHTML =
            "<p>Nenhum veículo adicionado pelo administrador.</p>";

        return;

    }


    carrosSalvos.forEach(carro => {

        const div =
            document.createElement("div");

        div.className =
            "admin-car";


        div.innerHTML = `

            <div class="admin-car-info">

                <strong>
                    ${carro.brand} ${carro.model}
                </strong>

                <span>
                    ${formatarPreco(carro.price)}
                    • ${carro.category}
                </span>

            </div>

            <button
                class="delete-button"
                onclick="eliminarCarro(${carro.id})"
            >
                🗑️ Eliminar
            </button>

        `;

        container.appendChild(div);

    });

}


/* =========================
   ADICIONAR VEÍCULO
========================= */

document
    .getElementById("carForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const novoCarro = {

            id:
                Date.now(),

            brand:
                document.getElementById("newBrand").value,

            model:
                document.getElementById("newModel").value,

            category:
                document.getElementById("newCategory").value,

            year:
                Number(
                    document.getElementById("newYear").value
                ),

            price:
                Number(
                    document.getElementById("newPrice").value
                ),

            km:
                document.getElementById("newKm").value,

            transmission:
                document.getElementById("newTransmission").value,

            fuel:
                document.getElementById("newFuel").value,

            image:
                document.getElementById("newImage").value,

            description:
                document.getElementById("newDescription").value

        };


        carrosSalvos.push(novoCarro);

        carros.push(novoCarro);


        localStorage.setItem(
            "autovenda_carros",
            JSON.stringify(carrosSalvos)
        );


        this.reset();

        mostrarCarros(carros);

        atualizarListaAdmin();


        alert(
            "Veículo publicado com sucesso!"
        );

    });


/* =========================
   ELIMINAR VEÍCULO
========================= */

function eliminarCarro(id) {

    const confirmar =
        confirm(
            "Tem certeza que deseja eliminar este veículo?"
        );

    if (!confirmar) return;


    carrosSalvos =
        carrosSalvos.filter(
            carro => carro.id !== id
        );

    carros =
        carros.filter(
            carro => carro.id !== id
        );


    localStorage.setItem(
        "autovenda_carros",
        JSON.stringify(carrosSalvos)
    );


    mostrarCarros(carros);

    atualizarListaAdmin();

}


/* =========================
   INICIALIZAÇÃO
========================= */

mostrarCarros();