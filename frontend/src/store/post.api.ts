import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost} from '../models/models'


const token = document.cookie? document.cookie.split('=')[1]: 'not'
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
		getPost: build.query<IPost, number>({
			query: (id: number) => ({
				url: `${id}`
			}),
			transformResponse: (response: ServerResponse) => response.post
		}),
		createPost: build.mutation<any, IPost>({
			query: (post: IPost) => ({
				url: 'create',
				method: 'post',
				headers: { Authorization: `Bearer ${token}`},
				body: {
					title: post.title,
					content: post.content

				}
			})
		})
	})
})

export const {useAllPostsQuery, useGetPostQuery, useCreatePostMutation} = postApi
