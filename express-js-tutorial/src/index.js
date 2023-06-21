const express = require('express');
const groceriesRoute = require('./routes/groceries');
const session = require('express-session');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(session({
    secret: 'JHBJBJJLKNNJJUHYGYTFHVBGHUGYUGBHJA',
    resave: false,
    saveUninitialized: false,
}));
app.use('/groceries',groceriesRoute);

app.listen(PORT, () => console.log('Running Express Server on Port:', PORT));




