const mongoose = require('mongoose');

const pharmaceuticalProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uses: {
    type: [String],  
    required: true,
  },
  dosage: {
    type: [String],
    required: true,
  },
  sideEffects: {
    type: [String], 
    required: true,
  },
});

module.exports = mongoose.model('PharmaceuticalProduct', pharmaceuticalProductSchema);

