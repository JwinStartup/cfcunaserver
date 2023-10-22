const mongoose = require("mongoose");

mongoose
  .connect( 
    //'mongodb://localhost:27017/cfcuna'
    process.env.MONGODB_URL
    , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connecté"))
  .catch((err) => console.log(err));