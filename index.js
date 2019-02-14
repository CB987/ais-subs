// require('dontenv').config();
// const db = require('./models/db');
// const db = require('./models/db');
require('dotenv').config();

const Faculty = require('./models/Faculty');
const Sub = require('./models/Sub');

//FACULTY METHODS
//*****Add One Faculty*/
// Faculty.addFaculty(
//     "Clare",
//     "Barton",
//     "Clare",
//     "What",
//     "what",
//     "Whovian",
//     "221B");

//*****List All Faculty*/
// Faculty.getAllFaculty()

//*****Update One Faculty*/
// Faculty.updateFacultyInfo(112,
//     "Sherlock",
//     "Holmes",
//     "Sherlock",
//     "PI",
//     "A",
//     "Marks",
//     "221B"
// );

//*****Delete One Faculty */
Faculty.deleteFaculty(111)