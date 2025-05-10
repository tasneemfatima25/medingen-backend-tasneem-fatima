const Rating = require('../models/Rating');

const submitRating = async (req, res) => {
  const { rating, review } = req.body;

  if (!rating || !review) {
    return res.status(400).json({ error: 'Rating and review are required' });
  }

  try {
    const newRating = new Rating({ rating, review });
    await newRating.save();
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error('Error saving rating:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();

    if (ratings.length === 0) {
      return res.json({ avgRating: 0, reviews: [] });
    }

    const total = ratings.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = total / ratings.length;

    res.json({
      avgRating,
      reviews: ratings,
    });
  } catch (err) {
    console.error('Error fetching ratings:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { submitRating, getRatings };
