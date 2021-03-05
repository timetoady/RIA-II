import { Router } from 'express'
import { addAnime, getAllAnime } from "../controller/animeControl.js"
export const animeRouter = Router()

//import controllers

animeRouter.post('/', addAnime)
animeRouter.get('/', getAllAnime)