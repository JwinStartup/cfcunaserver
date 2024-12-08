const mongoose = require("mongoose");
//const uri = "mongodb+srv://jeanakoupaul:jupy0500908420@cluster0.d0fi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongodb+srv://akoujeanpaul:jupy0500908420@cluster0.fibhleg.mongodb.net/
//mongodb://localhost:27017/CFCUNA
mongoose
  .connect("mongodb+srv://jeanakoupaul:2yYHxtloY0M0KwUX@cluster0.cr5r4.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connecté"))
  .catch((err) => console.log(err));