const express = require("express");

const router = express.Router();
//const auth = require("../middleware/auth");
const {
    faire,
    lister,
    preinscritListeVdaf,
    preinscritListeQse,
    preinscritListeSid,
    preinscritListe,
    decision_traite_qse,
    decision_traite_vdaf,
    decision_traite_sid,
    vdaf_premier,
    qse_premier,
    listerTroisPremier,
    sid_premier,
    countVdaf,
    countSid,
    countQse,
} = require("../controllers/preinscriptionController.js");

router.post("/faire", faire);
router.get("/lister", lister);
router.get("/preinscritListeVdaf", preinscritListeVdaf);
router.get("/preinscritListeQse", preinscritListeQse);
router.get("/preinscritListeSid", preinscritListeSid);
router.get("/preinscritListe", preinscritListe);
router.get("/decision_traite_qse", decision_traite_qse);
router.get("/decision_traite_vdaf", decision_traite_vdaf);
router.get("/decision_traite_sid", decision_traite_sid);
router.get("/vdaf_premier", vdaf_premier);
router.get("/qse_premier", qse_premier);
router.get("/sid_premier", sid_premier);
router.get("/listerTroisPremier", listerTroisPremier);
router.get("/countVdaf", countVdaf);
router.get("/countSid", countSid);
router.get("/countQse", countQse);
//router.post("/connexion", connexion);
//router.get("/userById/:id", userById);

module.exports = {
  routes: router,
};