const express = require("express");
const { listeAuditeur } = require("../controllers/preinscriptionControlle");
const router = express.Router();

router.get("/", listeAuditeur);

module.exports = {routage:router}
