const mongoose = require('mongoose');

const cartItems = new mongoose.Schema({
    cartItemName: {
        type: String,
    },
    cost: {
        type: Number,
    }
});

const cartItem = mongoose.model('cartItem', cartItems);

module.exports = cartItem; 
