/* jshint esversion: 6 */
const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});

// Main Code Here //
// Generating JWT
app.post("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

// Verification of JWT
app.get("/user/validateToken/:token", (req, res) => {
  // Tokens are generally passed in header of request
  // Due to security reasons.

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.params.token;
	const display = req.header.host;
		console.log(display);
    //  const token = req.header['authorization'];
    //console.log(JSON.stringify(token));
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    console.log(error);
    return res.status(401).send(error);
  }
});
