const express = require('express');
const { submitRating, getRatings } = require('../controllers/ratingController');
const router = express.Router();

router.post('/rating', submitRating);
router.get('/rating', getRatings);

module.exports = router;
