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
    // === SNOOPY ===
    {
        id: 1, name: "Snoopy Bouquet 🌹🌻", price: 35.00, oldPrice: 40.00, category: ["ramos", "snoopy"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 56, name: "Peluche de snoopy", price: 25.00, category: ["peluches", "snoopy"],
        image: "fotos productos/peluchesnoo.jpg",
        images: ["fotos productos/peluchesnoo.jpg", "fotos productos/peluchesnoo2.jpg", "fotos productos/peluchesnoo3.jpg"],
        description: "Tejido con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.", rating: 5
    },
    {
        id: 85, name: "Peluche de Yoshi", price: 45.00, category: ["personajes", "peluches"],
        image: "fotos productos/yoshi1.jpg",
        images: ["fotos productos/yoshi1.jpg", "fotos productos/yoshi2.jpg", "fotos productos/yoshi3.jpg", "fotos productos/yoshi4.jpg",],
        description: " Medida: 27cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 67, name: "Pareja Carl y Ellie - UP", price: 36.00, category: ["personajes"],
        image: "fotos productos/up.jpg",
        images: ["fotos productos/up.jpg"],
        description: "Medida: 18cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 68, name: "Ramo doctora personalizado ", price: 54.00, category: ["ramos"],
        image: "fotos productos/ramodoc.jpg",
        images: ["fotos productos/ramodoc.jpg"],
        description: "Este ramo contiene dos gerberas, 4 tulipanes y una doctora de 18cm. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 69, name: "Pareja de pinguinos ", price: 28.00, category: ["personalizados"],
        image: "fotos productos/pingui1.jpg",
        images: ["fotos productos/pingui1.jpg", "fotos productos/pingui2.jpg"],
        description: "Medida: 10cm aprox. Material: 100% Acrílico,  hipoalergénico🧶", rating: 5
    },
    {
        id: 92, name: "Peluche de BbokAri - Stray Kids", price: 25.00, category: ["personajes", "peluches"],
        image: "fotos productos/pollorojo.jpg",
        images: ["fotos productos/pollorojo.jpg", "fotos productos/pollorojo2.jpg",],
        description: " Medida: 25cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 71, name: "Ramo rosas y tulipanes", price: 35.00, category: ["ramos"],
        image: "fotos productos/ramorosa1.jpg",
        images: ["fotos productos/ramorosa1.jpg", "fotos productos/ramorosa2.jpg",],
        description: " Este ramo incluye: 2 rosas, 3 tulipanes abiertos, 2 margaritas. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 72, name: "Ramo Personalizado Gatos", price: 45.00, category: ["ramos", "personalizados"],
        image: "fotos productos/ramogatos1.jpg",
        images: ["fotos productos/ramogatos1.jpg", "fotos productos/ramogatos2.jpg",],
        description: " Este ramo incluye: 4 gatos de 8cm, 3 margaritas Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 74, name: "Llavero mascota - Gato", price: 10.00, category: ["llaveros", "personalizados"],
        image: "fotos productos/gatonegro.jpg",
        images: ["fotos productos/gatonegro.jpg",],
        description: " Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 75, name: "Llavero mascota - Perro", price: 10.00, category: ["llaveros", "personalizados"],
        image: "fotos productos/bigoton.jpg",
        images: ["fotos productos/bigoton.jpg",],
        description: " Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 76, name: "Ramo dinosaurios", price: 32.00, category: ["ramos"],
        image: "fotos productos/dino.jpg",
        images: ["fotos productos/dino.jpg", "fotos productos/dino2.jpg",],
        description: " Este ramo incluye: 2 dinosaurios de 8cm, 3 rosas. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 77, name: "Ramo Cristiano Ronaldo", price: 25.00, category: ["ramos", "personalizados"],
        image: "fotos productos/cris.jpg",
        images: ["fotos productos/cris.jpg",],
        description: " Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 78, name: "Pepe el pollo", price: 20.00, category: ["personajes"],
        image: "fotos productos/pepe.jpg",
        images: ["fotos productos/pepe.jpg",],
        description: " Medida: 20cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 80, name: "Ramo Variado", price: 40.00, category: ["ramos"],
        image: "fotos productos/ramovariado.jpg",
        images: ["fotos productos/ramovariado.jpg", "fotos productos/ramovariado2.jpg",],
        description: " Este ramo incluye: 1 margarita premium, 2 rosas, 4 tulipanes, 1 abeja, 1 corazón. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 81, name: "Ramo Snoopy lirio", price: 23.00, category: ["ramos", "snoopy"],
        image: "fotos productos/ramolirio.jpg",
        images: ["fotos productos/ramolirio.jpg", "fotos productos/ramolirio2.jpg",],
        description: " Este ramo incluye: 1 Snoopy clásico, 1 Lirio, 6 mini margaritas. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 83, name: "Ramo Snoopy Rosa", price: 23.00, category: ["ramos", "snoopy"],
        image: "fotos productos/snoopyrosa.jpg",
        images: ["fotos productos/snoopyrosa.jpg",],
        description: " Este ramo incluye: 1 Snoopy clásico, 1 rosa, 6 mini margaritas. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 84, name: "Ramo Pollito Girasol", price: 30.00, category: ["ramos"],
        image: "fotos productos/pollito.jpg",
        images: ["fotos productos/pollito.jpg",],
        description: " Este ramo incluye: 1 pollito de 8cm , 3 mini girasoles, 4 mini margaritas, 3 mini corazones. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 86, name: "Billie Eilish", price: 25.00, category: ["personalizados"],
        image: "fotos productos2/billie.jpg",
        images: ["fotos productos2/billie.jpg",],
        description: " Medida: 18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 87, name: "Llavero de cactus", price: 8.00, category: ["llaveros"],
        image: "fotos productos/cactus.jpg",
        images: ["fotos productos/cactus.jpg",],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶. 8$ c/u", rating: 5
    },
    {
        id: 30, name: "Llaveros de Harry Potter, Ron y Hermione", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/HRH.jpg",
        images: ["fotos productos/HRH.jpg",],
        description: "Medida: 8.5cm aprox. Material: 100% Acrílico, hipoalergénico🧶. 8$ c/u", rating: 5
    },
    {
        id: 54, name: "Pareja de Snoopy con Imanes", price: 12.00, category: "snoopy",
        image: "fotos productos/parejasnoo.jpg",
        images: ["fotos productos/parejasnoo.jpg", "fotos productos/parejasnoo2.jpg",],
        description: "Estos llaveros tiene una medida de 4.5cm. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },
    {
        id: 2, name: "Ramo de Flores Amarillas", price: 45.00, oldPrice: 55.00, category: "ramos",
        image: "fotos productos/ramo girasol.jpeg",
        images: ["fotos productos/ramo girasol.jpeg", "fotos productos/ramo girasol2.jpeg",],
        description: "Uno de nuestros ramos favoritos de flores amarillas 🌻💛", rating: 5
    },
    {
        id: 43, name: "Snoopy aviador y Woodstock", price: 14.00, category: "snoopy",
        image: "fotos productos/snoopyavion.jpg",
        images: ["fotos productos/snoopyavion.jpg"],
        description: "Estos llaveros tienen una medida de 11cm y 5cm. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },
    {
        id: 3, name: "Snoopy Clásico", price: 10.00, category: "snoopy",
        image: "fotos productos/snoopygordo3.jpeg",
        images: ["fotos productos/snoopygordo3.jpeg", "fotos productos/snoopygordo.jpeg", "fotos productos/snoopygordo2.jpeg",],
        description: "Snoopy. Medida: 11cm aprox. Material: 100% Algodón", rating: 5
    },
    {
        id: 49, name: "Mini Snoopy", price: 5.00, category: "snoopy",
        image: "fotos productos/minisnoopy.jpg",
        images: ["fotos productos/minisnoopy.jpg", "fotos productos/minisnoopy2.jpg",],
        description: "Este llaverito tiene una medida de 4.5cm. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },
    {
        id: 58, name: "Ramo de tulipanes y Snoopy", price: 25.00, category: ["ramos", "snoopy"],
        image: "fotos productos/ramosnoo.jpg",
        images: ["fotos productos/ramosnoo.jpg"],
        description: "Este ramo contiene 3 tulipanes y un Snoopy. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },
    {
        id: 62, name: "Ramo de Hello Kitty", price: 18.00, category: ["ramos"],
        image: "fotos productos/hellokitty.jpg",
        images: ["fotos productos/hellokitty.jpg"],
        description: "Este ramo contiene 2 margaritas y una Hello Kitty. Material: 100% Acrílico, hipoalergénico🧶 Snoopy: 10$ y Woodstock: 4$", rating: 5
    },

    // === PERSONAJES ===
    {
        id: 57, name: "Llavero de Pochacco - sanrio", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/pochacogordo.jpg",
        images: ["fotos productos/pochacogordo.jpg"],
        description: "Medida: 6cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 59, name: "Llavero de Stitch", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/stitch.jpg",
        images: ["fotos productos/stitch.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 4, name: "Cristiano Ronaldo Amigurumi", price: 20.00, oldPrice: 25.00, category: "personajes",
        image: "fotos productos/CR7.jpeg",
        images: ["fotos productos/CR7.jpeg", "fotos productos/CR7SI.jpeg",],
        description: "El mayor goleador de la historia.", rating: 5
    },
    {
        id: 93, name: "Llavero de Cristiano Ronaldo - Real Madrid", price: 12.00, category: ["personajes", "llaveros"],
        image: "fotos productos/llaverocris.jpg",
        images: ["fotos productos/llaverocris.jpg"],
        description: "Medida: 11cm. Material: 100% acrílico, hipoalergénico. El mayor goleador de la historia.", rating: 5
    },
    {
        id: 94, name: "Caja personalizada con flor", price: 30.00, category: ["personalizados"],
        image: "fotos productos/macetaniña.jpg",
        images: ["fotos productos/macetaniña.jpg"],
        description: "Incluye un amigurumi de 11cm, una maceta con la flor de tu preferencia de 16cm y luces LED. Material: 100% acrílico, hipoalergénico. El mayor goleador de la historia.", rating: 5
    },
    {
        id: 95, name: "Caja personalizada con flor", price: 30.00, category: ["personalizados"],
        image: "fotos productos/cajaflor1.jpg",
        images: ["fotos productos/cajaflor1.jpg", "fotos productos/cajaflor2.jpg",],
        description: "Incluye un amigurumi de 11cm, una maceta con la flor de tu preferencia de 16cm y luces LED. Material: 100% acrílico, hipoalergénico. El mayor goleador de la historia.", rating: 5
    },
    {
        id: 96, name: "Stephen Curry Amigurumi", price: 22.00, category: ["personajes"],
        image: "fotos productos2/curry.jpg",
        images: ["fotos productos2/curry.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 97, name: "Colgante para el carro - Spiderman", price: 15.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/spiderman.jpg",
        images: ["fotos productos2/spiderman.jpg"],
        description: "La máscara es desmontable y puedes personalizarlo a tu gusto, ideal para colgar en el retrovisor. Medida: 11cm aprox. Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 98, name: "Ellie - The Last of Us", price: 22.00, category: ["personajes"],
        image: "fotos productos2/ellie.jpg",
        images: ["fotos productos2/ellie.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 99, name: "Pareja de amigurumis personalizados", price: 36.00, category: "personalizados",
        image: "fotos productos2/pareja.jpg",
        images: ["fotos productos2/pareja.jpg",],
        description: "Medida: 16/18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 100, name: "Llaveros de Chimuelo y Furia Luminosa", price: 12.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/chimuelo.jpg",
        images: ["fotos productos2/chimuelo.jpg"],
        description: "6$ c/u- 12$ el par. Medida: 5cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 101, name: "Young Miko", price: 25.00, category: ["personajes"],
        image: "fotos productos2/miko.jpg",
        images: ["fotos productos2/miko.jpg"],
        description: "Medida: 17cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 102, name: "Llaveros de pinguinos", price: 10.00, category: ["llaveros"],
        image: "fotos productos2/pingui.jpg",
        images: ["fotos productos2/pingui.jpg"],
        description: "5$ c/u- 10$ el par, con imanes 12$ el par. Medida: 5cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 103, name: "Amigurumi Personalizado", price: 22.00, category: ["personalizados"],
        image: "fotos productos2/joven.jpg",
        images: ["fotos productos2/joven.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 104, name: "Porta audífonos", price: 10.00, category: ["llaveros"],
        image: "fotos productos2/audifonos.jpg",
        images: ["fotos productos2/audifonos.jpg",],
        description: "Ideales para colgar en tu bolso o tote bag, escoge los colores que más te gusten y personalizalos a tu estilo. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 105, name: "Ramo Snoopy y margaritas", price: 35.00, category: ["ramos", "Snoopy"],
        image: "fotos productos2/marga.jpg",
        images: ["fotos productos2/marga.jpg",],
        description: "Este ramo incluye : 1 Snoopy Aviador, 6 margaritas. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 106, name: "Llavero de rana", price: 10.00, category: ["llaveros"],
        image: "fotos productos2/rana.jpg",
        images: ["fotos productos2/rana.jpg",],
        description: "Medida:8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 107, name: "Spiderman Miles Morales- colgante retrovisor", price: 10.00, category: ["llaveros"],
        image: "fotos productos2/miles.jpg",
        images: ["fotos productos2/miles.jpg",],
        description: "Medida:8cm aprox. Ideal para colgar en el carro o usarlo como llavero. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 108, name: "Llavero mascota - Perro", price: 10.00, category: ["personalizados", "llaveros"],
        image: "fotos productos2/perroblanco.jpg",
        images: ["fotos productos2/perroblanco.jpg",],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 109, name: "Ramo personalizado ", price: 55.00, category: ["personalizados", "ramos"],
        image: "fotos productos2/ramoperro.jpg",
        images: ["fotos productos2/ramoperro.jpg",],
        description: "Este ramo incluye: 2 personalizados de 18cm, una mascota de 8cm y 4 margaritas. Recuerda que puedes personalizar a tu gusto y variar la cantidad y tipo de flores. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 110, name: "Flor de Rapunzel ", price: 25.00, category: ["ramos"],
        image: "fotos productos2/rapunzel.jpg",
        images: ["fotos productos2/rapunzel.jpg",],
        description: "Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 111, name: "Hermione - Harry Potter ", price: 25.00, category: ["personajes"],
        image: "fotos productos2/hermione.jpg",
        images: ["fotos productos2/hermione.jpg",],
        description: "Medida: 20cm aprox.  Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 112, name: "Llavero de Rosita Fresita", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/rosita.jpg",
        images: ["fotos productos2/rosita.jpg",],
        description: "Medida: 10cm aprox.  Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 114, name: "Snoopy con Ramo de rosas", price: 40.00, category: ["Snoopy", "Ramo"],
        image: "fotos productos2/snoo.jpg",
        images: ["fotos productos2/snoo.jpg",],
        description: "Snoopy: 27cm de alto: 25$, Ramo de 3 rosas: 15$ Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 115, name: "Amigurumis personalizadas", price: 26.00, category: ["personalizados", "llaveros"],
        image: "fotos productos2/amigas.jpg",
        images: ["fotos productos2/amigas.jpg",],
        description: "Amigurumis personalizadas de 11cm aprox. Tipo llavero 13$ c/u. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 116, name: "Llavero mascota - Perro y Gato", price: 10.00, category: ["personalizados", "llavero"],
        image: "fotos productos2/perroygato.jpg",
        images: ["fotos productos2/perroygato.jpg",],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 117, name: "Pareja de amigurumis personalizados", price: 36.00, category: ["personalizados"],
        image: "fotos productos2/parejaazul.jpg",
        images: ["fotos productos2/parejaazul.jpg",],
        description: "Medida: 18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 118, name: "Doctor José Gregorio", price: 25.00, category: ["personajes"],
        image: "fotos productos2/jose.jpg",
        images: ["fotos productos2/jose.jpg",],
        description: "Medida: 18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 119, name: "Llavero de Doctor José Gregorio", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/joseg.jpg",
        images: ["fotos productos2/joseg.jpg",],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 120, name: "Ramo Hollow Knight", price: 30.00, category: ["personajes", "ramos"],
        image: "fotos productos2/hollow.jpg",
        images: ["fotos productos2/hollow.jpg",],
        description: "Este Ramo incluye: 3 tulipanes y 1 hollow Knight de 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },

    {
        id: 121, name: "Llavero mascota - Perro", price: 10.00, category: ["personalizados", "llaveros"],
        image: "fotos productos2/perrobigotin.jpg",
        images: ["fotos productos2/perrobigotin.jpg",],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },

    {
        id: 122, name: "Chuyin - Fuerza Regida ", price: 22.00, category: ["personajes"],
        image: "fotos productos2/chuyin.jpg",
        images: ["fotos productos2/chuyin.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 123, name: "Peluche de Snoopy navideño ", price: 30.00, category: ["snoopy", "peluches"],
        image: "fotos productos2/snoonavidad.jpg",
        images: ["fotos productos2/snoonavidad.jpg",],
        description: "Medida: 27cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 124, name: "Personajes Harry Potter - Harry, Ron y Hermione", price: 60.00, category: ["personajes"],
        image: "fotos productos2/harry.jpg",
        images: ["fotos productos2/harry.jpg",],
        description: "Precio: 25$ c/u. 3x60$. Medida: 18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 125, name: "Sanji - One piece", price: 15.00, category: ["personajes"],
        image: "fotos productos2/sanji.jpg",
        images: ["fotos productos2/sanji.jpg",],
        description: "Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 126, name: "Llavero minion", price: 5.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/minion.jpg",
        images: ["fotos productos2/minion.jpg",],
        description: "Medida: 5cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 127, name: "Llavero mascota - Loro", price: 8.00, category: ["personalizados", "llaveros"],
        image: "fotos productos2/loro.jpg",
        images: ["fotos productos2/loro.jpg",],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 128, name: "Ramo personalizado", price: 28.00, category: ["personalizados", "ramos"],
        image: "fotos productos2/niño.jpg",
        images: ["fotos productos2/niño.jpg",],
        description: "Este ramo incluye 1 personalizado de 18cm y 2 tulipanes. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 129, name: "Combo llaveros Demon Slayer", price: 35.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/demon.jpg",
        images: ["fotos productos2/demon.jpg",],
        description: "Precio: 13$ cada uno. 3x35$ Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 130, name: "Billie Eilish", price: 25.00, category: ["personalizados"],
        image: "fotos productos2/billie2.jpg",
        images: ["fotos productos2/billie2.jpg",],
        description: "Medida: 18cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 131, name: "Peluche de Elefante", price: 35.00, category: ["peluche"],
        image: "fotos productos2/elefante.jpg",
        images: ["fotos productos2/elefante.jpg",],
        description: "Medida: 27cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 132, name: "Llaveros de pareja personalizados", price: 26.00, category: ["personalizados", "llaveros"],
        image: "fotos productos2/barinas.jpg",
        images: ["fotos productos2/barinas.jpg",],
        description: "Precio: 13$ c/u. Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 133, name: "Ed Maverick", price: 25.00, category: ["personajes"],
        image: "fotos productos2/ed.jpg",
        images: ["fotos productos2/ed.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 134, name: "Llavero de oso", price: 8.00, category: ["llaveros"],
        image: "fotos productos2/oso.jpg",
        images: ["fotos productos2/oso.jpg",],
        description: "Medida: 7cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 135, name: "Amigurumi personalizado", price: 20.00, category: ["personalizados"],
        image: "fotos productos2/tipo.jpg",
        images: ["fotos productos2/tipo.jpg",],
        description: "Medida: 16cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 136, name: "Peluche Lambie", price: 30.00, category: ["peluches"],
        image: "fotos productos2/lambie.jpg",
        images: ["fotos productos2/lambie.jpg",],
        description: "Medida: 30cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 137, name: "Señor Papa - Peppa Pig", price: 13.00, category: ["personajes"],
        image: "fotos productos2/papa.jpg",
        images: ["fotos productos2/papa.jpg",],
        description: "Medida: 13cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 138, name: "Peppa pig", price: 10.00, category: ["personajes"],
        image: "fotos productos2/peppa.jpg",
        images: ["fotos productos2/peppa.jpg",],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 139, name: "Llavero Shinobu - Demon Slayer", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/shinobu.jpg",
        images: ["fotos productos2/shinobu.jpg",],
        description: "Llavero Shinobu - Pilar Insecto. Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 140, name: "Llavero Giyu Tomioka - Demon Slayer", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/giyu.jpg",
        images: ["fotos productos2/giyu.jpg",],
        description: "Llavero Giyu Tomioka - Pilar agua. Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 141, name: "Llavero Tengen Uzui - Demon Slayer", price: 13.00, category: ["personajes", "llaveros"],
        image: "fotos productos2/tengen.jpg",
        images: ["fotos productos2/tengen.jpg",],
        description: "Llavero Tengen Uzui - Pilar sonido. Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 8, name: "Llavero de Batman", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/batman.jpeg",
        images: ["fotos productos/batman.jpeg", "fotos productos/batman2.jpeg",],
        description: "Medida: 7cm 🦇 Material: 100% acrílico, hipoalergénico.", rating: 5
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
        images: ["fotos productos/miko1.jpg", "fotos productos/miko2.jpg",],
        description: "Medida: 13cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 38, name: "Peter Rabbit - conejos", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/conejos.jpg",
        images: ["fotos productos/conejos.jpg", "fotos productos/conejos2.jpg",],
        description: "Medida: 10cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 39, name: "Pesebre - Navidad", price: 22.00, category: ["personajes"],
        image: "fotos productos/pesebre.jpg",
        images: ["fotos productos/pesebre.jpg"],
        description: "Medidas: Las figuras de San José y la Virgen María miden 9cm aprox. y el niño Jesús 7.5cm.. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 46, name: "Gustavo Cerati Amigurumi", price: 25.00, category: ["personajes"],
        image: "fotos productos/cerati.jpg",
        images: ["fotos productos/cerati.jpg"],
        description: "Medida: 22cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 47, name: "Llavero de Coraline", price: 12.00, category: ["personajes", "llaveros"],
        image: "fotos productos/coraline.jpg",
        images: ["fotos productos/coraline.jpg", "fotos productos/coraline2.jpg",],
        description: "Medida: 10cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 50, name: "Rayo McQueen - cars", price: 13.00, category: ["personajes"],
        image: "fotos productos/rayo.jpg",
        images: ["fotos productos/rayo.jpg"],
        description: "Medida: 10.5cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 51, name: "Harry Styles", price: 22.00, category: ["personajes"],
        image: "fotos productos/harryestilo.jpg",
        images: ["fotos productos/harryestilo.jpg"],
        description: "Medida: 15cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 52, name: "Llavero de Yoshi", price: 10.00, category: ["personajes", "llaveros"],
        image: "fotos productos/yoshi.jpg",
        images: ["fotos productos/yoshi.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 53, name: "Spiderman - colgante retrovisor", price: 10.00, category: ["personajes", "llaveros"],
        image: "fotos productos/spiderman.jpg",
        images: ["fotos productos/spiderman.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 70, name: "Llavero de Virgencita", price: 8.00, category: ["personajes", "llaveros"],
        image: "fotos productos/virgen.jpg",
        images: ["fotos productos/virgen.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 73, name: "Llavero de Mini Maceta", price: 10.00, category: ["llaveros"],
        image: "fotos productos/minimaceta.jpg",
        images: ["fotos productos/minimaceta.jpg"],
        description: "Medida: 14cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 79, name: "Llavero de Mini Ramo", price: 8.00, category: ["llaveros"],
        image: "fotos productos/miniramo.jpg",
        images: ["fotos productos/miniramo.jpg"],
        description: "Medida: 7.5cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
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
        id: 18, name: "Ariana grande, era Positions", price: 22.00, category: ["personajes"],
        image: "fotos productos/ariana grande.jpeg",
        images: ["fotos productos/ariana grande.jpeg",],
        description: "Medida: 18cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
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
        id: 42, name: "Llavero de Pochacco - Sanrio", price: 12.00, category: ["llaveros", "personajes"],
        image: "fotos productos/pochaco.jpg",
        images: ["fotos productos/pochaco.jpg"],
        description: "Medida: 11cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 44, name: "Llavero de caballo", price: 10.00, category: ["llaveros", "personajes"],
        image: "fotos productos/pony1.jpg",
        images: ["fotos productos/pony1.jpg", "fotos productos/pony2.jpg"],
        description: "Medida: 8cm aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 55, name: "Llavero de balones de voleibol", price: 6.00, category: ["llaveros"],
        image: "fotos productos/voley.jpg",
        images: ["fotos productos/voley.jpg"],
        description: "Medida: 4.5cm aprox. Material: 100% Acrílico, hipoalergénico🧶. 6$ c/U", rating: 5
    },
    {
        id: 61, name: "Bolsita porta audífonos", price: 10.00, category: ["llaveros"],
        image: "fotos productos/saquito.jpg",
        images: ["fotos productos/saquito.jpg", "fotos productos/saquito2.jpg"],
        description: "Guarda tus audífonos, dinero y accesorios en nuestras funditas. Perfectas para colgar en tus bolsos. Material: 100% Acrílico, hipoalergénico🧶.", rating: 5
    },
    {
        id: 82, name: "Colección día de la madre", price: 7.00, category: ["llaveros"],
        image: "fotos productos/coleccionmama.jpg",
        images: ["fotos productos/coleccionmama.jpg"],
        description: "Celebra el Día de la Madre con un detalle único y especial, tenemos variedad de llaveros, flores y macetas tejidas a mano. Material: 100% Acrílico, hipoalergénico🧶.", rating: 5
    },


    // === PELUCHES ===
    // === PERSONALIZADOS ===
    {
        id: 6, name: "Peluche de vaquita rosada", price: 25.00, category: "peluches",
        image: "fotos productos/vaquita.jpeg",
        images: ["fotos productos/vaquita.jpeg",],
        description: "Tejida con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.", rating: 5
    },
    {
        id: 7, name: "Pareja de amigurumis personalizados", price: 40.00, oldPrice: 50.00, category: "personalizados",
        image: "fotos productos/parejapollo.jpeg",
        images: ["fotos productos/parejapollo.jpeg", "fotos productos/parejapollo1.jpeg", "fotos productos/parejapollo2.jpeg",],
        description: "Esta linda pareja personalizada mide 15cm de alto. Junto a ellos, hemos incluido un llavero de pollito, de 5cm aprox. 🐥", rating: 5
    },
    {
        id: 33, name: "LLavero personalizado de Arquitecto/Ingeniero", price: 10.00, category: ["llaveros", "personalizados"],
        image: "fotos productos/arq.jpg",
        images: ["fotos productos/arq.jpg",],
        description: "Medida: 10cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 40, name: "Mascota grande personalizada - Perro", price: 20.00, category: ["personalizados"],
        image: "fotos productos/perroonix.jpg",
        images: ["fotos productos/perroonix.jpg",],
        description: "Medida: 14cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 41, name: "Mascota grande personalizada - Gato", price: 30.00, category: ["personalizados"],
        image: "fotos productos/gatoperso.jpg",
        images: ["fotos productos/gatoperso.jpg", "fotos productos/gatoperso2.jpg"],
        description: "Medida: 20cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 45, name: "Mascota grande personalizada - Perro", price: 30.00, category: ["personalizados"],
        image: "fotos productos/perrotony.jpg",
        images: ["fotos productos/perrotony.jpg"],
        description: "Medida: 20cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 60, name: "Llavero mascota - Gato", price: 10.00, category: ["personalizados", "llaveros"],
        image: "fotos productos/gatoazul.jpg",
        images: ["fotos productos/gatoazul.jpg", "fotos productos/gatoazul2.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 88, name: "Llavero mascota - Gato", price: 10.00, category: ["personalizados", "llaveros"],
        image: "fotos productos/gatocolor.jpg",
        images: ["fotos productos/gatocolor.jpg"],
        description: "Medida: 8cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 89, name: "Llavero de pinguino con girasol", price: 5.00, category: ["llaveros"],
        image: "fotos productos/girapingui.jpg",
        images: ["fotos productos/girapingui.jpg"],
        description: "Medida: 4cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 90, name: "Llavero de capibara girasol", price: 7.00, category: ["llaveros"],
        image: "fotos productos/giracapibara.jpg",
        images: ["fotos productos/giracapibara.jpg"],
        description: "Medida: 6cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 91, name: "Llaveros pareja Cars", price: 12.00, category: ["llaveros", "personajes"],
        image: "fotos productos/carsito.jpg",
        images: ["fotos productos/carsito.jpg"],
        description: "Medida: 6cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 48, name: "Peluche de oso", price: 30.00, category: "peluches",
        image: "fotos productos/oso1.jpg",
        images: ["fotos productos/oso1.jpg", "fotos productos/oso2.jpg"],
        description: "Tejido con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.", rating: 5
    },
    {
        id: 63, name: "Peluches de Snoopys en pareja", price: 45.00, category: "peluches",
        image: "fotos productos/parejapeluchesnoo.jpg",
        images: ["fotos productos/parejapeluchesnoo.jpg",],
        description: "Tejido con una lana suave y esponjosa 🧶. Medida: 27cm. Material: Lana Chenille.", rating: 5
    },
    {
        id: 64, name: "Peluche de Totoro", price: 20.00, category: "peluches",
        image: "fotos productos/totogordo.jpg",
        images: ["fotos productos/totogordo.jpg",],
        description: "Tejido con una lana suave y esponjosa 🧶. Medida: 18cm. Material: Lana Chenille.", rating: 5
    },
    {
        id: 65, name: "Mascota mediana personalizada - Hamster", price: 16.00, category: ["personalizados"],
        image: "fotos productos/hamster.jpg",
        images: ["fotos productos/hamster.jpg"],
        description: "Medida: 13cm Aprox. Material: 100% Acrílico, hipoalergénico🧶", rating: 5
    },
    {
        id: 66, name: "Pareja de amigurumis personalizados", price: 36.00, category: "personalizados",
        image: "fotos productos/parejaveru.jpg",
        images: ["fotos productos/parejaveru.jpg"],
        description: "Estos lindos amigurumis miden 15cm y 17cm de alto aprox.", rating: 5
    },
];
