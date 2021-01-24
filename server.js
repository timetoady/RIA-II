import express from "express";
import bodyParser from "body-parser";
import { apiRoute } from "./routes/api.js";
//import * as path from 'path';


const app = express();
const port = process.env.PORT || 5000;

//serve static site
app.use(express.static("src"));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/api", apiRoute);

app.use((req, res, next) => {
    res.status(404).send("So sorry, this page is unfound. Please check your path and try again.");
    //res.status(404).sendFile(path.join(__dirname, '..', 'notfound', 'notfound.html'))
});

app.listen(port, () => {
  console.log(`Server is running like the wind on port ${port}`);
});
