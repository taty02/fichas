const express = require("express");
const app = express();

app.set("port",process.env.port || process.env.PORT || 5000); 
app.use(express.urlencoded({extendend: true}));

app.get ('/', function (req,res) {
    res.send ('Bem-vindo ao servidor Web!')
}
)