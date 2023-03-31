const express = require("express");
const router = express.Router();
const { loginWithEmailandPassword } = require("../firebase/auth");

router.post("/login", async(req, res) => {
  console.log("request.body is", req.body);
  // user email and password
  const { email, password } = req.body;
  // invoke authentication
  const user = await loginWithEmailandPassword(email, password);
  console.log("user", user);
  res.status(200).send(user);
});

// export 
module.exports = router;