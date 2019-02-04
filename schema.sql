create table Faculty_Master (
    id serial primary key,
    Faculty_Name text,
    Last_Name text,
    First_Name text,
    Job_title text,
    Grade text,
    Track text,
    Room text
)

create table Sub_Master (
    id serial primary key,
    Sub_Name text,
    Last_Name text,
    First_Name text,
    Language text,
    Qualifications text,
    Email nvarchar,
    Home_Phone varchar,
    Cell_Phone varchar,
    Comments text,
    Daily_Rate number,
    Inactive boolean
)