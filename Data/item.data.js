const mongoose = require('mongoose');

const ItemData = new mongoose.Schema({
    itemName: {
        type: String,
    }, 
    cost: {
        type: Number,
    }
});

const Item = mongoose.model('Item', ItemData);

module.exports = Item;