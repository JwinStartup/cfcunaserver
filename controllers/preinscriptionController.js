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
        annee: req.body.annee,
        filiere:req.body.filiere,
        diplome:req.body.diplome,
        tel:req.body.tel,
        whatsapp:req.body.whatsapp,
        decisionType:'en cours'
      }).save()
        .then((doc) =>
          res.json({
            id:doc.numero
          })
        );
  } catch (error) {
    return res.json(error);
  }
};

const lister = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await Preinscription.find();
    console.log(liste);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};
/*
const connexion = async (req, res, next) => {
  try {
    const localStorage = new LocalStorage("./scratch");
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("Email incorrect");
    }

    const estEgal = await bcrypt.compare(req.body.password, user.password);
    if (!estEgal) {
      throw new Error("Mot de passe incorrect");
    }
    const token = jwt.sign(
      { userID: user.id, email: user.email },
      "ebeAPPserver",
      {
        expiresIn: "1y",
      }
    );
    localStorage.setItem("TOKEN", token);
    await user.save().then((doc) => {
      res.json({ userID: doc._id, token: token, tokenExpiration: 1 });
    });
  } catch (error) {
    console.log(err);
    res.status(404).json(err);
  }
};

const userById = async (req, res, next) => {
  try {
    const moi = await User.findById(req.params.id);
    console.log(moi);
    res.json(moi);
  } catch (error) {
    console.log(error);
  }
};
*/
module.exports = { faire,lister };