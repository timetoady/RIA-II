import express from 'express'
const router = express.Router();

const myObject = {
name: "Fuzzy Wuzzy",
species: "bear",
hair: false,
}

export const apiRoute = router.get("/", (req, res) => {
res.json(myObject)
})



//module.exports = apiRoute;