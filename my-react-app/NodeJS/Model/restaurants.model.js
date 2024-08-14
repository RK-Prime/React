const mongoose = require('mongoose');

// Createing Document Schema
const restaurantSchema = new mongoose.Schema({
    name : String,
    avgRating : String,
    cuisines : Array,
    cloudinaryImgId : String,
    costForTwo : String,
    menuItems : Array
});

// Creating Model inorder to use Document Schema and Create Documents
const restaurantModel = new mongoose.model('restaurants', restaurantSchema);
//                                          model name      document schema


module.exports = restaurantModel

