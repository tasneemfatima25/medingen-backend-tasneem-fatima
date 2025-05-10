const express = require('express');
const router = express.Router();
const { getMedicines, addMedicine } = require('../controllers/PharmaceuticalProductController');

router.get('/add-medicine', getMedicines);
router.post('/add-medicine', addMedicine);

module.exports = router;
