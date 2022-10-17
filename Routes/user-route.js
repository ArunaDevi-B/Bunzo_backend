const express = require('express');
const userservice = require('../Services/user-services');

const app = express();

app.get('/shops', async(req,res) => {
    try{
        await userservice.createShop({shopName: 'Balaji SuperMarket'});
        res.send(true);
    } catch (error) {
        console.log('error in routeshops', error);
        res.status(500).send(error);
    }
});

app.get('/categories', async (req,res) => {
    try {
        await userservice.addCategory({categoryName: 'Fruits'});
        res.send(true);
    } catch (error) {
        console.log('error in routeCatagory', error);
        res.status(500).send(error);
    }
});

app.get('/items', async(req,res)=> {
    try{
        await userservice.addItem({itemName: "Apple", cost: 160});
        res.send(true);
    } catch (error) {
        console.log('error in routeitems', error);
        res.status(500).send(error);
    }
});

app.get('/cart', async(req,res) => {
    try {
        await userservice.addToCart({cartItemName: "Orange", cost: 60});
        res.send(true);
    } catch (error) {
        console.log('error in route_cart', error);
        res.status(500).send(error);
    }
});

app.get('/', async(req,res)=>{ 
    try{
        const restaurants = await userservice.getUser();
        res.send(restaurants);
    } catch (error) {
        console.log('error in get_res', error);
    }
})

module.exports = app;