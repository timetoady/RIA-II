import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animeSchema = new Schema({
    title: {type: String, required: true},
    image_url: {type: String, default: "https://via.placeholder.com/225x319.jpeg/0000FF/808080?text=Oops!+Image+not+Found"},
    type: {type: String, required: true},
    episodes: {type: Number, default: "0"},
    synopsis: {type: String, default: "No synopsis provided."},
    score:  {type: Number, default: "0"},
    mal_id: {type: Number, required: true}
})

export const Anime = mongoose.model("Anime", animeSchema)