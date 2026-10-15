# MovilPoint

Sitio web de muestra para una tienda de celulares. Incluye una página de inicio con modelos destacados, testimonios y un formulario de contacto, además de páginas con información de tres modelos Samsung Galaxy.

## Requisitos

- Node.js y npm para generar los estilos.
- Python 3 (opcional) para iniciar un servidor local y probar el sitio.

## Instalación

Abre una terminal en la carpeta principal del proyecto y ejecuta:

```bash
npm install
npm run build
```

El comando `npm run build` genera `dist/styles.css`, que utilizan todas las páginas.

## Ver el sitio

Se recomienda abrirlo mediante un servidor local para que los módulos JavaScript funcionen correctamente. Desde la carpeta principal del proyecto, ejecuta:

```bash
py -m http.server 8000
```

Luego visita <http://localhost:8000/paginas/> en el navegador. Si el comando `py` no está disponible, prueba `python -m http.server 8000`.

Para volver a generar los estilos automáticamente al editar archivos, ejecuta `npm run watch` en otra terminal.

## Páginas

- `paginas/index.html`: inicio, catálogo, testimonios y contacto.
- `paginas/samsung-galaxy-s24-ultra.html`: Samsung Galaxy S24 Ultra Titanium Gray.
- `paginas/samsung-galaxy-s25-ultra.html`: Samsung Galaxy S25 Ultra.
- `paginas/samsung-galaxy-s24-ultra-titanium-black.html`: Samsung Galaxy S24 Ultra Titanium Black.

Las páginas de modelos enlazan de vuelta al inicio y a su formulario de contacto. Las imágenes se guardan en `public/`.

## Estructura

```text
paginas/       Páginas HTML del sitio
src/input.css  Entrada de Tailwind CSS
tailwind.config.js
js/            Scripts de testimonios y contacto
public/        Imágenes y avatares
dist/          CSS generado por npm run build
```

El formulario prepara un correo con los datos ingresados y abre la aplicación de correo del visitante. No envía información a un servidor.
