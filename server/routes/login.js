const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword } = require("../firebase/auth");
const knex = require("../../db/knex");

router.post("/users/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);
  // uuid from firebase
  const uuid = user.user.reloadUserInfo.localId;

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