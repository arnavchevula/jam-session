const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = "YOUR_SECRET_KEY"; // Store this securely!
const generateToken = user => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_KEY ||
      "02982ca85e8aa84fc0f9dfd161f201ed52a5753c4bed945a890f95e42b20e64f",
    {
      expiresIn: "1h"
    }
  );
};
const verifyToken = token => {
  return jwt.verify(token, SECRET_KEY);
};
module.exports = { generateToken, verifyToken };
