import {useEffect, useState} from 'react'
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
import google from '../../../assets/form/Google-Logo.png'
import apple from '../../../assets/form/apple.svg'
import FormInput from './FormInput'
import {Link, useNavigate} from 'react-router-dom'
import {register} from '../../../firebase/app'
import ButtonForm from './ButtonForm'
import {useUserContext} from '../../../context/UserContext'
function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password} = form
	const navigate = useNavigate()
	const {user} = useUserContext
	useEffect(() => {
		if (user) {
			navigate('/daskboard')
		}
	}, [user])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const CredentialUser = await register(email, password)
			console.log(CredentialUser)
		} catch (error) {
			const {code, message} = error
			console.log(code, message)
		}
	}
	const handleChange = (e) => {
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}
	return (
		<form
			className='flex justify-center items-center flex-col gap-3 w-96 min-h-max bg-martinique-50 shadow-lg rounded-md'
			onSubmit={handleSubmit}>
			<header className='w-4/5 text-center'>
				<h1 className='my-5 text-2xl text-martinique-700'>
					Create Your Acount
				</h1>
				<ButtonForm
					icon={google}
					content='Sign up with Google'
				/>
				<ButtonForm
					icon={apple}
					content='Sign up with Apple'
				/>
			</header>
			<FormInput
				type='email'
				name='email'
				value={email}
				eventTag={handleChange}
				nameId='email'
				icon={en}
				description='email'
				placeholder='Your email'
			/>
			<FormInput
				type='password'
				name='password'
				value={password}
				eventTag={handleChange}
				nameId='password'
				icon={look}
				description='password'
				placeholder='Your password'
			/>
			<footer className='w-4/5 '>
				<button
					className='w-full h-9 text-martinique-50 text-xl bg-martinique-950 rounded-md hover:martinique-700 active:martinique-700'
					type='submit'>
					Sign Up
				</button>
				<hr className='w-full mt-5' />
				<Link
					className='text-center text-xl text-martinique-700'
					to='/'>
					<h3 className='mt-2 mb-5'>Login</h3>
				</Link>
			</footer>
		</form>
	)
}

export default Form
