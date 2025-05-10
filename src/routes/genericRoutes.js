const express = require("express");
const router = express.Router();
const { getGeneric, addGeneric } = require("../controllers/genericController");

router.get("/generics", getGeneric);
router.post("/generics", addGeneric);

module.exports = router;


