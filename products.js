/**
 * Archivo de Datos de Productos
 * Aquí puedes editar, agregar o eliminar productos.
 * 
 * Estructura:
 * {
 *   id: número único,
 *   name: "Nombre del producto",
 *   price: precio actual,
 *   oldPrice: precio anterior (opcional, si se pone, sale en OFERTAS),
 *   category: "categoría" (ramos, snoopy, superheroes),
 *   image: "URL de la imagen",
 *   description: "Descripción breve",
 *   rating: número de estrellas (1-5)
 * }
 */

const products = [
    // === RAMOS ===
    {
        id: 1,
        name: "Snoopy Bouquet 🌹🌻",
        price: 40.00,
        oldPrice: 55.00,
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
        id: 2,
        name: "Ramo de Flores Amarillas",
        price: 22.00,
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
        id: 3,
        name: "Snoopy Clásico",
        price: 18.00,
        category: "snoopy",
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
        name: "Cristiano Ronaldo Amigurumi",
        price: 25.00,
        category: "personajes",
        image: "fotos productos/CR7.jpeg",
        images: [
            "fotos productos/CR7.jpeg",
            "fotos productos/CR7SI.jpeg",
        ],
        description: "El mayor goleador de la historia.",
        rating: 5
    },
    {
        id: 8,
        name: "Llavero de Batman 🦇",
        price: 25.00,
        category: "personajes",
        image: "fotos productos/batman.jpeg",
        images: [
            "fotos productos/batman.jpeg",
            "fotos productos/batman2.jpeg",
        ],
        description: "Medida: 7cm. Material: 100% acrílico, hipoalergénico.",
        rating: 5
    },

    // === LLAVEROS ===
    {
        id: 5,
        name: "Llaveros de abejitas",
        price: 25.00,
        category: "llaveros",
        image: "fotos productos/llavero abeja.jpeg",
        images: [
            "fotos productos/llavero abeja.jpeg",
            "fotos productos/llavero abeja2.jpeg",
        ],
        description: "Llaveros de abejitas con imanes. Material: 100% acrílico hipoalergénico",
        rating: 5
    },

    // === PELUCHES ===
    {
        id: 6,
        name: "Peluche de vaquita rosada",
        price: 30.00,
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
        id: 7,
        name: "Pareja de amigurumis personalizados 🤍",
        price: 25.00,
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
