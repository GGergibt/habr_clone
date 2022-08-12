import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost} from '../models/models'


const token = document.cookie? document.cookie.split('=')[1]: 'not'
console.log(token)
// const headers = document.cookie? {Authorization: `Bearer ${token}`}
export const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api/post"
	}),

	endpoints: build => ({
		allPosts: build.query<IPost[], any>({
			query: () => ({
				url: 'all'
			}),
			transformResponse: (response: ServerResponse) => response.posts
		}),
		getPost: build.query<IPost, number | undefined>({
			query: (id: number | undefined) => ({
				url: `${id}`
			}),
			transformResponse: (response: ServerResponse) => response.post
		}),
		createPost: build.mutation<any, IPost>({
			query: (post: IPost) => ({
				url: post.id? `${post.id}/update`: 'create',
				method: post.id? 'put': 'post',
				headers: { Authorization: `Bearer ${token}`},
				body: {
					title: post.title,
					content: post.content

				}
			})
		})
	})
})

export const {useAllPostsQuery, useLazyGetPostQuery, useCreatePostMutation, useGetPostQuery} = postApi
