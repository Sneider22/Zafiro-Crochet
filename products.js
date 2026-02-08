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
 *   image: "URL principal" (para compatibilidad),
 *   images: ["URL1", "URL2", "URL3"] (array de imágenes para galería),
 *   description: "Descripción breve",
 *   rating: número de estrellas (1-5)
 * }
 */

const products = [
    // === RAMOS ===
    {
        id: 1,
        name: "Snoopy Bouquet 🌹🌻",
        price: 25.00,
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
    {
        id: 3,
        name: "Ramo de Girasoles",
        price: 28.00,
        oldPrice: 35.00,
        category: "ramos",
        image: "https://images.unsplash.com/photo-1597848212624-e530bb4fe5c0?w=400",
        description: "Alegres girasoles tejidos que nunca se marchitan. ¡En oferta!",
        rating: 5
    },
    {
        id: 4,
        name: "Ramo Mixto Primavera",
        price: 30.00,
        category: "ramos",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400",
        description: "Combinación de diferentes flores de primavera en un solo ramo.",
        rating: 4
    },
    {
        id: 5,
        name: "Ramo de Lavanda",
        price: 20.00,
        category: "ramos",
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400",
        description: "Ramo de lavanda tejida con aroma relajante incluido.",
        rating: 5
    },

    // === SNOOPY ===
    {
        id: 6,
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
    {
        id: 7,
        name: "Snoopy Aviador",
        price: 22.00,
        category: "snoopy",
        image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400",
        description: "Snoopy con su icónico gorro y bufanda de aviador.",
        rating: 5
    },
    {
        id: 8,
        name: "Snoopy y Woodstock Set",
        price: 35.00,
        oldPrice: 42.00,
        category: "snoopy",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        description: "Set de Snoopy con su mejor amigo Woodstock. ¡Oferta especial!",
        rating: 5
    },
    {
        id: 9,
        name: "Snoopy Navideño",
        price: 20.00,
        category: "snoopy",
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400",
        description: "Snoopy con gorro de Santa Claus y bufanda navideña.",
        rating: 4
    },
    {
        id: 10,
        name: "Snoopy Llavero",
        price: 8.00,
        category: "snoopy",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400",
        description: "Pequeño Snoopy perfecto para colgar en llaves o mochilas.",
        rating: 5
    },

    // === SUPERHÉROES ===
    {
        id: 11,
        name: "Spider-Man Amigurumi",
        price: 25.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400",
        description: "El trepamuros favorito tejido a mano con todos sus detalles.",
        rating: 5
    },
    {
        id: 12,
        name: "Batman Chibi",
        price: 24.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400",
        description: "El caballero oscuro en versión adorable y compacta.",
        rating: 5
    },
    {
        id: 13,
        name: "Wonder Woman",
        price: 26.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400",
        description: "La princesa amazona con su lazo de la verdad incluido.",
        rating: 5
    },
    {
        id: 14,
        name: "Capitán América",
        price: 27.00,
        oldPrice: 32.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400",
        description: "El primer vengador con su escudo característico. ¡En oferta!",
        rating: 5
    },
    {
        id: 15,
        name: "Iron Man",
        price: 28.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400",
        description: "Tony Stark en su armadura dorada y roja tejida.",
        rating: 5
    },
    {
        id: 16,
        name: "Hulk Amigurumi",
        price: 23.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=400",
        description: "El gigante verde en versión tierna y abrazable.",
        rating: 4
    },
    {
        id: 17,
        name: "Thor con Mjolnir",
        price: 29.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400",
        description: "El dios del trueno con su martillo incluido.",
        rating: 5
    },
    {
        id: 18,
        name: "Black Widow",
        price: 24.00,
        category: "superheroes",
        image: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=400",
        description: "La espía más famosa del universo Marvel.",
        rating: 5
    },

    // === LLAVEROS ===
    {
        id: 19,
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
    {
        id: 20,
        name: "Batman Chibi",
        price: 24.00,
        category: "llaveros",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400",
        description: "El caballero oscuro en versión adorable y compacta.",
        rating: 5
    },
    {
        id: 21,
        name: "Wonder Woman",
        price: 26.00,
        category: "llaveros",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400",
        description: "La princesa amazona con su lazo de la verdad incluido.",
        rating: 5
    },
];
