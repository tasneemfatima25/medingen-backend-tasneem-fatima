const express = require('express');
const router = express.Router();
const { getMedicines, addMedicine } = require('../controllers/medicineDetailsController');

router.get('/medicines-card-info', getMedicines);
router.post('/medicines-card-info', addMedicine);

module.exports = router;

