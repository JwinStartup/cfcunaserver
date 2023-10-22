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
        email: req.body.email,
        role:req.body.role,
        password: hashedpassword,
      })
        .save()
        .then((doc) =>
          res.json({
            email: doc.email,
            password: doc.password,
            nom: doc.nom,
          })
        );
    }
  } catch (error) {
    return res.json(error);
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

module.exports = { inscription, connexion, userById, lister };