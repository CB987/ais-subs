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
// Faculty.getAllFaculty();

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
// Faculty.deleteFaculty(111)

//SUB METHODS
//*****Add One Sub */
// Sub.addSub(
//     "Holmes",
//     "Holmes",
//     "Sherlock",
//     "English",
//     "All of them",
//     "holmes@sherlock.com",
//     "777-999-0000",
//     "333-444-5555",
//     "best detective",
//     "100.00",
//     "False"
// );

//*****Retrieve All Subs */
// Sub.getSubs();

//*****Update One Sub */
// Sub.updateSub(
//     148,
//     "Clare",
//     "Barton",
//     "Clare",
//     "knitting",
//     "idk",
//     "idk@sherlock.com",
//     "777-999-0000",
//     "333-444-5555",
//     "Jodi\'s wife",
//     "1000.00",
//     "False"
// );

//*****Delete One Sub */
Sub.deleteSub(147);