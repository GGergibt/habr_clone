import {useForm} from 'react-hook-form'
import { serialize } from 'object-to-formdata';

export const useSendForm = (sendForm: Function) => {
	const {register, formState: {errors}, handleSubmit, watch, reset, setValue} = useForm()

	const onSubmit = async (data: any) => {

		data.image = data.image && data.image[0]
		const formData = serialize(data)

		sendForm(formData)

		// reset()

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

