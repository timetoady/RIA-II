import express from "express";
import bodyParser from "body-parser";
import { animeRouter } from "./routes/animeRoutes.js";
import { Anime } from "./models/anime.js";
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

//MongoDB and env file settings 
mongoose.set("useFindAndModify", false);
dotenv.config()

//Parsing and CORS middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/anime", animeRouter);
app.use('/', (req, res) => {res.send("Hi! API in progress here. Don't mind the mess.")})

//404 giver
app.use((req, res, next) => {
    res.status(404).send(res.json({Message: "404. Sorry, looks like we ain't findin' that."}))
});


//main app launch upon connection to MongoDB
const launch = async () =>{
  const mongoDB = process.env.MONGODB_URL;
  await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
  const theDb = mongoose.connection;
  theDb.on("error", console.error.bind(console, "MongoDB connection error:"));
  ;
  app.listen(port, () => {
    console.log(`Server is running like the wind on port ${port}`);
  });

}

launch()


