const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://akoujeanpaul:jupy0798720866@cluster0.fibhleg.mongodb.net/CFCFUNA", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connecté"))
  .catch((err) => console.log(err));