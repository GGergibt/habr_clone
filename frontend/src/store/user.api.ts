import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost, IUser} from '../models/models'


export const userApi = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api/user"
	}),

	endpoints: build => ({
		// signUp: build.query<IUser, IUser>({
		signUp: build.mutation<IUser, IUser>({
			query: (bodyJson: IUser) => ({
				url: 'create',
				method: 'post',
				body: {
					username: bodyJson.username,
					email: bodyJson.email,
					password: bodyJson.password

				}

			})
			// transformResponse: (response: ServerResponse) => response.posts
		}),
		login: build.query<any, any>({
			query: (bodyJson: any) => ({
				url: 'login',
				method: 'post',
				body: {
					username: bodyJson.username,
					password: bodyJson.password
				}
			})

		})
		// signUp: build.query<any, any>({

		// 	query: () => ({
		// 		url: 'create'
		// 	}),
		})
	})

// export const {useLazySignUpQuery, useLazyLoginQuery} = userApi
export const {useSignUpMutation, useLazyLoginQuery} = userApi
