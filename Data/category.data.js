const mongoose = require('mongoose');

const Categories = new mongoose.Schema({
    categoryName: {
        type: String,
    },
});

const Category = mongoose.model('Category', Categories);

module.exports = Category; 
