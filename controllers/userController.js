const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {body,validationResult} = require('express-validator')

const inscription = async (req, res, next) => {
try {

   const errors=  validationResult(req)
    if(!errors.isEmpty()){
     errors.array().forEach(error=>{
     req.flash('error',error.msg)
    })
    res.render('inscription',{messages: req.flash()} )
     return ;
    }  
  
    const userExist = await User.findOne({ nom: req.body.nom });
   
    if (userExist) {
      req.flash("error","Nom a deja étè utilisé,veuillez utiliser un autre");
      res.redirect('/inscription')
    } else {
      const hashedpassword = await bcrypt.hash(req.body.password, 12);

      const user = await new User({
        nom: req.body.nom,
        role:req.body.role,
        password: hashedpassword,
      })
        .save()
        .then((doc) =>
        {
          req.flash("success",`Votre compte a étè crée avec success`);
          res.redirect("/connexion",)
        }
        );
    }
  } catch (error) {
    throw Error(error);
  }
};

const lister = async (req, res, next) => {
  try {
    const liste = await User.find();
    res.render("user",{liste});
  } catch (error) {
    res.json(error);
  }
};

const connexion = async (req, res, next) => {
   try {
    //const localStorage = new LocalStorage("./scratch");
    const user = await User.findOne({ nom: req.body.nom });

    if (!user) {
    req.flash("errors","Ce nom d'utilisateur n'existe pas");
      res.render('connexion')
    }

    const estEgal = await bcrypt.compare(req.body.password, user.password);
    if (!estEgal) {
     req.flash('errors',"Mot de passe incorrect");
     res.render('connexion')
    }else{
     req.flash('success',"Connexion reussi");
      res.render('/')
    }
  } catch (error) {
    console.log(err);
    res.status(404).json(err);
  }
};

const modifierRole = async (req, res, next) => {
  try {
    const moi = await User.findByIdAndUpdate(req.body.id,{role:req.body.role});
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
const supprimer = async (req, res, next) => {
  try {
    const moi = await User.findByIdAndDelete(req.params.id).then(()=>{ res.redirect('/');});
   
  } catch (error) {
    console.log(error);
  }
};
const motdepasseoublier=async(req,res,next)=>{
  const user = await User.findOne({ nom: req.body.nom });

    if (!user) {
    req.flash("errors","Ce nom d'utilisateur n'existe pas");
      res.render('connexion')
    }
    const hashedpassword = await bcrypt.hash(req.body.password, 12);

      user.password= await hashedpassword
     await user.save().then(()=>{
    req.flash("Success","Le mot de passe a étè modifié");

      res.render('connexion')
     })
}
module.exports = {motdepasseoublier,inscription, connexion, modifierRole, lister ,supprimer};