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
	console.log('jj')
	console.log(error)


	return (

	  <>
	  <form encType="mutlipart/form-data" onSubmit={sendForm.handleSubmit(sendForm.onSubmit)} >

              <div>
		      
                  <label>Название </label>
		      <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('title', {required: "название обязательно"})} placeholder="Название"/>
              </div>
              <div>
                  <label>Изображение </label>
		      <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('image', {required: "Контент обязателен"})} placeholder="image"/>
              </div>
              <div>
                  <label>Контент</label>
		      <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('content', {required: "Контент обязателен"})} placeholder="Контент"/>
              </div>
          <div>

              <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Создать</button>
          </div>


	  </form>
	  </>
	)
}

export default PostForm
