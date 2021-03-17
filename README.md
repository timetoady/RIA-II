# MongoDB/Mongoose Anime CRUD Server

## Usage and Endpoints

Database to serve and add anime info to local database. Anime info sourced from https://jikan.docs.apiary.io/, which scrapes from https://myanimelist.net/.

Client (Netlify): https://objective-lumiere-fb0645.netlify.app/
Server (Heroku): https://lit-mountain-37161.herokuapp.com/

### Create: `POST` '/anime'
Posts new anime to the database. Requires title, type, and mal_id (ID from myanimelist.net). image_url, episodes, synopsis, and score available but optional. No provided image_url produces a default one.

From the front client, simply use the search bar at the top left to look for an anime by title, character name, etc. and ten closest result will be provided. If you don't see what you're looking for, try refining your search.

### Read: `GET` '/anime'

#### Three get routes:

* '/anime' Gives the entire current listing of anime in the database. Used to populate main anime card display area.
* '/anime/:id' Returns specific anime by MongoDB _id. Used when clicking on individual titles to show extended info.
* 'anime/search/:query' Searches title and synopsis for partial matching query and returns all entries that match. Client side, the search in the top left ("Filter current...") will use this to return only anime that matches the search. An empty query returns all anime. 

### Update: `PUT` '/anime/edit/:id'

Updates entry by its MongoDB _id, and returns the new document. Undefined fields will be given a default, empty fields prevented by client and server validation. Edited in the front client by clicking on any anime card and clicking on the "EDIT" button and confirming changes.

### Delete: `DELETE` '/anime/delete/:id'

Deletes database entries by MongoDB _id. Returns successful deletion or error if ID invalid or unfound. Front end client uses this function when clicking on one of the cards and selecting "DELETE" and then "CONFIRM".
