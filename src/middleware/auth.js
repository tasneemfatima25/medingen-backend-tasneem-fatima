import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing. Please log in again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token. Please log in again." });
  }
};

export default protect;
