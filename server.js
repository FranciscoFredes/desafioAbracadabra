//Parametros para utilizar node express
const express = require("express");
const app = express();
// Definimos assets como una carpeta de archivos estaticos publicos 
app.use(express.static("assets"));

// Dejamos como ruta defecto el index html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
    })
    //Generando ruta de comodin al recibir cualquier url no definida
app.get("*", (req,res)=> {
    res.send("<center><h1>Sorry, aquí no hay nada :/ </h1></center>");
})
// Definir constante PORT para entregarlo como parametro dentro de la funciona app.listen
const PORT = 3000;
//Iniciar el servidor en el puerto especificado
app.listen((PORT), () => {
console.log("El servidor está inicializado en el puerto 3000");
});