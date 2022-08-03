export interface IPost {
id: number;
title: string;
content: string;
image_destination: string;
author: string;
created_at: Date;
}

export interface ServerResponse {
	posts: IPost[];
}

