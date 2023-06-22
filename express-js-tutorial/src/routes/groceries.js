const { Router } = require('express');

const router = Router();

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

router.get('/', (req, res, next) => {
    console.log('Sending Grocery List');
    res.cookie('visted', true,
     {maxAge: 10000})
    next();
},
(req, res, next) =>
{
    res.send(groceryList);
    next();
},
() => {
    console.log('Finished Handling GET request')
});

router.get('/:item', (req, res) => {
    console.log(req.params.item);
    const { item } = req.params;
    const groceryItem = groceryList.find((g) => g.item === item);
    res.send(groceryItem);
});

router.get('/cart', (req, res) => {
    
});

router.post('/cart/item', (req, res) => {
   let data = req.body;
   console.log("item: " + data.item);
   
   res.send(`Adding ${data.item} to the grocery options`);
})

router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.sendStatus(201);
});

module.exports = router