#!/bin/bash

echo "Empezando test MercadoLibre"
echo "Instalando dependencias de backend..."
cd backend && npm install --loglevel=error
#TODO: add tests checking
#echo "Building backend..."
#npm run build

echo "Instalando dependencias de frontend..."
cd ../frontend && npm install --loglevel=error
#TODO: add tests checking
echo "Haciendo build de frontend..."
BACKEND_HOST=dariodiaz-ml-backend npm run build

echo "El backend funciona con node version >= 6, se tratara de actualizar la imagen docker"
echo "Si no se desea actualizar ahora o hacerlo manual tenes 10 segundos para cancelar el proceso, luego se hara la actualizacion"
sleep 10
echo "Actualizando imagen node en docker"
docker pull node:latest

echo "Levantando contenedores..."
echo "La aplicacion esta en http://localhost:8082 el backend en http://localhost:4000"
docker-compose up -d && docker-compose logs -f
