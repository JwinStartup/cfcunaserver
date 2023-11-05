const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const LocalStorage = require("node-localstorage").LocalStorage;
const inscription = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      res.status(500).send({
        error: "L'email a deja étè utilisé,Veuillez utiliser un autre",
      });
    } else {
      const hashedpassword = await bcrypt.hash(req.body.password, 12);

      const user = await new User({
        nom: req.body.nom,
        role:req.body.role,
        password: hashedpassword,
      })
        .save()
        .then((doc) =>
          res.json({message:"success"})
        );
    }
  } catch (error) {
    return res.json({message:error});
  }
};

const lister = async (req, res, next) => {
  try {
    console.log("hello");
    const liste = await User.find();
    console.log(liste);
    res.json(liste);
  } catch (error) {
    res.json(error);
  }
};

const connexion = async (req, res, next) => {
  try {
    const localStorage = new LocalStorage("./scratch");
    const user = await User.findOne({ nom: req.body.nom });

    if (!user) {
      res.status(400).json({message:"Email incorrect"});
    }

    const estEgal = await bcrypt.compare(req.body.password, user.password);
    if (!estEgal) {
      res.status(400).json({message:"Mot de passe incorrect"});
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

const modifierRole = async (req, res, next) => {
  try {
    const moi = await User.findByIdAndUpdate(req.params.id,{role:req.body.role});
    res.json({message:"modifie"});
  } catch (error) {
    console.log(error);
  }
};
const supprime = async (req, res, next) => {
  try {
    const moi = await User.findByIdAndDelete(req.params.id);
    res.json({message:"supprimé"});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { inscription, connexion, modifierRole, lister ,supprime};