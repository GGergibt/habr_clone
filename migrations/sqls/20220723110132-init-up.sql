/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `user_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(64) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`)
);


