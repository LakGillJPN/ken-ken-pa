const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword } = require("../firebase/auth");
const usersModel = require("../model/users.model");

router.post("/users/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);
  // uuid from firebase
  const uuid = user.user.reloadUserInfo.localId;
  console.log(uuid);
  if (user === undefined) {
    // login unsuccess
    res.status(400).send(false);
  } else { 
    // login success
     console.log("data from sql 🐝",await usersModel.getUserUid(uuid));

    res.status(200).send(true);
  }
});

// export 
module.exports = router;