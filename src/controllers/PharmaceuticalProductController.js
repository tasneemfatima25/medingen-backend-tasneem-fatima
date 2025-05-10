const PharmaceuticalProduct = require('../models/PharmaceuticalProduct'); 

const getMedicines = async (req, res) => {
  try {
    const medicines = await PharmaceuticalProduct.find();
    res.json({ data: medicines });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error while fetching medicines' });
  }
};

const addMedicine = async (req, res) => {
    const { name, description, uses, dosage, sideEffects } = req.body;
  
    if (!name || !description || !uses || !dosage || !sideEffects) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
  
    try {
      const newMedicine = new PharmaceuticalProduct({
        name,
        description,
        uses,
        dosage,
        sideEffects
      });
  
      await newMedicine.save();
      res.status(201).json({ msg: 'Medicine added successfully', data: newMedicine });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server error while adding medicine' });
    }
  };

module.exports = { getMedicines, addMedicine };
