USE rephrasing;

CREATE TABLE question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sentence VARCHAR(250) NOT NULL,
    keyword VARCHAR(50) NOT NULL,
    sentence_start VARCHAR(100) NOT NULL,
    sentence_end VARCHAR(100) NOT NULL,
    answer VARCHAR(100) NOT NULL
);
