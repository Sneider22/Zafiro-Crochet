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
        id: 1, name: "Snoopy Bouquet 🌹🌻", price: 38.00, oldPrice: 45.00, category: ["ramos", "snoopy"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg","fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 2, name: "Ramo de Flores Amarillas", price: 45.00, oldPrice: 55.00, category: "ramos",
        image: "fotos productos/ramo girasol.jpeg",
        images: ["fotos productos/ramo girasol.jpeg", "fotos productos/ramo girasol2.jpeg",],
        description: "Uno de nuestros ramos favoritos de flores amarillas 🌻💛", rating: 5
    },

    // === SNOOPY ===
    {
        id: 3, name: "Snoopy Clásico", price: 10.00, category: "snoopy",
        image: "fotos productos/snoopygordo.jpeg",
        images: ["fotos productos/snoopygordo.jpeg","fotos productos/snoopygordo2.jpeg", "fotos productos/snoopygordo3.jpeg",],
        description: "Snoopy. Medida: 11cm aprox. Material: 100% Algodón", rating: 5
    },
    {
        id: 43, name: "Snoopy aviador y Woodstock", price: 14.00, category: "snoopy",
        image: "fotos productos/snoopyavion.jpg",
        images: ["fotos productos/snoopyavion.jpg"],
        description: "Estos llaveros tienen una medida de 11cm y 5cm. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },

    // === PERSONAJES ===
    {
        id: 4, name: "Cristiano Ronaldo Amigurumi", price: 22.00, oldPrice: 25.00, category: "personajes",
        image: "fotos productos/CR7.jpeg",
        images: ["fotos productos/CR7.jpeg","fotos productos/CR7SI.jpeg",],
        description: "El mayor goleador de la historia.", rating: 5
    },
    {
        id: 8, name: "Llavero de Batman", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/batman.jpeg",
        images: ["fotos productos/batman.jpeg","fotos productos/batman2.jpeg",],
        description: "Medida: 7cm 🦇 Material: 100% acrílico, hipoalergénico.", rating: 5
    },
    {
        id: 9, name: "Llavero de Alegría", price: 10.00, category: ["personajes", "llaveros"],
        image: "fotos productos/alegria.jpeg",
        images: ["fotos productos/alegria.jpeg",],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.", rating: 5
    },
    {
        id: 10, name: "Llavero de Furia", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/furia.jpeg",
        images: ["fotos productos/furia.jpeg",],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.", rating: 5
    },
    {
        id: 18, name: "Ariana grande, era Positions", price: 22.00, category: ["personajes"],
        image: "fotos productos/ariana grande.jpeg",
        images: ["fotos productos/ariana grande.jpeg",],
        description: "Medida: 18cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 32, name: "Shrek", price: 15.00, category: ["personajes"],
        image: "fotos productos/shrek.jpg",
        images: ["fotos productos/shrek.jpg",],
        description: "Medida: 12.5cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 37, name: "Young Miko", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos/miko1.jpg",
        images: ["fotos productos/miko1.jpg","fotos productos/miko2.jpg",],
        description: "Medida: 13cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 38, name: "Peter Rabbit - conejos", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/conejos.jpg",
        images: ["fotos productos/conejos.jpg","fotos productos/conejos2.jpg",],
        description: "Medida: 10cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 39, name: "Pesebre - Navidad", price: 22.00, category: ["personajes"],
        image: "fotos productos/pesebre.jpg",
        images: ["fotos productos/pesebre.jpg"],
        description: "Medidas: Las figuras de San José y la Virgen María miden 9cm aprox. y el niño Jesús 7.5cm.. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },

    // === LLAVEROS ===
    {
        id: 5, name: "Llaveros de abejitas", price: 12.00, category: "llaveros",
        image: "fotos productos/llavero abeja.jpeg",
        images: ["fotos productos/llavero abeja.jpeg", "fotos productos/llavero abeja2.jpeg",],
        description: "Llaveros de abejitas con imanes. Material: 100% acrílico hipoalergénico", rating: 5
    },
    {
        id: 13, name: "Llavero de mono", price: 4.00, category: "llaveros",
        image: "fotos productos/mono llavero.jpeg",
        images: ["fotos productos/mono llavero.jpeg",],
        description: "Llavero de monito 🐒🙈. Material: 100% acrílico hipoalergénico", rating: 5
    },
    {
        id: 14, name: "Dúo de fresas con chocolate", price: 8.00, category: "llaveros",
        image: "fotos productos/fresas.jpeg",
        images: ["fotos productos/fresas.jpeg",],
        description: "Medida: 5cm aprox. Material: 100% acrílico hipoalergénico🧶", rating: 5
    },
    {
        id: 15, name: "Llavero mini pug", price: 4.50, category: "llaveros",
        image: "fotos productos/perro bigote.jpeg",
        images: ["fotos productos/perro bigote.jpeg",],
        description: "Super tierno para colgar en tus llaves o bolso❤️. Material: 100% acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 16, name: "Totoro - Mi vecino Totoro", price: 6.50, category: "llaveros",
        image: "fotos productos/totoro llavero.jpeg",
        images: ["fotos productos/totoro llavero.jpeg",],
        description: "Medida: 5cm aprox. Material: 100% acrílico hipoalergénico🧶", rating: 5
    },
    {
        id: 17, name: "Llavero de Minions", price: 5.00, category: "llaveros",
        image: "fotos productos/minion1.jpeg",
        images: ["fotos productos/minion1.jpeg",],
        description: "Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 19, name: "Pareja de Capibaras", price: 10.00, category: "llaveros",
        image: "fotos productos/capi1.jpeg",
        images: ["fotos productos/capi1.jpeg", "fotos productos/capi2.jpeg", "fotos productos/capi3.jpeg",],
        description: "Medida: 5.5cm aprox. Material: 100% Acrílico, hipoalergénico🧶.", rating: 5
    },
    {
        id: 20, name: "Llaveros de tulipanes c/u", price: 4.99, category: "llaveros",
        image: "fotos productos/tulipanes.jpeg",
        images: ["fotos productos/tulipanes.jpeg",],
        description: "Nada mejor que regalar una flor eterna❤️ Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶.", rating: 5
    },
    {
        id: 21, name: "Llavero de medusa", price: 13.00, category: "llaveros",
        image: "fotos productos/medusas.jpeg",
        images: ["fotos productos/medusas.jpeg",],
        description: "Super lindas para usar en tus llaves o bolso. Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 22, name: "Llavero de tortuga", price: 7.00, category: "llaveros",
        image: "fotos productos/tortuga.jpeg",
        images: ["fotos productos/tortuga.jpeg",],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 22, name: "Llavero de Capibara - manzana", price: 5.00, category: "llaveros",
        image: "fotos productos/capimanzana.jpg",
        images: ["fotos productos/capimanzana.jpg",],
        description: "Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 23, name: "Sailor Moon - versión llavero", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos/sailor.jpg",
        images: ["fotos productos/sailor.jpg",],
        description: "Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 24, name: "Llavero de pollo coquette", price: 5.00, category: ["personajes", "llaveros"],
        image: "fotos productos/pollitico1.jpg",
        images: ["fotos productos/pollitico1.jpg", "fotos productos/pollitico2.jpg",],
        description: "Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 25, name: "Llavero de coneja Miffy", price: 10.00, category: "llaveros",
        image: "fotos productos/coneja.jpg",
        images: ["fotos productos/coneja.jpg",],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 26, name: "Llavero de pollo con cascarón", price: 5.00, category: "llaveros",
        image: "fotos productos/pollohuevo.jpg",
        images: ["fotos productos/pollohuevo.jpg", "fotos productos/pollohuevo2.jpg",],
        description: "Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 27, name: "Llavero de doctora", price: 13.00, category: ["llaveros", "personalizados"],
        image: "fotos productos/doctora.jpg",
        images: ["fotos productos/doctora.jpg",],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 28, name: "Llavero de Snoopy", price: 8.00, category: ["snoopy", "llaveros"],
        image: "fotos productos/snoopylazo.jpg",
        images: ["fotos productos/snoopylazo.jpg",],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 29, name: "Llavero de Squirtle - pokemon", price: 7.00, category: ["personajes", "llaveros"],
        image: "fotos productos/squirtle.jpg",
        images: ["fotos productos/squirtle.jpg", "fotos productos/squirtle2.jpg",],
        description: "Medida: 6cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 30, name: "Llaveros de Harry Potter, Ron y Hermione", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/HRH.jpg",
        images: ["fotos productos/HRH.jpg",],
        description: "Medida: 8.5cm aprox. Material: 100% Acrílico, hipoalergénico🧶. 8$ c/u", rating: 5
    },
    {
        id: 31, name: "Llavero de Pikachu - pokemon", price: 10.00, category: ["personajes", "llaveros"],
        image: "fotos productos/pikachu1.png",
        images: ["fotos productos/pikachu1.png", "fotos productos/pikachu2.png", "fotos productos/pikachu3.png",],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 34, name: "Llavero de Erizo", price: 7.00, category: ["llaveros"],
        image: "fotos productos/erizo.jpg",
        images: ["fotos productos/erizo.jpg", "fotos productos/erizo2.jpg",],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 35, name: "Llavero de Totodile - pokemon", price: 10.00, category: ["personajes", "llaveros"],
        image: "fotos productos/totodile.jpg",
        images: ["fotos productos/totodile.jpg"],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 36, name: "Llavero de pollo chef", price: 7.00, category: ["llaveros"],
        image: "fotos productos/pollochef.jpg",
        images: ["fotos productos/pollochef.jpg"],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 42, name: "Llavero de Pochacco - Sanrio", price: 10.00, category: ["llaveros","personajes"],
        image: "fotos productos/pochaco.jpg",
        images: ["fotos productos/pochaco.jpg"],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },


    // === PELUCHES ===
    {
        id: 6, name: "Peluche de vaquita rosada", price: 25.00, category: "peluches",
        image: "fotos productos/vaquita.jpeg",
        images: ["fotos productos/vaquita.jpeg",],
        description: "Tejida con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.", rating: 5
    },


    // === PERSONALIZADOS ===
    {
        id: 7, name: "Pareja de amigurumis personalizados", price: 40.00, oldPrice: 50.00, category: "personalizados",
        image: "fotos productos/parejapollo.jpeg",
        images: ["fotos productos/parejapollo.jpeg", "fotos productos/parejapollo1.jpeg", "fotos productos/parejapollo2.jpeg",],
        description: "Esta linda pareja personalizada mide 15cm de alto. Junto a ellos, hemos incluido un llavero de pollito, de 5cm aprox. 🐥", rating: 5
    },
    {
        id: 33, name: "LLavero personalizado de Arquitecto/Ingeniero", price: 10.00, category: ["llaveros","personalizados"],
        image: "fotos productos/arq.jpg",
        images: ["fotos productos/arq.jpg",],
        description: "Medida: 10cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 40, name: "Mascota grande personalizada - Perro", price: 18.00, category: ["personalizados"],
        image: "fotos productos/perroonix.jpg",
        images: ["fotos productos/perroonix.jpg",],
        description: "Medida: 14cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 41, name: "Mascota grande personalizada - Gato", price: 20.00, category: ["personalizados"],
        image: "fotos productos/gatoperso.jpg",
        images: ["fotos productos/gatoperso.jpg","fotos productos/gatoperso2.jpg"],
        description: "Medida: 20m Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },

];
