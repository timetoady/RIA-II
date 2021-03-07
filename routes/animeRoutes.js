import { Router } from 'express'
import { addAnime, getAllAnime, getAnimeByID, searchAnime } from "../controller/animeControl.js"
export const animeRouter = Router()

//import controllers

animeRouter.post('/', addAnime)
animeRouter.get('/', getAllAnime)
animeRouter.get('/:id', getAnimeByID)
animeRouter.get('/search/:query', searchAnime)