'use strict';

const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Exercise 3.2 is deployed by Heroku, CircleCI.');
});

app.listen(process.env.PORT || PORT, '0.0.0.0');
