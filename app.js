const express = require('express');

const app = express();
const cors = require('cors');

const moviesRouter = require('./controllers/movies');

app.use(cors())
app.use(express.json())


app.use('/api/v1/movies', moviesRouter );

module.exports = app;