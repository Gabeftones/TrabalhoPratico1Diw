const dados = {
  "lugares": [
    {
      "id": 1,
      "nome": "Paris",
      "descricao": "Capital francesa famosa por arte, gastronomia e arquitetura icônica.",
      "conteudo": "Paris oferece museus de classe mundial, boulevards arborizados e cafés charmosos. Ideal para quem busca história, cultura e experiências gastronômicas.",
      "pais": "França",
      "destaque": true,
      "data": "2025-03-30",
      "imagem_pincipal": "img/paris.jpg",
      "atracoes": [
        { "id": 1, "nome": "Torre Eiffel", "descricao": "Monumento símbolo de Paris com mirantes panorâmicos.", "imagem": "img/atracoes/torre_eiffel.jpg" },
        { "id": 2, "nome": "Museu do Louvre", "descricao": "Maior museu de arte do mundo, lar da Mona Lisa.", "imagem": "img/atracoes/louvre.jpg" },
        { "id": 3, "nome": "Catedral de Notre-Dame", "descricao": "Obra-prima gótica às margens do Sena.", "imagem": "img/atracoes/notre_dame.jpg" }
      ]
    },
    {
      "id": 2,
      "nome": "Kyoto",
      "descricao": "Antiga capital do Japão, reconhecida por templos, jardins e tradições.",
      "conteudo": "Kyoto preserva santuários xintoístas, templos budistas e bairros históricos. Visita imperdível para contemplar a florada das cerejeiras e a culinária kaiseki.",
      "pais": "Japão",
      "destaque": false,
      "data": "2025-03-28",
      "imagem_pincipal": "img/kyoto.jpg",
      "atracoes": [
        { "id": 1, "nome": "Fushimi Inari Taisha", "descricao": "Santuário famoso por milhares de portais torii.", "imagem": "img/atracoes/fushimi_inari.jpg" },
        { "id": 2, "nome": "Kinkaku-ji (Pavilhão Dourado)", "descricao": "Templo zen coberto com folhas de ouro em um lago sereno.", "imagem": "img/atracoes/kinkakuji.jpg" },
        { "id": 3, "nome": "Arashiyama", "descricao": "Distrito cênico com o icônico bosque de bambus.", "imagem": "img/atracoes/arashiyama.jpg" }
      ]
    },
    {
      "id": 3,
      "nome": "Rio de Janeiro",
      "descricao": "Cidade maravilhosa com praias, morros e ritmo contagiante.",
      "conteudo": "Entre o mar e a mata, o Rio combina belezas naturais, patrimônio histórico e vida cultural vibrante. Ideal para quem busca sol, trilhas e música.",
      "pais": "Brasil",
      "destaque": true,
      "data": "2025-03-27",
      "imagem_pincipal": "img/rio.jpg",
      "atracoes": [
        { "id": 1, "nome": "Cristo Redentor", "descricao": "Estátua no topo do Corcovado com vista panorâmica da cidade.", "imagem": "img/atracoes/cristo_redentor.jpg" },
        { "id": 2, "nome": "Pão de Açúcar", "descricao": "Complexo de morros com bondinho e mirantes sobre a baía.", "imagem": "img/atracoes/pao_de_acucar.jpg" },
        { "id": 3, "nome": "Jardim Botânico", "descricao": "Reserva com espécies nativas e alamedas de palmeiras imperiais.", "imagem": "img/atracoes/jardim_botanico_rio.jpg" }
      ]
    },
    {
      "id": 4,
      "nome": "Cidade do Cabo",
      "descricao": "Destino costeiro com montanhas dramáticas e vinícolas próximas.",
      "conteudo": "Mistura natureza exuberante, praias, cultura e gastronomia. A Table Mountain domina a paisagem e o Cape Point oferece trilhas e vistas oceânicas.",
      "pais": "África do Sul",
      "destaque": false,
      "data": "2025-03-25",
      "imagem_pincipal": "img/cidade_do_cabo.jpg",
      "atracoes": [
        { "id": 1, "nome": "Table Mountain", "descricao": "Montanha icônica com trilhas e teleférico.", "imagem": "img/atracoes/table_mountain.jpg" },
        { "id": 2, "nome": "V&A Waterfront", "descricao": "Área portuária com lojas, restaurantes e aquário.", "imagem": "img/atracoes/va_waterfront.jpg" },
        { "id": 3, "nome": "Boulders Beach", "descricao": "Praia famosa pela colônia de pinguins-africanos.", "imagem": "img/atracoes/boulders_beach.jpg" }
      ]
    },
    {
      "id": 5,
      "nome": "Barcelona",
      "descricao": "Cidade mediterrânea vibrante, marcada pelas obras de Gaudí.",
      "conteudo": "Barcelona combina praias urbanas, gastronomia catalã e arquitetura modernista. Um destino que agrada tanto a amantes de arte quanto de vida noturna.",
      "pais": "Espanha",
      "destaque": true,
      "data": "2025-03-22",
      "imagem_pincipal": "img/barcelona.jpg",
      "atracoes": [
        { "id": 1, "nome": "Sagrada Família", "descricao": "Basílica inacabada, obra-prima de Antoni Gaudí.", "imagem": "img/atracoes/sagrada_familia.jpg" },
        { "id": 2, "nome": "Parque Güell", "descricao": "Parque com mosaicos coloridos e vistas da cidade.", "imagem": "img/atracoes/parc_guell.jpg" },
        { "id": 3, "nome": "Casa Batlló", "descricao": "Edifício modernista com fachada ondulante e interiores criativos.", "imagem": "img/atracoes/casa_batllo.jpg" }
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html" || currentPage === "") {
        const carouselInner = document.getElementById("carousel-inner-content");
        const cardsContainer = document.getElementById("cards-container");
        let isFirstDestaque = true;

        dados.lugares.forEach(lugar => {
            if (lugar.destaque) {
                const activeClass = isFirstDestaque ? "active" : "";
                isFirstDestaque = false;
                
                carouselInner.innerHTML += `
                    <div class="carousel-item ${activeClass}">
                        <a href="detalhes.html?id=${lugar.id}">
                            <img src="${lugar.imagem_pincipal}" class="d-block w-100" alt="${lugar.nome}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${lugar.nome}</h5>
                                <p>${lugar.descricao}</p>
                            </div>
                        </a>
                    </div>
                `;
            }

            cardsContainer.innerHTML += `
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100 shadow-sm cursor-pointer" onclick="window.location.href='detalhes.html?id=${lugar.id}'" style="cursor: pointer;">
                        <img src="${lugar.imagem_pincipal}" class="card-img-top" alt="${lugar.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${lugar.nome}</h5>
                            <p class="card-text">${lugar.descricao}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});