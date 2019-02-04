const db = require('db');

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
    static addFaculty(id,
        Faculty_Name,
        Last_Name,
        First_Name,
        Job_Title,
        Grade,
        Track,
        Room) {
        return db.one(`
    INSERT INTO Faculty_Master(
        (   Faculty_Name,
            Last_Name,
            First_Name,
            Job_Title,
            Grade,
            Track,
            Room)
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7
        ) returning id
    ` [(Faculty_Name,
                Last_Name,
                First_Name,
                Job_Title,
                Grade,
                Track,
                Room)])
            .then((newFaculty) => {
                const theFaculty = new Faculty(
                    newFaculty.id,
                    Faculty_Name,
                    Last_Name,
                    First_Name,
                    Job_Title,
                    Grade,
                    Track,
                    Room)
                return theFaculty;
            })
    };


}

module.exports = Faculty;