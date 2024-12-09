const mongoose = require("mongoose");
//const uri = "mongodb+srv://jeanakoupaul:jupy0500908420@cluster0.d0fi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongodb+srv://akoujeanpaul:jupy0500908420@cluster0.fibhleg.mongodb.net/
//mongodb://localhost:27017/CFCUNA
mongoose
  .connect("mongodb://jupywin:jupy2025@cluster0-shard-00-00.cr5r4.mongodb.net:27017,cluster0-shard-00-01.cr5r4.mongodb.net:27017,cluster0-shard-00-02.cr5r4.mongodb.net:27017/?replicaSet=atlas-mon1bi-shard-0&ssl=true&authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connecté"))
  .catch((err) => console.log(err));