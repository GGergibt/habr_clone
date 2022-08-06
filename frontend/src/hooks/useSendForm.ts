import {useForm} from 'react-hook-form'

export const useSendForm = (sendForm: Function) => {
	const {register, formState: {errors}, handleSubmit, watch, reset} = useForm()

	const onSubmit = (data: any) => {
		sendForm(data)

		reset()

	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		watch
	}
}

