import {useSignUpMutation} from '../store/user.api'

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

          <div>
              <div>
		      
                  <label>Username </label>
		      <input {...sendForm.register('username', {required: "Имя обязательно"})} placeholder="User Name"/>
              </div>
              <div>
                  <label>Email </label>
		      <input {...sendForm.register('email', {required: "почта обязательна"})} type="email" id="email" placeholder="Email"/>
              </div>
              <div>
                  <label>Password </label>
		      <input {...sendForm.register('password', {required: "Пароль обязателен"})} type="password"  id="password" placeholder="Password"/>
              </div>
                   <label>Confirm Password </label>
		  <input {...sendForm.register('confirmPassword', {required: true, validate: value => value === password || "password do not match"})} type="password" id="confirmPassword" placeholder="Confirm Password"/>
          </div>
          <div>

              <button type="submit">Sign up</button>
          </div>

	  </form>
	  </>
	)
}

export default SignUpForm
