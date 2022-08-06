import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost} from '../models/models'


export const userApi = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api/user"
	}),

	endpoints: build => ({
		signUp: build.query<any, any>({
			query: (bodyJson: any) => ({
				url: 'create',
				method: 'post',
				body: {
					username: bodyJson.username,
					email: bodyJson.email,
					password: bodyJson.password

				}

			})
			// transformResponse: (response: ServerResponse) => response.posts
		})
		// signUp: build.query<any, any>({

		// 	query: () => ({
		// 		url: 'create'
		// 	}),
		})
	})

export const {useLazySignUpQuery} = userApi
