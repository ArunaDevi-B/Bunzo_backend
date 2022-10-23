const mongoose = require('mongoose');

const StoreData = new mongoose.Schema({
    id: {
        type: Number,
    },
    shopImg: {
        type: String,
    },
    shopName: {
        type: String,
    }
});

const Store = mongoose.model('Store', StoreData);

module.exports = Store;
