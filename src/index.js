const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.routes.js");
const cors = require("cors");
const medicineRoutes = require('./routes/PharmaceuticalProductRoutes.js');
const medicineDetailsRoutes = require('./routes/medicineDetailsRoutes.js');
const faqRoutes = require('./routes/faqRoutes');
const genericRoutes = require('./routes/genericRoutes');
const ratingRoutes = require('./routes/rating.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use('/api', medicineRoutes);
app.use('/api', medicineDetailsRoutes);
app.use('/api', faqRoutes);
app.use('/api', genericRoutes);
app.use('/api', ratingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
