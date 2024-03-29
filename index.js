require("dotenv").config();
require("./config.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./routes/userRoutes.js");
const preinscription = require("./routes/preinscriptionRoutes.js");

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use("/api/users", users.routes);
app.use("/api/preinscription", preinscription.routes);

app.listen(port, () =>
  console.log(`l'application  a été lancée sur url http://localhost:` + port)
);
