const db = require('./db');


class Faculty {
    constructor(id,
        Faculty_Name,
        Last_Name,
        First_Name,
        Job_Title,
        Grade,
        Track,
        Room) {
        this.id = id;
        this.Faculty_Name = Faculty_Name;
        this.Last_Name = Last_Name;
        this.First_Name = First_Name;
        this.Job_Title = Job_Title;
        this.Grade = Grade;
        this.Track = Track;
        this.Room = Room;
    }

    //CREATE
    static addFaculty(
        Faculty_Name,
        Last_Name,
        First_Name,
        Job_Title,
        Grade,
        Track,
        Room) {
        return db.one(`
        INSERT INTO Faculty_Master
            (   Faculty_Name,
                Last_Name,
                First_Name,
                Job_Title,
                Grade,
                Track,
                Room
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7
            ) returning id
        `, [Faculty_Name,
                Last_Name,
                First_Name,
                Job_Title,
                Grade,
                Track,
                Room])
            .then((newFaculty) => {
                const FacultyMember = new Faculty(
                    newFaculty.id,
                    Faculty_Name,
                    Last_Name,
                    First_Name,
                    Job_Title,
                    Grade,
                    Track,
                    Room)
                return FacultyMember
            })
            .then(() => {
                console.log(`${Faculty_Name} has been added`)
            })
    };

    //RETRIEVE
    static getAllFaculty() {
        return db.any(`
        SELECT * FROM Faculty_Master`,)
            .then(resultsArray => {
                // console.log(resultsArray);
                let facultyArray = resultsArray.map(facultyObj => {
                    let f = new Faculty(facultyObj.id, facultyObj.faculty_name, facultyObj.last_name, facultyObj.first_name, facultyObj.job_title, facultyObj.grade, facultyObj.track, facultyObj.room);
                    return f;
                });
                // console.log(facultyArray);
                return facultyArray;
            })
            .then(() => {
                console.log("here are the faculty members")
            })
    };

    //UPDATE
    static updateFacultyInfo(
        id,
        Faculty_Name,
        Last_Name,
        First_Name,
        Job_Title,
        Grade,
        Track,
        Room) {
        return db.result(`
        UPDATE Faculty_Master
            SET Faculty_Name = $2,
                Last_Name = $3,
                First_Name = $4,
                Job_Title = $5,
                Grade = $6,
                Track = $7,
                Room = $8
            WHERE id = $1
        `, [id,
                Faculty_Name,
                Last_Name,
                First_Name,
                Job_Title,
                Grade,
                Track,
                Room])
            .then(() => {
                console.log(`${Faculty_Name} has been updated`)
            });
    };

    //DELETE
    static deleteFaculty(id) {
        return db.result(`
            DELETE FROM Faculty_Master
            WHERE id = $1
        `, [id])
            .then(() => {
                console.log(`Faculty member has been deleted`)
            })
    }
}


module.exports = Faculty;