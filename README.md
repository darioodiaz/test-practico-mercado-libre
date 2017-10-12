Test Practico de fronent para MercadoLibre
==============

## Requisitos

Este proyecto contiene un pequeño docker-compose para facilitar el despliegue y poder usar la aplicacion rapidamente sin problemas.
En caso de no tener o no desear usar docker los requisitos son:

* Node >= 6
* MSVS2015 Tools (para node-sass-chokidar)
* Docker (si de desea usar docker)
* Docker Compose (si de desea usar docker)

NOTA: el script que inicia la aplicacion actualizara la imagen de node mediante ```docker pull``` si no se desea actualizar de esperan 10 segundos para cancelar, caso contrario se procede a actualizar la imagen.

## Despliegue

El archivo start-server.sh contiene los comandos linux para iniciar la aplicacion (como se aclaro antes usar Docker y Docker Compose), en caso de no desear usar docker o estar en otros SO el procedimiento es:

### Directorio frontend
```bash
$ npm install
$ npm run build
$ npm install -g http-server
$ cd build
$ http-server -o
```

### Directorio backend
```bash
$ npm install
$ npm run server
```

## Estructura

### Frontend

src: raiz del codigo fuente
src/assets: imagenes y los archivos sass
src/components: componentes utilizados en la aplicacion
src/pages: componentes contenedores
src/utils: utilidades para la aplicacion

### Backend

api: contenido de todas las apis
utils: utilidades para la aplicacion

## Estructura API

Cada api se encuentra en una carpeta cuyos archivos son:
* API_NAME.router.js: router express que mapea los endpoints de la API
* ROUTE_NAME.route.js: contiene la function que operara en el endpoint deseado

### Convencion de nombres utilizadas

## Frontend

Componentes: sufijo .component.js
Pages: sufijo .page.js
Estilos Sass: sufijo .style.scss
Estilos css: sufijo .style.css

## Backend

Apis/Routers: sufijo .router.js
Rutas: sufijo .route.js

Esta convencion se utilizo para tener una claridad de nombres y facilitar la navegacion y busqueda al momento de depurar desde el navegador