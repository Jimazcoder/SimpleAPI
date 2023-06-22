const express = require('express');
const groceriesRoute = require('./routes/groceries');
const storesRoute = require('./routes/stores')
var bodyParser = require('body-parser')
const session = require('express-session');

const app = express();
const appTwo = express();

const PORT = 3001;
const PORT2 = 3002;

app.use(express.json());
app.use(session({
    secret: 'JHBJBJJLKNNJJUHYGYTFHVBGHUGYUGBHJA',
    resave: false,
    saveUninitialized: false,
}));
app.use('/stores',storesRoute)

appTwo.use(bodyParser.urlencoded({ extended: false }))
appTwo.use(bodyParser.json)
appTwo.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
appTwo.use('/groceries', groceriesRoute);

app.listen(PORT, () => console.log('Running Express Server on Port:', PORT));
appTwo.listen(PORT2, () => console.log(`Running Express Server 2 on Port ${PORT2}`))



