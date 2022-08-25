import {useLazyLoginQuery} from '../store/user.api'

import {useSendForm} from '../hooks/useSendForm'
import {useCreateCookieToken} from '../hooks/useCreateCookie'


export const LoginForm = () => {
	const [login, {isLoading, isError, data: response, error}] = useLazyLoginQuery({})

	const sendForm = useSendForm(login)
	const cookies = useCreateCookieToken(response)

	return (
	  <>
	  <form onSubmit={sendForm.handleSubmit(sendForm.onSubmit)}>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
		      
                  <label>Username </label>
		      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('username', {required: "Имя обязательно"})} placeholder="User Name"/>
              </div>
              <div>
                  <label>Password </label>
		      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('password', {required: "Пароль обязателен"})} type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div className="flex items-start mb-6">

<button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Войти</button>

          </div>

	  </form>
	  </>
	)
}

export default LoginForm
