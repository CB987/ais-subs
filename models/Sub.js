const db = require('./db');

class Sub {
    constructor(
        id,
        Sub_Name,
        Last_Name,
        First_Name,
        Language,
        Qualifications,
        Email,
        Home_Phone,
        Cell_Phone,
        Comments,
        Daily_Rate,
        Inactive
    ) {
        this.id = id;
        this.Sub_Name = Sub_Name;
        this.Last_Name = Last_Name;
        this.First_Name = First_Name;
        this.Language = Language;
        this.Qualifications = Qualifications;
        this.Email = Email;
        this.Home_Phone = Home_Phone;
        this.Cell_Phone = Cell_Phone;
        this.Comments = Comments;
        this.Daily_Rate = Daily_Rate;
        this.Inactive = Inactive;
    }

    //CREATE
    static addSub(
        Sub_Name,
        Last_Name,
        First_Name,
        Language,
        Qualifications,
        Email,
        Home_Phone,
        Cell_Phone,
        Comments,
        Daily_Rate,
        Inactive) {
        return db.one(`
                INSERT INTO Sub_Master
                    (Sub_Name,
                        Last_Name,
                        First_Name,
                        Language,
                        Qualifications,
                        Email,
                        Home_Phone,
                        Cell_Phone,
                        Comments,
                        Daily_Rate,
                        Inactive
                        ) VALUES (
                            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
                        ) returning id
                    `, [
                Sub_Name,
                Last_Name,
                First_Name,
                Language,
                Qualifications,
                Email,
                Home_Phone,
                Cell_Phone,
                Comments,
                Daily_Rate,
                Inactive
            ]).then((result) => {
                const newSub = new Sub(
                    result.id,
                    Sub_Name,
                    Last_Name,
                    First_Name,
                    Language,
                    Qualifications,
                    Email,
                    Home_Phone,
                    Cell_Phone,
                    Comments,
                    Daily_Rate,
                    Inactive)
                return newSub
            }).then(() => {
                console.log(`${Sub_Name} has been added`)
            });
    };

    //RETRIEVE
    static getSubs() {
        return db.any(`
            SELECT * FROM Sub_Master
        `,).then(resultsArray => {
            let subsArray = resultsArray.map(subObj => {
                let s = new Sub(subObj.id, subObj.sub_name, subObj.last_name, subObj.first_name, subObj.language, subObj.qualifications, subObj.email, subObj.home_phone, subObj.cell_phone, subObj.comments, subObj.daily_rate, subObj.inactive);
                return s;
            });
            console.log(subsArray);
            return subsArray;
        })
            .then(() => {
                console.log("here are all the subs")
            })
    };
}

module.exports = Sub;