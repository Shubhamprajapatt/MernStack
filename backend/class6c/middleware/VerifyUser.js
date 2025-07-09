const jwt = require("jsonwebtoken");
require("dotenv").config();

function VerifyUser(req, res, next) {
  console.log("We are at Verification middleware");
  console.log("Cookie session token received:", req.cookies.session);


  try {
    const token = req.cookies.session;

    if (!token) {
      return res.status(401).json({
        message: "Token not found. Please login.",
        success: false,
      });
    }

    const decodeToken = jwt.verify(token, process.env.JWTCECRET); // check secret spelling
    console.log("Decoded token:", decodeToken);

    req.user = decodeToken;
    req.session = decodeToken?.session || null;

    next();
  } catch (err) {
    console.log("Token error:", err.name, "-", err.message);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Session expired. Please log in again.",
        success: false,
      });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token. Please log in again.",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Authentication failed.",
      success: false,
    });
  }
}

module.exports = VerifyUser;
