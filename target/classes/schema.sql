DROP TABLE IF EXISTS player CASCADE;

CREATE TABLE `player` (
`id` BIGINT NOT NULL AUTO_INCREMENT, 
`firstname` VARCHAR(255), 
`secondname` VARCHAR(255), 
`yellow` INT,
`red` INT, 
`headshot` VARCHAR(255),
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS video CASCADE;

CREATE TABLE `video` (
`id` BIGINT NOT NULL AUTO_INCREMENT, 
`description` VARCHAR(255), 
`path` VARCHAR(255), 
PRIMARY KEY (`id`)
);