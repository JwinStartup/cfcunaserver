const express = require("express");
const router = express.Router();
const {lister,supprimer,motdepasseoublier}=require('../controllers/userController')

router.get("/",lister);
router.get("/supprimer/:id",supprimer);




module.exports = {routage:router}
