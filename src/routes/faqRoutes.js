const express = require("express");
const router = express.Router();
const { getFaq, addFaq } = require("../controllers/faqController");

router.get("/faqs", getFaq);
router.post("/faqs", addFaq);

module.exports = router;

