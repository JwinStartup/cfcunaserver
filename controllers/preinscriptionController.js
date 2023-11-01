const Preinscription = require("../models/preinscription.js");
const LocalStorage = require("node-localstorage").LocalStorage;
const faire = async (req, res, next) => {
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
    const liste = await Preinscription.find({filier:'SID',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite_vdaf = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({filier:'VDAF',decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const decision_traite = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find({decisionType:{$ne:'Encours'}}).sort({createdAt:-1});
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
const preinscritListe = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find().sort({createdAt:-1});
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

module.exports = {modifie,countVdaf,countSid,countQse,faire,lister,preinscritListeVdaf,preinscritListeQse,preinscritListeSid,preinscritListe,decision_traite,decision_traite_vdaf,decision_traite_sid,vdaf_premier,qse_premier,listerTroisPremier,sid_premier }