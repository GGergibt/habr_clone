/* Replace with your SQL commands */
CREATE TABLE likes_of_posts(
	post_id int,
	user_id int, 
	FOREIGN KEY (user_id) REFERENCES user_table(id),
	FOREIGN KEY (post_id) REFERENCES posts(id)
)
