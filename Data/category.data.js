const mongoose = require('mongoose');

const Categories = new mongoose.Schema({
    id: {
        type: Number,
    },
    categoryImg: {
        type: String,
    },
    categoryName: {
        type: String,
    },
});

const Category = mongoose.model('Category', Categories);

module.exports = Category; 
