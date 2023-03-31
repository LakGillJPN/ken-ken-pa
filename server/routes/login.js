const express = require("express");
const router = express.Router();
import firebase from "firebase";


router.post("/login", async(req, res) => {
  console.log("request.body is", req.body);
  // user email and password
  const { email, password } = req.body;

  
  res.status(200).send(req.body);
});

// export 
module.exports = router;