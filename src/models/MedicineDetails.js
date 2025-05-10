const mongoose = require('mongoose');

const medicineDetailsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  generic: { type: String, required: true },
  avgPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: String, required: true },
  formation: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

const Medicine = mongoose.model('Medicine', medicineDetailsSchema);

module.exports = Medicine;
