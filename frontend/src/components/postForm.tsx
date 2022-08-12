import {useSendForm} from '../hooks/useSendForm'
import {useCreatePostMutation} from '../store/post.api'
import {useParams} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {useEffect} from 'react'
import {useEditPost} from '../hooks/useEditPost'

const PostForm = () => {
	const { id } = useParams()
	const [cookies, setCookies] = useCookies()
	const [createPost, {isLoading, isError, data: response, error}] = useCreatePostMutation({})
	const sendForm = useSendForm(createPost)
	const isEdit = useEditPost(sendForm.setValue)
	console.log(isEdit)

	return (

	  <>
	  <form onSubmit={sendForm.handleSubmit(sendForm.onSubmit)}>

              <div>
		      
                  <label>Title </label>
		      <input {...sendForm.register('title', {required: "название обязательно"})} placeholder="Название"/>
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
