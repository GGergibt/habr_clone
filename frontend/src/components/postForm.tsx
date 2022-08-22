import {useSendForm} from '../hooks/useSendForm'
import {useCreatePostMutation} from '../store/post.api'
import {useEditPost} from '../hooks/useEditPost'
import {useCookies} from 'react-cookie'
import {useEffect} from 'react'

const PostForm = () => {
	const [createPost, {isLoading, isError, data: response, error}] = useCreatePostMutation({})
	const [cookies, setCookies] = useCookies()
	const sendForm = useSendForm(createPost)
	const isEdit = useEditPost(sendForm.setValue)
	console.log(error)


	return (

	  <>
	  <form encType="mutlipart/form-data" onSubmit={sendForm.handleSubmit(sendForm.onSubmit)} >

              <div>
		      
                  <label>Title </label>
		      <input {...sendForm.register('title', {required: "название обязательно"})} placeholder="Название"/>
              </div>
              <div>
                  <label>Image </label>
		      <input type="file" {...sendForm.register('image', {required: "Контент обязателен"})} placeholder="image"/>
              </div>
              <div>
                  <label>Content </label>
		      <input {...sendForm.register('content', {required: "Контент обязателен"})} placeholder="Контент"/>
              </div>
          <div>

              <button type="submit">Sign up</button>
          </div>


	  </form>
	  </>
	)
}

export default PostForm
