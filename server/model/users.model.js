const knex = require("../../db/knex");
// user table
const USERS_TABLE = "users";

// export 
module.exports = {
  USERS_TABLE,
  getUserUid(uid) { 
    return knex
      .select("UID")
      .from(USERS_TABLE)
      .where({ "UID": uid })
  }
}