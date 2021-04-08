CREATE TABLE IF NOT EXISTS person (
    person_id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    sername VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(6) NOT NULL
     CHECK (
         gender='MALE' OR
         gender='FEMALE' OR
         gender='male' OR
         gender='female'
     )
);