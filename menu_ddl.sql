DROP TABLE IF EXISTS menu;

CREATE TABLE menu(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    serving_date DATE,
    description VARCHAR(200)
)
ENGINE INNODB
CHARSET utf8
COLLATE utf8_swedish_ci;