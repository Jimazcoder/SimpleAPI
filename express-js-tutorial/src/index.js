const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.listen(PORT, () => console.log('Running Express Server on Port:', PORT));

const groceryList = ([
    {
        item: 'milk',
        price: 1,
    },
    {
        item: 'chips',
        price: 4
    },
    {
        item: 'bananas',
        price: 0.5
    }
])

app.get('/groceries', (req, res, next) => {
    console.log('Sending Grocery List');
    next();
},
(req, res, next) =>
{
    res.send(groceryList);
    next();
},
() => {
    console.log('Finished Handling GET request')
}

)

app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.sendStatus(201);
});