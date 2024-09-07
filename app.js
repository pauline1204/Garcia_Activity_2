const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'views')));
app.use(body_parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'signup.html'));
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body; 
    res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Connected! Server is running on http://localhost:${port}`);
});
