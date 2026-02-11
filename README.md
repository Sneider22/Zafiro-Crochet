# Zafiro Crochet — Tienda Online 🧶

> Sitio web simple para mostrar y vender creaciones de crochet (amigurumis, ramos, llaveros, peluches y productos personalizados).

## 🎯 Propósito

Este proyecto es una tienda online ligera diseñada para presentar productos hechos a mano, permitir a los usuarios explorar catálogos, añadir artículos a un carrito y enviar pedidos vía WhatsApp. Está pensado como un catálogo responsive y fácil de personalizar para artesanías.

## ✅ Funcionalidades principales 

- Visualización de catálogo de productos con paginación (`index.html`, `products.js`, `main.js`).
- Filtros por categoría y búsqueda con sugerencias en tiempo real.
- Modal de detalle de producto con galería de imágenes, descripción y selección de cantidad.
- Carrito de compras con persistencia (guarda los ítems y cantidades) 🛒.
- Opciones extras en el carrito: añadir bolsa o caja de regalo y recalcular el total 🎁.
- Generación automática de mensaje de pedido y envío por WhatsApp con el resumen del carrito 📲.
- Panel de administración simple (modal) con lista de pendientes (to‑do) guardada en `localStorage` ⚙️.
- Diseño responsive y UI moderna con estilos 

## 🛠️ Estructura del proyecto

- `index.html` — Interfaz principal y estructura de la página.
- `style.css` — Estilos, variables CSS y responsive.
- `products.js` — (Lista de productos) Definición del catálogo (imágenes, precios, categorías).
- `main.js` — Lógica de la aplicación: renderizado, filtros, carrito, modales y envío a WhatsApp.
- `fotos productos/` — Carpeta sugerida para las imágenes de producto.

## Cómo funciona (resumen técnico)

1. Al abrir la página, `main.js` carga los productos definidos en `products.js` y renderiza el grid.
2. El usuario puede filtrar por categoría o usar la búsqueda; la interfaz muestra sugerencias y actualiza el resultado al instante.
3. Haciendo clic en un producto se abre un modal con detalles, galería y control de cantidad.
4. Al añadir al carrito, los productos se guardan en `localStorage`; el contador del carrito se actualiza.
5. En el modal del carrito se pueden añadir extras (bolsa/caja), ver el total y enviar el pedido por WhatsApp con un mensaje preformateado.

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

## 📄 Contacto

Para dudas o soporte, editar los archivos del proyecto directamente o contacta al autor del repositorio.

---

