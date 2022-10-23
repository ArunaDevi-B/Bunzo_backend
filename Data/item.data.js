const mongoose = require('mongoose');

const ItemData = new mongoose.Schema({
    id: {
        type: Number,
    },
    itemType: {
        type: String,
    },
    itemName: {
        type: String,
    }, 
    price: {
        type: Number,
    }
});

const Item = mongoose.model('Item', ItemData);

module.exports = Item;