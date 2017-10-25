const express = require('express');
const validator = require('express-validator');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

isValidEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
app.get('/greet/:name', (req, res) => {
    var name = req.params.name;
    
    res.send("Hello, "+name);
})
app.get('/email/:email', (req, res) => {
    var email = req.params.email;
    //console.log(email);
    //console.log(isValidEmail(email));
    res.send(isValidEmail(email));
})
app.get('/year', (req, res) => {
    var age = req.query.age;
    var currentYear = new Date().getFullYear();
    var yearBorn = currentYear - age;

    res.send("You were born in "+ yearBorn);
})
app.get(['/cat','/dog'], (req, res) => {
    res.send("you requested: "+ req.path);
})

app.get('*', (req, res) => {
    res.send("ALL THE THINGS");
})

app.listen(3000, () => {
    console.log("listening on 3000...");
})