var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {

    const numero = Math.floor(Math.random() * 100) + 1;

    const r = {
        numero: numero
    };

    response.json(r);
});

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
