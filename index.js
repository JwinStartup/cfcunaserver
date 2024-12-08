require("./config.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session=require('express-session')
const connectFlash =require('connect-flash');
const MongoStore=require('connect-mongo')
const routes = require("./routes/index.js");
const passport=require('passport')
const path= require("path");

const { preinscrire,preinscriptionById } = require("./controllers/preinscriptionControlle.js");


const port = 8080;
const app = express();


app.use(session({
  secret:"cfc una app",
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
    },
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/CFCUNA" })
    }))

app.use(passport.initialize())
app.use(passport.session())
require('./utils/passport.js')


app.use(connectFlash())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
    }
  next();
  });
  
app.use(cors());
app.post("/preinscrire", preinscrire);
app.get("/preinscrire/:numero", preinscriptionById);
app.use((req,res,next)=>{
  res.locals.user=req.user;
  next();
})
app.use((req,res,next)=>{
  res.locals.messages=req.flash();
  next();
})

app.use("/",routes.routes)
//app.post("/creer",(req,res,next)=>{
//  console.log(req.body)
 // next()
//})










app.listen(port, () =>
  console.log(`l'application  a été lancée sur url http://localhost:` + port)
);
