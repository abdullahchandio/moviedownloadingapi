const express = require('express');
const app = express();
const movies = require('./movies.json');
const cors = require('cors');

const PORT = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors());

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:type', (req, res) => {
  const type = req.params.type.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.type.toLowerCase() === type);
  res.json(filteredMovies);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
