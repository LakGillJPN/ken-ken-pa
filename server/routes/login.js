const express = require("express");
const router = express.Router();


/**
 * req.body {email: "something", password: "somethinw"} 
  firebase authentication has the user login data
  if there is no user => 
  if there is user login data => 
 * 
 */

router.post("/login", (req,res) => {
  console.log(req.body);
  res.status(200);
});

// export 
module.exports = router;