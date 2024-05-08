//Parametros para utilizar node express
const express = require("express");
const app = express();
// Definimos assets como una carpeta de archivos estaticos publicos 
app.use(express.static("assets"));

//Definimos un arreglo de usuarios para retornarlo 
const usuarios ={ "usuarios" :
    ["Juan", "Joselyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]}; 

// Dejamos como ruta defecto el index html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
    })

//Ruta /abracadabra/usuarios devuelve const usuarios como un Json. 
app.get("/abracadabra/usuarios", (req,res)=>{
    res.json(usuarios);
})

//Middleware para validar la si el usuario existe 
const validarUsuario = (req,res,next) => {
  //  Convertimos a minusculas todo los datos ingresados para buscarlos dentro del arreglo
    const usuario = req.params.usuario.toLowerCase();
    const usuarioMinusculas = usuarios.usuarios.map(nombre => nombre.toLocaleLowerCase());
    //Validacion de si es que el usuario se encuentra
    if (usuarioMinusculas.includes(usuario)) {
        next();       
    //Respuesta en caso de no enocontrar el usuario      
    } else {
        res.sendFile(__dirname + '/assets/who.jpeg');
    }
};

//Aplicando middleware en la ruta llamado a la funcion validarusuario
app.use("/abracadabra/juego/:usuario", validarUsuario);

//Ruta final del middleware 
app.get("/abracadabra/juego/:usuario", (req, res) =>{
    res.send("Usuario encontrado");
})

//
app.get("/abracadabra/conejo/:n", (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1; // Generar un número aleatorio entre 1 y 10
    const n = parseInt(req.params.n);
    if (n === numeroAleatorio) {
        res.sendFile(__dirname + '/assets/conejito.jpg'); // Si el parámetro "n" coincide con el número aleatorio, devolver la imagen del conejo
    } else {
        res.sendFile(__dirname + '/assets/voldemort.jpg'); // Si no coincide, devolver la imagen de Voldemort
    }
});

    //Generando ruta de comodin al recibir cualquier url no definida
app.get("*", (req,res)=> {
    res.send("<center><h1>Esta página no existe</h1></center>");
})

// Definir constante PORT para entregarlo como parametro dentro de la funciona app.listen
const PORT = 3000;
//Iniciar el servidor en el puerto especificado
app.listen((PORT), () => {
console.log("El servidor está inicializado en el puerto 3000");
});