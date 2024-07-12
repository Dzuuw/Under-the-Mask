const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Funcionando")
})

app.listen(6969, ()=>{
    console.log("Servidor rodando em http://localhost:6969")
})