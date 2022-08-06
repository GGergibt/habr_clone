import {useState, useEffect} from 'react'
import {useLazySignUpQuery} from '../store/user.api'

import {IUser} from '../models/models'

import {useForm} from 'react-hook-form'

export const SignUpForm = () => {

	const [user, setUser] = useState({})
	const [fetchUser, {isLoading, isError, data}] = useLazySignUpQuery(user)
	//Судя по всему происходит какая то колизия переменных data в коде. лог отрабатывает при введении пароля в форме. Займись потом
	// console.log(data)

	const {register, formState: {errors, isValid}, handleSubmit, watch, reset} = useForm()

	const password = watch("password", "")
	const confirmPassword = watch("confirmPassword", "")

	const onSubmit = (data: any) => {
		fetchUser(data)

		reset()

	}

	return (
	  <>
	  <form onSubmit={handleSubmit(onSubmit)}>

          <div>
              <div>
		      
                  <label>Username </label>
		      <input {...register('username', {required: "Имя обязательно"})} placeholder="User Name"/>
              </div>
              <div>
                  <label>Email </label>
		      <input {...register('email', {required: "почта обязательна"})} type="email" id="email" placeholder="Email"/>
              </div>
              <div>
                  <label>Password </label>
		      <input {...register('password', {required: "Пароль обязателен"})} type="password"  id="password" placeholder="Password"/>
              </div>
                   <label>Confirm Password </label>
		  <input {...register('confirmPassword', {required: true, validate: value => value === password || "password do not match"})} type="password" id="confirmPassword" placeholder="Confirm Password"/>
          </div>
          <div>

              <button type="submit">Sign up</button>
          </div>

	  </form>
	  </>
	)
}

export default SignUpForm
