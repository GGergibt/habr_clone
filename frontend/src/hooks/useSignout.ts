import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";

export const useSignout = () => {
	const [cookies, setCookeis, removeCookies] = useCookies()
    	const navigate = useNavigate()
	const signout = () => {
		removeCookies('token')
		navigate("/")

	}


	return signout
	




}

