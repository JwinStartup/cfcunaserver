const express = require("express");
const homes=require('./homes.js')
const auditeur=require('./auditeur.js')
const user=require('./user.js')
const auth=require('./auth.js')
const preinscription= require('./preinscription.js')
const connectEnsureLogin=require('connect-ensure-login')
const router = express.Router();




router.use(auth.routage)
router.use("/",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}),homes.routage)
router.use("/auditeur",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}),auditeur.routage)
router.use("/user",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}),user.routage)

//route preinscription
router.use("/preinscription",preinscription.routage)

module.exports = {routes:router}
