/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS posts(
	id int NOT NULL AUTO_INCREMENT UNIQUE,
	title varchar(64) NOT NULL,
	content text NOT NULL,
	image_destination varchar(256),
	author_id int,
	FOREIGN KEY (author_id) REFERENCES user_table(id)

)
