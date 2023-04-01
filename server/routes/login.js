const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword } = require("../firebase/auth");
 

router.post("/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);
  //
  console.log(user.user.reloadUserInfo.localId);
  
  if (user === undefined) {
    // login unsuccess
    res.status(400).send(false);
  } else { 
    // login success
    res.status(200).send(true);
  }
});

// export 
module.exports = router;