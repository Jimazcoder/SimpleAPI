const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const groceriesRoute = require('./routes/groceries');
const storesRoute = require('./routes/stores');
var bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const appTwo = express();
const appThree = express();

const PORT = 3001;
const PORT2 = 3002;
const PORT3 = 3000;

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

appThree.set('view engine', 'ejs');
appThree.use(passport.initialize);
appThree.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback' 
},

))

app.listen(PORT, () => console.log('Running Express Server on Port:', PORT));
appTwo.listen(PORT2, () => console.log(`Running Express Server 2 on Port ${PORT2}`))
appThree.listen(PORT3, () => console.log(`Running Express Server on port ${PORT3}`))



