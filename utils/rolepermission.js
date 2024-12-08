const rolepermission=(req,res,next)=>{
       if(req.user.role==="superadmin"){
        next()
       }else{
           req.flash('Echec',"Désolé vous n'êtes pas autorisé à éfectuer une inscription ")
           res.redirect('/')
       }
}

module.exports= rolepermission