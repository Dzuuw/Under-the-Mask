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
    console.log("Servidor rodando em http://localhost:6969 ou https://559e80e2-45fc-4dcc-bd11-73f4183e41dd-00-1xr0ulmm1vi6d.worf.replit.dev/")
})