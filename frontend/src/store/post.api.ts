import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost} from '../models/models'


export const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api"
	}),

	endpoints: build => ({
		allPosts: build.query<IPost[], any>({
			query: () => ({
				url: 'post/all'
			}),
			transformResponse: (response: ServerResponse) => response.posts
		}),
		getPost: build.query<IPost, number>({
			query: (id: number) => ({
				url: `post/${id}`
			}),
			transformResponse: (response: ServerResponse) => response.post
		})
	})
})

export const {useAllPostsQuery, useGetPostQuery} = postApi
