import {configureStore} from '@reduxjs/toolkit'

import {postApi} from './post.api'

import {userApi} from './user.api'

export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
		[userApi.reducerPath]: userApi.reducer


	}
})
