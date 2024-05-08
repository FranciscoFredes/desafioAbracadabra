Desafío - Abracadabra

Este desafío tiene como objetivo validar los conocimientos en Node.js y Express, así como la creación de rutas, manejo de objetos Request y Response, middlewares y entrega de sitios web estáticos.

Descripción

 En este desafío, se debe desarrollar un servidor con Express que sirva un sitio web estático con temática de magia. El objetivo del juego es encontrar un conejo oculto haciendo clic en uno de los cuatro sombreros presentados.

Requerimientos

   1. Creación del servidor: Se debe crear un servidor con Express en el puerto 3000.

   2. Carpeta de activos estáticos: Definir la carpeta "assets" como carpeta pública del servidor.

   3. Ruta de usuarios: Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.

   4. Middleware de validación de usuario: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro existe en el arreglo de nombres creado en el servidor. En caso de éxito, permitir el paso a la ruta GET correspondiente, de lo contrario, devolver la imagen "who.jpeg".

   5. Ruta de conejo: Crear una ruta /abracadabra/conejo/:n que valide si el parámetro "n" coincide con el número generado de forma aleatoria. En caso de éxito, devolver la imagen del conejo, de lo contrario, devolver la imagen de Voldemort.

   6. Ruta genérica: Crear una ruta genérica que devuelva un mensaje diciendo "Esta página no existe..." al consultar una ruta que no esté definida en el servidor.

Uso

   1.  Clona este repositorio.
   2. Instala las dependencias usando npm install.
   3. Ejecuta el servidor usando npm start.
   4. Accede al sitio web estático en tu navegador.

Estructura del Proyecto

  - index.html: Archivo HTML del sitio web estático.
  - assets/: Carpeta que contiene las imágenes y otros recursos estáticos.
  - server.js: Archivo principal que contiene la lógica del servidor Express.

