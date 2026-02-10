/**
 * PRODUCTOS DE ZAFIRO CROCHET
 * 
 * Estructura de cada producto:
 * {
 *   id: número único,
 *   name: "Nombre del producto",
 *   price: precio actual,
 *   oldPrice: precio anterior (opcional, si se pone, sale en OFERTAS),
 *   category: "categoría" o ["categoría1", "categoría2"] (puede ser string o array para múltiples categorías),
 *   image: "URL de la imagen",
 *   description: "Descripción breve",
 *   rating: número de estrellas (1-5)
 * }
 */

const products = [
    // === RAMOS ===
    {
        id: 1, name: "Snoopy Bouquet 🌹🌻", price: 40.00, oldPrice: 55.00,
        category: "ramos",
        image: "fotos productos/ramo snoopy 1.jpg",
        images: [
            "fotos productos/ramo snoopy 1.jpg",
            "fotos productos/ramo snoopy 2.jpeg",
        ],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍",
        rating: 5
    },
    {
        id: 2, name: "Ramo de Flores Amarillas", price: 35.00, oldPrice: 55.00,
        category: "ramos",
        image: "fotos productos/ramo girasol.jpeg",
        images: [
            "fotos productos/ramo girasol.jpeg",
            "fotos productos/ramo girasol2.jpeg",
        ],
        description: "Uno de nuestros ramos favoritos de flores amarillas 🌻💛",
        rating: 5
    },

    // === SNOOPY ===
    {
        id: 3, name: "Snoopy Clásico", price: 18.00, category: "snoopy",
        image: "fotos productos/snoopygordo.jpeg",
        images: [
            "fotos productos/snoopygordo.jpeg",
            "fotos productos/snoopygordo2.jpeg",
            "fotos productos/snoopygordo3.jpeg",
        ],
        description: "Snoopy. Medida: 11cm aprox. Material: 100% Algodón",
        rating: 5
    },

    // === PERSONAJES ===
    {
        id: 4,
        name: "Cristiano Ronaldo Amigurumi", price: 25.00, category: "personajes",
        image: "fotos productos/CR7.jpeg",
        images: [
            "fotos productos/CR7.jpeg",
            "fotos productos/CR7SI.jpeg",
        ],
        description: "El mayor goleador de la historia.",
        rating: 5
    },
    {
        id: 8, name: "Llavero de Batman 🦇", price: 25.00,
        category: ["personajes", "llaveros"],
        image: "fotos productos/batman.jpeg",
        images: [
            "fotos productos/batman.jpeg",
            "fotos productos/batman2.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },
    {
        id: 9, name: "Llavero de Alegría", price: 25.00,
        category: ["personajes", "llaveros"],
        image: "fotos productos/alegria.jpeg",
        images: [
            "fotos productos/alegria.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },
    {
        id: 10, name: "Llavero de Furia", price: 25.00,
        category: ["personajes", "llaveros"],
        image: "fotos productos/furia.jpeg",
        images: [
            "fotos productos/furia.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },
    {
        id: 11, name: "Llavero de Verguenza", price: 25.00,
        category: ["personajes", "llaveros"],
        image: "fotos productos/verguenza.jpeg",
        images: [
            "fotos productos/verguenza.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },
    {
        id: 12, name: "Llavero de Envidia", price: 25.00,
        category: ["personajes", "llaveros"],
        image: "fotos productos/envidia.jpeg",
        images: [
            "fotos productos/envidia.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },
    {
        id: 18, name: "Ariana grande, era Positions💚", price: 40.00,
        category: ["personajes"],
        image: "fotos productos/ariana grande.jpeg",
        images: [
            "fotos productos/ariana grande.jpeg",
        ],
        description: "Realizamos Amigurumis de tu cantante. actor o personaje favorito, consultar al privado❤️. Medida: 18cm Aprox. Material: 100% Acrílico, hipoalergénico🧶",
        rating: 5
    },


    // === LLAVEROS ===
    {
        id: 5, name: "Llaveros de abejitas", price: 25.00,
        category: "llaveros",
        image: "fotos productos/llavero abeja.jpeg",
        images: [
            "fotos productos/llavero abeja.jpeg",
            "fotos productos/llavero abeja2.jpeg",
        ],
        description: "Llaveros de abejitas con imanes. Material: 100% acrílico hipoalergénico",
        rating: 5
    },
    {
        id: 13, name: "Llavero de mono", price: 25.00,
        category: "llaveros",
        image: "fotos productos/mono llavero.jpeg",
        images: [
            "fotos productos/mono llavero.jpeg",
        ],
        description: "Llavero de monito 🐒🙈. Material: 100% acrílico hipoalergénico",
        rating: 5
    },
    {
        id: 14, name: "Dúo de fresas con chocolate 🍓", price: 25.00,
        category: "llaveros",
        image: "fotos productos/fresas.jpeg",
        images: [
            "fotos productos/fresas.jpeg",
        ],
        description: "Medida: 5cm aprox. Material: 100% acrílico hipoalergénico🧶",
        rating: 5
    },
    {
        id: 15, name: "Llavero mini pug🐶🐾", price: 25.00,
        category: "llaveros",
        image: "fotos productos/perro bigote.jpeg",
        images: [
            "fotos productos/perro bigote.jpeg",
        ],
        description: "Super tierno para colgar en tus llaves o bolso❤️. Material: 100% acrílico, hipoalergénico🧶",
        rating: 5
    },
    {
        id: 16, name: "Totoro - Mi vecino Totoro", price: 25.00,
        category: "llaveros",
        image: "fotos productos/totoro llavero.jpeg",
        images: [
            "fotos productos/totoro llavero.jpeg",
        ],
        description: "La realidad es para gente que carece de imaginación. Medida: 5cm aprox. Material: 100% acrílico hipoalergénico🧶",
        rating: 5
    },
    {
        id: 17, name: "Llaveritos de Minions💛", price: 25.00,
        category: "llaveros",
        image: "fotos productos/minion1.jpeg",
        images: [
            "fotos productos/minion1.jpeg",
            "fotos productos/minion2.jpeg",
        ],
        description: "Desliza para ver sus dos versiones 👉. Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶",
        rating: 5
    },
    {
        id: 19, name: "Pareja de Chigüiritos ❤️", price: 25.00,
        category: "llaveros",
        image: "fotos productos/capi1.jpeg",
        images: [
            "fotos productos/capi1.jpeg",
            "fotos productos/capi2.jpeg",
            "fotos productos/capi3.jpeg",
        ],
        description: "Medida: 5.5cm aprox. Material: 100% Acrílico, hipoalergénico🧶.",
        rating: 5
    },
    {
        id: 20, name: "Llaveros de tulipanes🌷", price: 25.00,
        category: "llaveros",
        image: "fotos productos/tulipanes.jpeg",
        images: [
            "fotos productos/tulipanes.jpeg",
        ],
        description: "Nada mejor que regalar una flor eterna❤️ . Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶.",
        rating: 5
    },
    {
        id: 21, name: "Llaveritos de medusas", price: 18.00,
        category: "llaveros",
        image: "fotos productos/medusas.jpeg",
        images: [
            "fotos productos/medusas.jpeg",
        ],
        description: "Super lindas para usar en tus llaves o bolso. Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶",
        rating: 5
    },

    // === PELUCHES ===
    {
        id: 6, name: "Peluche de vaquita rosada", price: 30.00,
        category: "peluches",
        image: "fotos productos/vaquita.jpeg",
        images: [
            "fotos productos/vaquita.jpeg",
            "fotos productos/vaquita2.jpeg",
        ],
        description: "Tejida con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.",
        rating: 5
    },

    // === PERSONALIZADOS ===
    {
        id: 7, name: "Pareja de amigurumis personalizados 🤍", price: 25.00,
        category: "personalizados",
        image: "fotos productos/parejapollo.jpeg",
        images: [
            "fotos productos/parejapollo.jpeg",
            "fotos productos/parejapollo1.jpeg",
            "fotos productos/parejapollo2.jpeg",
        ],
        description: "Esta linda pareja personalizada mide 15cm de alto. Junto a ellos, hemos incluido un llavero de pollito, de 5cm aprox. 🐥",
        rating: 5
    },

];
