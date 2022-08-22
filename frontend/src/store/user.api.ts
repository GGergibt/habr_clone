import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost, IUser, IToken} from '../models/models'


export const userApi = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api/user"
	}),

	endpoints: build => ({
		// signUp: build.query<IUser, IUser>({
		signUp: build.mutation<IToken, IUser>({
			query: (bodyJson: any) => ({
				url: 'create',
				method: 'post',
				body: {
					username: bodyJson.get('username'),
					email: bodyJson.get('email'),
					password: bodyJson.get('password')
				}


			})
			// transformResponse: (response: ServerResponse) => response.posts
		}),
		login: build.query<IToken, any>({
			query: (bodyJson: any) => ({
				url: 'login',
				method: 'post',
				body: {
					username: bodyJson.get('username'),
					password: bodyJson.get('password')
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
