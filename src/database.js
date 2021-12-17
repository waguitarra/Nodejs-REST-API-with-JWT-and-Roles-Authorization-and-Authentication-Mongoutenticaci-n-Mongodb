const mongoose = require('mongoose')

const url = `mongodb+srv://wagner:wagner123456789@cluster0.6scn7.mongodb.net/probasNode?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  //useCreateIndex: false,
  useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })



// import mongoose from "mongoose";
// import config from "./config";

// mongoose
//   .connect(config.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((db) => console.log(`DB is connected`))
//   .catch((err) => console.log(err));
