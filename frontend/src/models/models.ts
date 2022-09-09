export interface IPost {
id: number;
title: string;
content: string;
image: string;
author: string;
description: string;
likes_count: number;
created_at: Date;
token: string;
}

export interface IUser {
username: string;
email: string;
password: string;
confirmPassword: string;
}

export interface IToken {
	token: string;
}
export interface IPostWithToken {
	token: string;
	id: number
}

export interface ServerResponse {
	posts: IPost[];
	post: IPost
}


