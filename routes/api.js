import { Router } from 'express'

export const apiRoute = Router();

const myObject = {
name: "Fuzzy Wuzzy",
species: "bear",
hair: false,
}

apiRoute.get("/", (req, res) => {
res.json(myObject)
})



//module.exports = apiRoute;