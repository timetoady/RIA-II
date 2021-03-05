import { Anime } from '../models/anime.js'

//here export functions that work logic on routes

export const addAnime = ((req, res) => {
    Anime.create({
        title: req.body.title,
        image_url: req.body.image_url,
        type: req.body.type,
        episodes: req.body.episodes,
        synopsis: req.body.synopsis,
        score: req.body.score
    }, (err, anime) =>{
        err
          ? res.status(500).json({Message: `Uh oh, an error. ${err}`})
          : res.status(200).json(anime)
    })
})

export const getAllAnime = ((req, res) => {
    Anime.find((err, anime) => {
        err && res.status(500).json({Message: `Somethin is afoot! ${err}`});
        res.json(anime)
    })
})