COPY Faculty_Master(
    Faculty_Name, 
    Last_Name, 
    First_Name, 
    Job_Title, 
    Grade, 
    Track, 
    Room
) FROM '/Users/cb/Desktop/projects/ais-sub/Faculty_Master.csv' 
DELIMITER ',' 
CSV HEADER;

COPY Sub_Master(
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
) FROM '/Users/cb/Desktop/projects/ais-sub/Sub_Master.csv' 
DELIMITER ',' 
CSV HEADER;