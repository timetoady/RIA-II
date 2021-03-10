import { Anime } from "../models/anime.js";

//here export functions that work logic on routes

export const addAnime = (req, res) => {
  Anime.create(
    {
      title: req.body.title,
      image_url: req.body.image_url,
      type: req.body.type,
      episodes: req.body.episodes,
      synopsis: req.body.synopsis,
      score: req.body.score,
      mal_id: req.body.mal_id
    },
    (err, anime) => {
      err
        ? res.status(500).json({ Message: `Uh oh, an error. ${err}` })
        : res.status(200).json(anime);
    }
  );
};

export const getAllAnime = (req, res) => {
  Anime.find((err, anime) => {
    err && res.status(500).json({ Message: `Somethin is afoot! ${err}` });
    res.json(anime);
  });
};

export const getAnimeByID = (req, res) => {
  const { id } = req.params;
  Anime.findById(id, (err, anime) => {
    if (anime === null)
      res
        .status(404)
        .json({
          Message:
            "Oops! Sorry, we couldn't find that. Check the ID and try again.",
        });
    err
      ? res.status(500).json({ Message: `Oops! There was an error: ${err}` })
      : res.json(anime);
  });
};

export const searchAnime = (req, res) => {
  let { query } = req.params;
  query = query.trim();
  Anime.aggregate(
    [{
      $match: {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { synopsis: { $regex: query, $options: "i" } },
        ],
      },
      }],
    (err, results) => {
      err
        ? res.status(500).json({ Message: `Oops! There was an error: ${err}` })
        : res.status(200).json(results);
    }
  );
};

export const deleteAnime = (req, res) => {
    let animeID = req.params.id
    Anime.deleteOne({ _id: animeID}, (err) => {
      err
        ? res.json({error: `Error! ${err}`})
        : res.status(200).json({message: `Anime ID ${animeID} removed`, status: 200});
    });
  };

export const editEntry = (req, res) => {
    const { id } = req.params
    const update = req.body
    const options = {omitUndefined: false, new: true}
    Anime.findOneAndReplace({_id: id}, update, options, (err, result) => {
      err
      ? res.send(err)
      : res.status(200).json(result)
    })
  }