const Medicine = require('../models/MedicineDetails');

// Controller to fetch all medicines
const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error while fetching medicines' });
  }
};

// Controller to add a new medicine
const addMedicine = async (req, res) => {
  const { title, brand, generic, avgPrice, price, discount, formation, rating, review } = req.body;

  // Validate required fields
  if (!title || !brand || !generic || !avgPrice || !price || !discount || !formation || !rating || !review) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }

  try {
    const newMedicine = new Medicine({
      title,
      brand,
      generic,
      avgPrice,
      price,
      discount,
      formation,
      rating,
      review,
    });

    // Save the new medicine to the database
    await newMedicine.save();

    res.status(201).json({ msg: 'Medicine added successfully', data: newMedicine });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error while adding medicine' });
  }
};

module.exports = { getMedicines, addMedicine };
