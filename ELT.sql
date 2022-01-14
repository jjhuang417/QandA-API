/*
ELT Process:

1. psql postgres to go into the postgres shell
2. run the COPY commands to load the data of the CSV into the local postgreSQL server.
3. run the alter table command to set the data type of the date columns to an actual date/time format
*/

/*
Extract: take the data out of the CSV.
Load: upload it into the postgreSQL
Transform: turn the data into digestable roles and columns
*/

\COPY questions FROM '/Users/Soft/work/QandA-API/data/questions.csv' DELIMITER ',' CSV HEADER;
alter table questions alter column question_date set data type timestamp with time zone using to_timestamp(question_date/1000);

\COPY answers FROM '/Users/Soft/work/QandA-API/data/answers.csv' DELIMITER ',' CSV HEADER;
alter table answers alter column answer_date set data type timestamp with time zone using to_timestamp(answer_date/1000);

\COPY photos FROM '/Users/Soft/work/QandA-API/data/answers_photos.csv' DELIMITER ',' CSV HEADER;