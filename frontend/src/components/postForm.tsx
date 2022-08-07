import {useSendForm} from '../hooks/useSendForm'


import {useCreatePostMutation} from '../store/post.api'

const PostForm = () => {
	const [createPost, {isLoading, isError, data: response, error}] = useCreatePostMutation({})
	const sendForm = useSendForm(createPost)
	console.log(error)

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
