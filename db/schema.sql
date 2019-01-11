DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
    id INTEGER AUTO_INCREMENT NOT NULL,
    wish_name VARCHAR(300),
    made BOOLEAN NOT NULL default 0,

    PRIMARY KEY (id)

);