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
    const { item, price } = req.body;
    const cartItem = { item, price }; 
    const cart = req.session;
    console.log(req.session);
    if (cart){
        req.session.cart.items.push(cartItem);
    }
    else {
        req.session.cart = {
            items: [cartItem],
        };
    }
    res.sendStatus(201);
})

router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.sendStatus(201);
});

module.exports = router