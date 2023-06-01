DROP DATABASE IF EXISTS rephrasing;

CREATE DATABASE rephrasing;

USE rephrasing;

CREATE TABLE question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sentence VARCHAR(150) NOT NULL,
    keyword VARCHAR(50) NOT NULL,
    sentence_start VARCHAR(50) NOT NULL,
    sentence_end VARCHAR(50) NOT NULL,
    answer VARCHAR(50) NOT NULL
);

INSERT INTO question (sentence, keyword, sentence_start, sentence_end, answer)
    VALUES ('sentence1', 'keyword1', 'start1', 'end1', 'answer1'),
           ('sentence2', 'keyword2', 'start2', 'end2', 'answer2');
