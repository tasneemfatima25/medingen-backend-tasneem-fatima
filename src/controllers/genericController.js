const Generic = require('../models/Generic');

const getGeneric =  async (req, res) => {
    try {
      const generics = await Generic.find();
      res.json(generics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const addGeneric =  async (req, res) => {
    const { name, brand, price, mrp, discount, formation, rating, review } = req.body;
    try {
      const generic = new Generic({ name, brand, price, mrp, discount, formation, rating, review });
      await generic.save();
      res.status(201).json(generic);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  module.exports = { getGeneric, addGeneric };

