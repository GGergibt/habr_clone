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

          <div>
              <div>
		      
                  <label>Username </label>
		      <input {...sendForm.register('username', {required: "Имя обязательно"})} placeholder="User Name"/>
              </div>
              <div>
                  <label>Password </label>
		      <input {...sendForm.register('password', {required: "Пароль обязателен"})} type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div>

              <button type="submit">Войти</button>
          </div>

	  </form>
	  </>
	)
}

export default LoginForm
