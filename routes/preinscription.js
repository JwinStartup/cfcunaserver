const connectEnsureLogin=require('connect-ensure-login')
const express = require("express");
const router = express.Router();
const {valider,preinscriptionById,listeAuditeur, preinscById,telechargerFiche,telechargerAuditeur}=require('../controllers/preinscriptionControlle.js');

router.get("/valider/:userid/:statut",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}), valider);
router.get("/telechargerFiche",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}), telechargerFiche);
router.get("/telechargerAuditeur",connectEnsureLogin.ensureLoggedIn({redirectTo:'/connexion'}), telechargerAuditeur);
router.get("/preinscriptionById", preinscriptionById);
router.get("/listeAuditeur", listeAuditeur);
router.get("/:numero",preinscById );



module.exports = {routage:router}