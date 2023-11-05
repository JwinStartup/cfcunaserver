const express = require("express");

const router = express.Router();
//const auth = require("../middleware/auth");
const {
  inscription,
  connexion,
  modifierRole,
  lister,
  supprime,
} = require("../controllers/userController.js");

router.post("/inscription", inscription);
router.get("/lister", lister);
router.post("/connexion", connexion);
router.get("/modifierRole/:id", modifierRole);
router.get("/supprime/:id", supprime);

module.exports = {
  routes: router,
};