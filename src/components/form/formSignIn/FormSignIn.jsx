import {useEffect, useState} from 'react'
// react-router-dom
import {Link, useNavigate} from 'react-router-dom'
// UserContex
import {useUserContext} from '../../../context/UserContext'
// image-SVG
import google from '../../../assets/form/Google-Logo.png'
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
// metodo-signInWithEmailAndPassword-firebase
import {login} from '../../../firebase/app'
// components
import ButtonForm from '../formSignUp/ButtonForm'
import FormInput from '../formSignUp/FormInput'

function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password} = form

	// navegar al home con el hook creado de context y el useNavigte si el usuario existe
	const navigate = useNavigate()
	const {user} = useUserContext()
	useEffect(() => {
		if (user) {
			navigate('/app')
		}
	}, [user])
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			// eslint-disable-next-line no-unused-vars
			const CredentialUser = await login(email, password)
		} catch (error) {
			/* const {code, message} = error; */
			console.log(error)
		}
	}
	const handleChange = (e) => {
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}
	return (
		<form
			className='flex justify-center items-center rounded-md flex-col gap-3 w-96 min-h-max shadow-xl dark:shadow-customShadowLight'
			onSubmit={handleSubmit}>
			<header className='w-4/5 text-center'>
				<h3 className='my-5 text-2xl text-dark900 font-poppins dark:text-customTextLight'>
					Sign in
				</h3>
				<ButtonForm
					icon={google}
					content='Sign in with Google'
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
					className='w-full h-9 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'
					type='submit'>
					Sign In
				</button>
				<hr className='w-full mt-5' />
				<Link
					className='text-center'
					to='/signUp'>
					<h3 className='mt-2 mb-5 text-dark900 text-xl font-poppins dark:text-customTextLight'>
						Register
					</h3>
				</Link>
			</footer>
		</form>
	)
}

export default Form
