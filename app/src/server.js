/* *
  title: server.js 

  date: 7/24/2019

  author:  javier olaya

  description: this server handles the calls to the db responding with
  movies data to the client
         
 */
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const keys = require('./keys/nodeKeys');
const movieController = require('./controller/movieController');

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", 'Content-Type');
  next();
});

app.get('/all', movieController.getAllMovies);

app.get('/', movieController.getMovie);

app.post('/', movieController.createMovie);

app.put('/', movieController.updateMovie);

app.delete('/', movieController.deleteMovie);

app.delete('/all', movieController.deleteAllMovies);

app.listen(port, () => console.log(`listening to port ${port}`));


