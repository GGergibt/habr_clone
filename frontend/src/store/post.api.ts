import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {ServerResponse, IPost, IPostWithToken} from '../models/models'


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
		createPost: build.mutation<any, any>({
			query: (post: any) => ({
				url: post.has('id')? `${post.get('id')}/update`: 'create',
				method: post.has('id')? 'put': 'post',
				headers: { Authorization: `Bearer ${token}`},
				body: post
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
		likePost: build.mutation<any, IPostWithToken>({
			query: (post: IPostWithToken) => ({
				url: `${post.id}/like`,
				method: 'post',
				headers: { Authorization: `Bearer ${post.token}`, 'Content-Type': 'application/json'}

			}),
		}),
		isAuthor: build.query<any, any>({
			query: (authModel: any) => ({
				url: `${authModel.id}/is_author`,
				method: 'get',
				headers: { Authorization: `Bearer ${authModel.token}`, 'Content-Type': 'application/json'}
			}),
		}),
		isLiked: build.query<any, any>({
			query: (details: any) => ({
				url: `${details.postId}/is_liked`,
				method: 'get',
				headers: { Authorization: `Bearer ${details.token}`, 'Content-Type': 'application/json'}

			}),
		})
})
})

// export const {useAllPostsQuery, useLazyGetPostQuery, useCreatePostMutation, useGetPostQuery, useDeletePostQuery} = postApi
export const {useAllPostsQuery, useLazyGetPostQuery, useLazyUserPostsQuery, useCreatePostMutation, useGetPostQuery, useDeletePostMutation, useLikePostMutation, useLazyIsAuthorQuery, useLazyIsLikedQuery} = postApi
