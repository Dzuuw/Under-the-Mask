const express = require("express");
const app = express();
const path = require("path");
// código pro css funcionar no ejs
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("main");
});

app.listen(6969, ()=>{
    console.log("Servidor rodando em http://localhost:6969")
})