const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movieModel))
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  for (const movie of Object.values(movieModel)) {
    if (movie.imdbID == req.params.imdbID) {
      return res.send(movie);
    }
  }
  res.sendStatus(404);
})

app.put('/movies/:imdbID', function (req, res) {
  const updatedMovie = req.body;
  for (const movie of Object.values(movieModel)) {
    if (movie.imdbID == req.params.imdbID) {
      updatedMovie["imdbID"] = movie.imdbID;
      movieModel[movie.imdbID] = updatedMovie;
      return res.sendStatus(200);
    }
  }
  movieModel[movie.imdbID] = updatedMovie;
  res.status(201).json(updatedMovie);
})
/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

