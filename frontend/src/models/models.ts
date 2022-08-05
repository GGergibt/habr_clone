export interface IPost {
id: number;
title: string;
content: string;
image: string;
author: string;
description: string;
likes_count: number;
created_at: Date;
}


export interface ServerResponse {
	posts: IPost[];
	post: IPost
}


