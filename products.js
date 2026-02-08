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
 *   category: "categoría" (ej: peluches, llaveros, especial),
 *   image: "URL de la imagen",
 *   description: "Descripción breve",
 *   rating: número de estrellas (1-5)
 * }
 */

const products = [
    {
        id: 1,
        name: "Oso Gigante 'Meloso'",
        price: 45.00,
        oldPrice: 60.00, // Este producto saldrá en Ofertas
        category: "peluches",
        image: "https://images.unsplash.com/photo-1559440666-302a48680798?w=800&q=80",
        description: "Un abrazo gigante en forma de oso. Suave, tierno y el regalo perfecto.",
        rating: 5
    },
    {
        id: 2,
        name: "Dragón Guardián Místico",
        price: 35.00,
        category: "fantasia",
        image: "https://images.unsplash.com/photo-1532187875605-7f4170bcc40c?w=800&q=80",
        description: "Protege tus sueños con este dragón de felpa suave y detalles brillantes.",
        rating: 4
    },
    {
        id: 3,
        name: "Conejito 'Nube'",
        price: 18.00,
        oldPrice: 25.00,
        category: "mini",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80",
        description: "Pequeño, adorable y perfecto para llevar a todos lados.",
        rating: 5
    },
    {
        id: 4,
        name: "Gatito Kawaii Sushi",
        price: 22.00,
        category: "animales",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80",
        description: "La fusión perfecta entre ternura y apetito. ¡No te lo comas!",
        rating: 5
    },
    {
        id: 5,
        name: "Panda Dormilón",
        price: 30.00,
        category: "animales",
        image: "https://images.unsplash.com/photo-1562981504-m159981442c?w=800&q=80",
        description: "Experto en siestas. El compañero ideal para tus tardes de descanso.",
        rating: 4
    },
    {
        id: 6,
        name: "Unicornio Estelar",
        price: 40.00,
        oldPrice: 55.00,
        category: "fantasia",
        image: "https://images.unsplash.com/photo-1549488340-205191f69225?w=800&q=80",
        description: "Brilla en la oscuridad (bueno, en tu corazón seguro que sí).",
        rating: 5
    }
];
