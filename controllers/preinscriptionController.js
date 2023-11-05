const Preinscription = require("../models/preinscription.js");
const LocalStorage = require("node-localstorage").LocalStorage;
const faire = async (req,res, next) => {
  try {
    const preinscLength = (await Preinscription.find()).length +1 ;
     const numero =  `${"23"+req.body.filiere+"00"+preinscLength}`
       console.log(numero)
      const pre= await new Preinscription({ 
        nom: req.body.nom,
        numero: numero,
        prenoms: req.body.prenoms,
        email: req.body.email,
        annee: req.body.annee,
        image: req.body.image,
        filiere:req.body.filiere,
        diplome:req.body.diplome,
        tel:req.body.tel,
        fileBac:req.body.fileBac,
        fileDernierBac:req.body.fileDernierBac,
        fileCv:req.body.fileCv,
        whatsapp:req.body.whatsapp,
        decisionType:'Encours'
      }).save()
        .then((doc) =>
          res.json({resultat:"REUISSI"})
        );
  } catch (error) {
    return res.json(error);
  }
};

const lister = async (req, res, next) => {
  try {
    const liste = await Preinscription.find({decisionType:'Encours'}).sort({createdAt:-1});
    console.log(liste);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const listerTroisPremier = async (req, res, next) => {
  try {
    const limit =3
    const liste = await Preinscription.find({decisionType:'Encours'}).sort({createdAt:-1}).limit(limit);
    console.log(liste)
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const sid_premier = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({decisionType:'Encours',filiere:'SID'}).sort({createdAt:-1}).limit(1);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const nsa_premier = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({decisionType:'Encours',filiere:'NSA'}).sort({createdAt:-1}).limit(1);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const voirById = async (req, res, next) => {
  try {
    const liste = await Preinscription.findOne({numero:req.params.numero})
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const qse_premier = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({decisionType:'Encours',filiere:'QSE'}).sort({createdAt:-1}).limit(1);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const vdaf_premier = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({decisionType:'Encours',filiere:'VDAF'}).sort({createdAt:-1}).limit(1);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite_sid = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'SID',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite_vdaf = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'VDAF',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite_nsa = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'NSA',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite_qse = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'QSE',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const preinscritListe = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find().sort({updatedAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const preinscritListeSid = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'SID'}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};

const preinscritListeNsa = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'NSA'}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const preinscritListeQse = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'QSE'}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const preinscritListeVdaf = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filiere:'VDAF'}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const countSid = async (req, res, next) => {
  try {
    console.log("hello");
    const total = await Preinscription.find({filiere:'SID'}).count();
    const licence2 = await Preinscription.find({filiere:"SID",diplome:"Licence2"}).count();
    const licence3 = await Preinscription.find({filiere:"SID",diplome:"Licence3"}).count();
    const master1 = await Preinscription.find({filiere:"SID",diplome:"Master1"}).count();
    const master2 = await Preinscription.find({filiere:"SID",diplome:"Master2"}).count();
    res.json({
      total:total,
       licence2:licence2,
       licence3:licence3,
       master2:master2,
       master1:master1
    });
  } catch (error) {
    res.json(error);}}
const countNsa = async (req, res, next) => {
  try {
    console.log("hello");
    const total = await Preinscription.find({filiere:'NSA'}).count();
    const licence2 = await Preinscription.find({filiere:"NSA",diplome:"Licence2"}).count();
    const licence3 = await Preinscription.find({filiere:"NSA",diplome:"Licence3"}).count();
    const master1 = await Preinscription.find({filiere:"NSA",diplome:"Master1"}).count();
    const master2 = await Preinscription.find({filiere:"NSA",diplome:"Master2"}).count();
    res.json({
      total:total,
       licence2:licence2,
       licence3:licence3,
       master2:master2,
       master1:master1
    });
  } catch (error) {
    res.json(error);
  }  }
const countQse = async (req, res, next) => {
  try {
    console.log("hello");
    const total = await Preinscription.find({filiere:'QSE'}).count();
    const licence2 = await Preinscription.find({filiere:"QSE",diplome:"Licence2"}).count();
    const licence3 = await Preinscription.find({filiere:"QSE",diplome:"Licence3"}).count();
    const master1 = await Preinscription.find({filiere:"QSE",diplome:"Master1"}).count();
    const master2 = await Preinscription.find({filiere:"QSE",diplome:"Master2"}).count();
    res.json({
      total:total,
       licence2:licence2,
       licence3:licence3,
       master2:master2,
       master1:master1
    });
  } catch (error) {
    res.json(error);
  }
 }
const countVdaf = async (req, res, next) => {
  try {
    console.log("hello");
    const total = await Preinscription.find({filiere:'VDAF'}).count();
    const licence2 = await Preinscription.find({filiere:"VDAF",diplome:"Licence2"}).count();
    const licence3 = await Preinscription.find({filiere:"VDAF",diplome:"Licence3"}).count();
    const master1 = await Preinscription.find({filiere:"VDAF",diplome:"Master1"}).count();
    const master2 = await Preinscription.find({filiere:"VDAF",diplome:"Master2"}).count();
    res.json({
      total:total,
       licence2:licence2,
       licence3:licence3,
       master2:master2,
       master1:master1,
       total:total
    });
  } catch (error) {
    res.json(error);
  }
}; 
const modifie=async(req,res,next)=>{
  const modifie = await Preinscription.findByIdAndUpdate(req.body.pre,{decisionType:req.body.decisionType,diplome:req.body.diplome})
  res.json({message:"modifié"})
}

module.exports = {
  modifie,
  countVdaf,
  countSid,
  countQse,
  countNsa,
  voirById,
  faire,
  lister,
  preinscritListeVdaf,
  preinscritListeQse,
  preinscritListeSid,
  preinscritListeNsa,
  preinscritListe,
  decision_traite_qse,
  decision_traite_vdaf,
  decision_traite_sid,
  decision_traite_nsa,
  vdaf_premier,
  qse_premier,
  nsa_premier,
  listerTroisPremier,
  sid_premier }