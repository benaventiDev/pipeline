const moviesRouter = require('express').Router();

let movies = [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "genre": "drama",
        "summary": "nothing to show here"
        
    },
    {
        "id": 2,
        "title": "The Godfather",
        "year": 1972,
        "genre": "drama",
        "summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
        "id": 3,
        "title": "The Dark Knight",
        "year": 2008,
        "genre": "action",
        "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
  ]


moviesRouter.get('/', (req, res) => {
    res.status(200).json(movies);
});

moviesRouter.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(movie => movie.id === id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).end();
    }
});


moviesRouter.delete('/:id', (request, response) => {
    const id = Number(request.params.id)
    movies = movies.filter(movie => movie.id !== id)
  
    response.status(204).end()
  })
    

module.exports = moviesRouter;