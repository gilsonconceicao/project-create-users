
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3003;

const app = express();

// content static 
app.use(express.static(__dirname + '/public'));

// body-parser
app.use(bodyParser.urlencoded());

// create database

const Users = require('./models/Users-mongoDB')

// Rotas
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/assets/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/assets/about-aplication.html');
})

app.get('/cadastros', (req, res) => {
    res.sendFile(__dirname + '/public/assets/registration-users.html')
})
// create user with post 

app.post('/cadastrar', async (req, res) => {
    const { name, lastname, email } = req.body;

    if (!name || !lastname || !email) {
        messageError = res.send('Digite os dados corretamente!');

    } else {

        const createUser = {
            name,
            lastname,
            email
        }

        bankDataString.push(createUser)

        try {
            await Users.create(createUser);
            res.status(201).sendFile(__dirname + '/public/assets/cadastros.html');
        } catch (error) {
            res.status(503).send(error);
        }
    }
})



mongoose
    .connect('URL of MongoDB')

    .then(
        app.listen(port),
        console.log('The MongoDB is conected!')
    ).catch(error => {
        console.log(error)
    })
