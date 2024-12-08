const express = require("express");
const router = express.Router();
const {lister,motdepasseoublier}=require('../controllers/userController')

router.get("/",lister);




module.exports = {routage:router}
