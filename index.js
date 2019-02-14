// require('dontenv').config();
// const db = require('./models/db');
// const db = require('./models/db');
require('dotenv').config();

const Faculty = require('./models/Faculty');
const Sub = require('./models/Sub');

//FACULTY METHODS
Faculty.addFaculty(
    "Clare",
    "Barton",
    "Clare",
    "What",
    "what",
    "Whovian",
    "221B");
