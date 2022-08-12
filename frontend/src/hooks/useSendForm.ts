import {useForm} from 'react-hook-form'

export const useSendForm = (sendForm: Function) => {
	const {register, formState: {errors}, handleSubmit, watch, reset, setValue} = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
		sendForm(data)


		reset()

	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		watch,
		setValue
	}
}

