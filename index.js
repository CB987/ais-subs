require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const db = require('./models/db');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Faculty = require("./models/Faculty");
const Sub = require("./models/Sub");

const page = require("./views/page");
const home = require("./views/home");
const subs = require("./views/subs");
const teachers = require("./views/teachers");

//========
//SERVING
//========
app.listen(4002, () => {
  console.log("yep");
});

app.get("/", (req, res) => {
  const thePage = page(home());
  res.send(thePage);
});

//FACULTY METHODS

app.get("/teachers", (req, res) => {
  //*****List All Faculty*/
  Faculty.getAllFaculty().then(allTeachers => {
    // console.log(allTeachers);
    // return allTeachers;
    console.log("ummmm?");
    const thePage = page(teachers(allTeachers));
    res.send(thePage);
  });
});

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
// Faculty.getAllFaculty().then(results => {
//   console.log(results);
// });

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

app.get("/subs", (req, res) => {
  //*****List All Faculty*/
  Sub.getSubs().then(allSubs => {
    // console.log(allTeachers);
    // return allTeachers;
    console.log("believe it");
    const thePage = page(subs(allSubs));
    res.send(thePage);
  });
});
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
// Sub.deleteSub(146);
