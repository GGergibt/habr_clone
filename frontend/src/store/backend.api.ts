import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost} from '../models/models'


export const backendApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api"
	}),

	endpoints: build => ({
		allPosts: build.query<IPost[], any>({
			query: () => ({
				url: 'post/all'
			}),
			transformResponse: (response: ServerResponse) => response.posts
		})
	})
})

export const {useAllPostsQuery} = backendApi
