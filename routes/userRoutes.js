const express = require("express");

const router = express.Router();
//const auth = require("../middleware/auth");
const {
  inscription,
  connexion,
  userById,
  lister,
} = require("../controllers/userController.js");

router.post("/inscription", inscription);
router.get("/lister", lister);
router.post("/connexion", connexion);
router.get("/userById/:id", userById);

module.exports = {
  routes: router,
};