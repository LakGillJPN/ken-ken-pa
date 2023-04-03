require("dotenv").config({
  path: "./.env",
});

module.exports = {
  jwt: {
    secret: process.env.SECREAT_KEY,
    options: {
      algorithm: "HS256",
      expiresIn: "1d"
    }
  }

}