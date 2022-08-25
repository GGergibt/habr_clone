import {useSignUpMutation} from '../store/user.api'
import {useEffect} from 'react'

import {useSendForm} from '../hooks/useSendForm'

import {useCreateCookieToken} from '../hooks/useCreateCookie'

export const SignUpForm = () => {
	const [sendUser, {isLoading, isError, data: response, error}] = useSignUpMutation({})

	const sendForm = useSendForm(sendUser)
	const password = sendForm.watch("password", "")
	const confirmPassword = sendForm.watch("confirmPassword", "")


	const cookies = useCreateCookieToken(response)



	return (
	  <>
	  <form onSubmit={sendForm.handleSubmit(sendForm.onSubmit)}>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
		      
                  <label>Имя пользователя</label>
		      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('username', {required: "Имя обязательно"})} placeholder="UserName"/>
              </div>
              <div>
                  <label>Почта </label>
		      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('email', {required: "почта обязательна"})} type="email" id="email" placeholder="user@example.com"/>
              </div>
	      <div className="mb-6">

                  <label>Пароль </label>
		      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('password', {required: "Пароль обязателен"})} type="password"  id="password" placeholder="*********"/>
                   <label>Подтвердить пароль</label>
		  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...sendForm.register('confirmPassword', {required: true, validate: value => value === password || "password do not match"})} type="password" id="confirmPassword" placeholder="*********"/>
          </div>
          </div>
          <div>

              <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up</button>
          </div>

	  </form>
	  </>
	)
}

export default SignUpForm
