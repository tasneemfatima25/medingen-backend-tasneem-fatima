const mongoose = require('mongoose');

const genericSchema = new mongoose.Schema({
  name: { type: String, required: true },    
  brand: { type: String, required: true },    
  price: { type: Number, required: true },    
  mrp: { type: Number, required: true },      
  discount: { type: String, required: true },              
  formation: { type: String, required: true },                 
  rating: { type: Number, required: true },                   
  review: { type: String, required: true }                     
});

module.exports = mongoose.model('Generic', genericSchema);
