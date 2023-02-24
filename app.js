// import express from 'express';
// const express = require('express');
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.delete('/', (req, res) => {
    req.send('Hello World');
});

//CONNECTIONSTRING=mongodb+srv://thiagovb62:teste123@teste1.zzfhtwk.mongodb.net/test

mongoose.connect(process.env.CONNECTIONSTRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    .then(() => {
        console.log("conectei no banco de dados");
        app.listen(3000, () => {
            console.log('Acessar http://localhost:3000');
        });
    })
    .catch((e) => console.log(e));