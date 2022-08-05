import {configureStore} from '@reduxjs/toolkit'

import {postApi} from './post.api'

export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer


	}
})
