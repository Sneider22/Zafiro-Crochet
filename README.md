# Zafiro Crochet — Tienda Online 🧶

> Sitio web simple para mostrar y vender creaciones de crochet (amigurumis, ramos, llaveros, peluches y productos personalizados).

## 🎯 Propósito

Este proyecto es una tienda online ligera diseñada para presentar productos hechos a mano, permitir a los usuarios explorar catálogos, añadir artículos a un carrito y enviar pedidos vía WhatsApp. Está pensado como un catálogo responsive y fácil de personalizar para artesanías.

## ✅ Funcionalidades principales 

- Visualización de catálogo de productos con paginación (`index.html`, `products.js`, `main.js`).
- Filtros por categoría y búsqueda flexible por palabras clave (keywords).
- Modal de detalle de producto con galería de imágenes, descripción y selección de cantidad.
- Carrito de compras con persistencia (guarda los ítems y cantidades) 🛒.
- Opción extra en el carrito: añadir caja de regalo de $3 y recalcular el total 🎁.
- Botón flotante (FAB) de WhatsApp con saludo dinámico según la hora del día 📲.
- Generación de mensaje de pedido con saludos personalizados (buenos días/tardes/noches).
- Panel de administración simple (modal) con lista de pendientes (to‑do) guardada en `localStorage` ⚙️.
- Diseño responsive y UI moderna con estilos 

## 🛠️ Estructura del proyecto

- `index.html` — Interfaz principal y estructura de la página.
- `style.css` — Estilos, variables CSS y responsive.
- `products.js` — (Lista de productos) Definición del catálogo (imágenes, precios, categorías).
- `main.js` — Lógica de la aplicación: renderizado, filtros, carrito, modales y envío a WhatsApp.
- `fotos productos/` — Carpeta sugerida para las imágenes de producto.

## Cómo funciona (resumen técnico)

1. Al abrir la página, `main.js` carga los productos de `products.js` y sincroniza el carrito.
2. El usuario puede filtrar por categorías o usar el buscador inteligente (acepta múltiples palabras clave en cualquier orden).
3. Haciendo clic en un producto se accede al detalle: galería, descripción y selector de cantidad.
4. Al añadir al carrito, los datos persisten en `localStorage`.
5. En el carrito, se puede sumar una caja de regalo ($3), ver el total y enviar el pedido por WhatsApp con un saludo automático ajustable a la hora.

## 🎨 Personalización rápida

- Añadir/editar productos: modificar `products.js` agregando objetos con las propiedades `id`, `name`, `price`, `image`, `images` (opcional), `category`, `description` y `oldPrice` (opcional para ofertas).
- Cambiar estilos: editar variables en `:root` dentro de `style.css` para colores, radio de bordes y sombras ✨.
- Número de items por página: ajustar `itemsPerPage` en `main.js`.

## 🔧 Consideraciones y mejoras sugeridas

- Validaciones adicionales en formularios y manejo de errores (por ejemplo, verificar disponibilidad de imágenes).
- Agregar un backend real para persistencia centralizada, pagos y gestión de inventario.
- Internacionalización (i18n) para soportar varios idiomas.
- Mejoras de accesibilidad (atributos ARIA, foco en modales, roles semánticos).
- Integración con servicios de envío y cálculo de costos en tiempo real.



