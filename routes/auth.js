const express = require("express");
const router = express.Router();
const {inscription, connexion, motdepasseoublier}=require('../controllers/userController')
const {body,validationResult} = require('express-validator')
const passport= require('passport')
const rolepermission = require("../utils/rolepermission")
router.get("/inscription", (req,res,next)=>{
 res.render("inscription")
});

router.post("/inscription",
  rolepermission,
   [
   body('password').trim().isLength(5).withMessage('Le mot de passe doit contenir au maximum 5 caractères'),
   body('passwordConfirme').custom((value,{req})=>{
    if(value!==req.body.password){
      throw new Error("Les mots de passe ne coresspondent pas ");
    }
    return true;
   })

  ],inscription);

router.get("/connexion", (req,res,next)=>{
  
  res.render("connexion")
});
router.post("/connexion", 
  passport.authenticate('local',{
    successReturnToOrRedirect:'/',
    failureRedirect:'/connexion',
    failureFlash:true
  } )
);
router.get("/deconnexion", (req,res,next)=>{
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/");
  });
});

router.get("/changerMotdepasse",
   (req,res,next)=>{
    res.render("changerMotdepasse")
   }

);
router.post("/changerMotdepasse",
  [
    body('password').trim().isLength(5).withMessage('Le mot de passe doit contenir au maximum 5 caractères'),
    body('passwordConfirme').custom((value,{req})=>{
     if(value!==req.body.password){
       throw new Error("Les mots de passe ne coresspondent pas ");
     }
     return true;
    })
 
   ],
  motdepasseoublier
);

module.exports = {routage:router}
