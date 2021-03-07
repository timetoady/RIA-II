import { Router } from 'express'
import { addAnime, getAllAnime, getAnimeByID, searchAnime, deleteAnime, editEntry } from "../controller/animeControl.js"
export const animeRouter = Router()

//Controllers
animeRouter.post('/', addAnime)
animeRouter.get('/', getAllAnime)
animeRouter.get('/:id', getAnimeByID)
animeRouter.get('/search/:query', searchAnime)
animeRouter.delete('/delete/:id', deleteAnime)
animeRouter.put('/edit/:id', editEntry)

