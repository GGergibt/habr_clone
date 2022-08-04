export const user_table = "CREATE TABLE IF NOT EXISTS `user_table` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `role` varchar(64) NOT NULL, UNIQUE KEY `id` (`id`), UNIQUE KEY `username` (`username`));"

export const posts = "CREATE TABLE IF NOT EXISTS `posts` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(64) NOT NULL, `content` text NOT NULL, `description` varchar(256), `image` varchar(256) DEFAULT NULL, `author_id` int DEFAULT NULL, `created_at` datetime default CURRENT_TIMESTAMP, UNIQUE KEY `id` (`id`), KEY `author_id` (`author_id`), CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user_table` (`id`));"

export const likes_of_posts = "CREATE TABLE IF NOT EXISTS likes_of_posts(post_id int, user_id int, FOREIGN KEY (user_id) REFERENCES user_table(id), FOREIGN KEY (post_id) REFERENCES posts(id))"
