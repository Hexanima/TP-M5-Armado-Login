const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const path = require("path")

const app = express();
const PORT = 3000;

/* MIDDLEWARES */

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({
    secret: "ArmadoDeLoginTPDH",
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser())

/* CONFIGURACIONES */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

/* RUTAS */



app.listen(PORT, () => {
    console.log(`Servidor abierto en el puerto ${PORT}`)
    console.log(`https://localhost:${PORT}`)
})