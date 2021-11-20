const express = require('express');
//creating app
const app = express();


//send the index.html when receiving HTTP GET /
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

//route for register
app.get('/register', (req, res) => {
    res.render('register');
});

//route for login
app.get('/login', (req, res) => {
    res.render('login');
});


//pass requests to the router middleware
const router = require('./routes/apis');
app.use(router);


//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});