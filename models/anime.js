import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animeSchema = new Schema({
    title: {type: String, required: false},
    image_url: {type: String, default: "https://via.placeholder.com/225x319.jpeg/0000FF/808080?text=Oops!+Image+not+Found"},
    type: {type: String, required: false},
    episodes: {type: Number, required: false},
    synopsis: {type: String, required: false},
    score:  {type: Number, required: false}
})

export const Anime = mongoose.model("Anime", animeSchema)