const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword } = require("../firebase/auth");

router.post("/login", async(req, res) => {
  const { email, password } = req.body;
  
  const user = await loginWithEmailAndPassword(email, password);
  // console.log("🐳", email===user.user.email);
  res.status(200).send(user.user);
});

// export 
module.exports = router;