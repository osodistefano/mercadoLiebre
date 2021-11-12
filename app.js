const express = require ("express");
const path = require ("path")

const app = express();


app.get("/",(req,res)=>{
    /*let rutaInicio = path.resolve(__dirname,"./views/home.html")
    res.sendFile(rutaInicio);*/
    res.sendFile(__dirname + "/views/home.html")
})

app.use(express.static("public"))
/*const rutaEstatica = path.resolve(__dirname,"public")
app.use (express.static(rutaEstatica));*/



app.listen(3000, ()=>{
    console.log('Servidor funcionando en puerto 3000');
});
