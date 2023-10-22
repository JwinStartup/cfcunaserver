const express = require("express");

const router = express.Router();
//const auth = require("../middleware/auth");
const {
    faire,
  //connexion,
 // userById,
  //lister,
} = require("../controllers/preinscriptionController.js");

router.post("/faire", faire);
//router.get("/lister", lister);
//router.post("/connexion", connexion);
//router.get("/userById/:id", userById);

module.exports = {
  routes: router,
};