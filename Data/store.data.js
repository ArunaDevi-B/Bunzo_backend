const mongoose = require('mongoose');

const StoreData = new mongoose.Schema({
    shopName: {
        type: String,
    },
});

const Store = mongoose.model('Store', StoreData);

module.exports = Store;
