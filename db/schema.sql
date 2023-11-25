CREATE DATABASE clothes_dev;

DROP TABLE IF EXISTS clothes;

CREATE TABLE clothes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category CHAR(16),
    heat NUMERIC(3) NOT NULL,
    cold NUMERIC(3) NOT NULL,
    material CHAR(16) NOT NULL,
    iscomfortable BOOLEAN,
    imageurl TEXT
);