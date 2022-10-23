const express = require('express');
const userservice = require('../Services/user-services');

const app = express();

app.get('/shops', async(req,res) => {
    try{
        const shoplist = await userservice.getshops();
        res.send(shoplist);
    } catch (error) {
        console.log('error in routeshops', error);
        res.status(500).send(error);
    }
});

app.get('/categories', async (req,res) => {
    try {
      const categorylist = await userservice.getCategory();
        res.send(categorylist);
    } catch (error) {
        console.log('error in routeCatagory', error);
        res.status(500).send(error);
    }
});

app.get('/items', async(req,res)=> {
    try{
        const itemlist = await userservice.getItem(req.query.type);
        res.send(itemlist);
    } catch (error) {
        console.log('error in routeitems', error);
        res.status(500).send(error);
    }
});

app.get('/cart', async(req,res) => {
    try {
        await userservice.addToCart(req.body);
        res.send(true);
    } catch (error) {
        console.log('error in route_cart', error);
        res.status(500).send(error);
    }
});

app.post('/register', async(req,res) => {
    try {
        await userservice.registerUser(req.body);
        res.send(true);
    } catch(error) {
        console.log("error in route-registeruser", error);
        res.status(500).send(error);
    }
});

app.post('/login', async(req,res) => {
    try {
        const login = await userservice.loginUser(req.body);
        console.log(login)
        if (!login) {
            res.status(401).send(login);
            return;
        }
        res.send(login);
    } catch (error) {
        console.log('error in loginUser', error);
    }
});

// app.get('/', async(req,res)=>{ 
//     try{
//         const restaurants = await userservice.getUser();
//         res.send(restaurants);
//     } catch (error) {
//         console.log('error in get_res', error);
//     }
// })

module.exports = app;