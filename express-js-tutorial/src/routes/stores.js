const { Router } = require('express');

const router = Router();
let storeList = [];

router.get('/', (req,res) => {
    res.send('Welcome to the store application')
});

router.post('/register', (req,res) => {
    const store = req.body;
    storeList.push(store);
    console.log(`Store has been added`);
    console.log(storeList)
    res.sendStatus(200);
});



module.exports = router;