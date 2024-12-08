const passport = require('passport')
const LocalStrategy= require('passport-local').Strategy
const bcrypt = require("bcryptjs");
const User = require('../models/user')
const createHttpError=require('http-errors')
passport.use(
    new LocalStrategy({
        usernameField:"nom",
        passwordField:"password"
    }, async (nom,password,done)=> {
          try {
            const user= await User.findOne({nom})
            //Nom utilisateur n'existe pas
            if(!user){
                return done(null,false,{message:"Le nom utilisateur n'existe pas"})
            }
            const estEgal = await bcrypt.compare(password, user.password);

            return estEgal?
                done(null,user)
            :
                done(null,false,{message:"Mot de passe incorrect"} )

          } catch (error) {
             done(error)
            //createHttpError.InternalServerError(error.message)
          }
    })
);

passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser(async (id, done)=> {
        try{
          const user = await User.findById(id)
          if(!user) throw new Error("Utilisateur n'a pas étè trouvé");
          done(null,user)
        }catch(err){
            done(err,null)
        }
    
    
    })

