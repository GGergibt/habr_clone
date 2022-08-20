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
		userPosts: build.query<IPost[], string>({
			query: (tokenAuth: string) => ({
				url: '/owned_by_user',
				headers: { Authorization: `Bearer ${tokenAuth}`, 'Content-Type': 'application/json'},
			}),
			transformResponse: (response: ServerResponse) => response.posts
		}),
		createPost: build.mutation<any, IPost>({
			query: (post: IPost) => ({
				url: post.id? `${post.id}/update`: 'create',
				method: post.id? 'put': 'post',
				// headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'},
				headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
				body: {
					title: post.title,
					content: post.content

				},
			})
		}),
		// deletePost: build.query<any, any>({
		deletePost: build.mutation<any, any>({
			query: (id: any) => ({
				url: `${id}/delete`,
				method: 'delete',
				headers: { Authorization: `Bearer ${token}`}
			})
		}),
		likePost: build.mutation<any, number>({
			query: (id: number) => ({
				url: `${id}/like`,
				method: 'post',
				headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
			}),
		}),
		isAuthor: build.query<any, any>({
			query: (authModel: any) => ({
				url: `${authModel.id}/is_author`,
				method: 'get',
				headers: { Authorization: `Bearer ${authModel.token}`, 'Content-Type': 'application/json'}
			}),
		})
})
})

// export const {useAllPostsQuery, useLazyGetPostQuery, useCreatePostMutation, useGetPostQuery, useDeletePostQuery} = postApi
export const {useAllPostsQuery, useLazyGetPostQuery, useLazyUserPostsQuery, useCreatePostMutation, useGetPostQuery, useDeletePostMutation, useLikePostMutation, useLazyIsAuthorQuery} = postApi
