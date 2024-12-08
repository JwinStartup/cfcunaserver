const Preinscription = require("../models/preinscription");
const Ue = require("../models/ue");
const path= require('path')
const XLSX= require('xlsx')

const telechargerAuditeur= async (req,res,next)=>{
      res.download(path.join(__dirname,'../listeauditeur.xlsx'),(err)=>{
           if(err){
               console.log(err);
           }
       })
}


const telechargerFiche= async (req,res,next)=>{
     try {
             res.download(path.join(__dirname,'../listepreinscription.xlsx'),(err)=>{
                if(err){
                    console.log(err);
                }
            })
     } catch (error) {
        throw Error(error)
     }

}
const preinscrire = async (req, res, next) => {
    try {
        let idpre
       // res.json(d)
       const preinscription = await new Preinscription({
             anneeUniversitaire:req.body.anneeUniversitaire ,
             numero:req.body.numero,
             ufr:req.body.ufr,
             dateNaissance:req.body.dateNaissance ,
             email:req.body.email ,
             formation:req.body.formation ,
             lieuNaissance:req.body.lieuNaissance ,
             nationnalite:req.body.nationnalite ,
             nom:req.body.nom ,
             numeroCarte:req.body.numeroCarte ,
             numeroTable:req.body.numeroTable ,
             parcours:req.body.parcours ,
             prenoms:req.body.prenoms ,
             whatshapp:req.body.whatshapp ,
             filiere:req.body.filiere ,
             niveau:req.body.niveau ,
             profession:req.body.profession ,
             anneeExclu:req.body.anneeExclu,
             serie:req.body.serie ,
             tel:req.body.tel ,
             statut:"encours",
             diplomePiece:req.body.diplomePiece,
             photo:req.body.photo
        })
            .save()
            .then((doc) =>
            {
                idpre=doc.id
            }
        );
             if(req.body.ueArattraper){
                let pre
                for (let i = 0; i < req.body.ueArattraper.length; i++) {
                    await new Ue({
                        nomue:req.body.ueArattraper[i].nomue,
                        niveau:req.body.ueArattraper[i].niveau})
                        .save()
                        .then(async(doc)=>{
                           pre= await Preinscription.findById(idpre)
                          await pre.ueArattraper.push(doc._id)
                          await pre.save()
                        })
                    }
                    res.json({numero:pre.numero})
                }
    } catch (error) {
        throw Error(error);
    }
}
const valider = async (req, res, next) => {
    try {
        console.log("salut")
        console.log(req.params.statut,req.params.userid,req.user.id)
        const preinscription = await Preinscription.findByIdAndUpdate(req.params.userid,{statut:req.params.statut,analyserPar:req.user.id})
        .then((doc) =>
            {
                res.redirect("/")
            }
            )
    } catch (error) {
        throw Error(error);
    }
}

const preinscriptionById= async (req,res,next)=>{
    try {
        console.log(req.params.numero)
        const preinscription = await Preinscription.findOne({numero:req.params.numero}).populate("ueArattraper")
              res.json(preinscription)
    } catch (error) {
        throw Error(error);
    }
}
const preinscById= async (req,res,next)=>{
    try {
        const userPre = await Preinscription.findOne({numero:req.params.numero}).populate("analyserPar").populate("ueArattraper")
        res.render("preinscription",{
            userPre:userPre
        })
    } catch (error) {
        throw Error(error);
    }
}

const listePreinscription =async (req,res,next)=>{
    try {
        const liste = await Preinscription.find().sort({createdAt:-1}) ;
        let reponse = JSON.parse(JSON.stringify(liste))
             const workBook=XLSX.utils.book_new();
             const workSheet=XLSX.utils.json_to_sheet(reponse);
             XLSX.utils.book_append_sheet(workBook,workSheet,"listepreinscription")
             XLSX.writeFile(workBook,path.join(__dirname,'../listepreinscription.xlsx'))
        res.render("home",{liste});
      } catch (error) {
        throw Error(error);
      }

}

const listeAuditeur =async (req,res,next)=>{
    try {
        const liste = await Preinscription.find({statut:'accepte'}).sort({createdAt:-1}) 
             let reponse = JSON.parse(JSON.stringify(liste))
             const workBook=XLSX.utils.book_new();
             const workSheet=XLSX.utils.json_to_sheet(reponse);
             XLSX.utils.book_append_sheet(workBook,workSheet,"listeauditeur")
             XLSX.writeFile(workBook,path.join(__dirname,'../listeauditeur.xlsx'))
        res.render("auditeur",{liste});
      } catch (error) {
        throw Error(error);
      }

}


module.exports = {telechargerFiche,telechargerAuditeur,preinscrire,valider,preinscriptionById,listeAuditeur,listePreinscription,preinscById};