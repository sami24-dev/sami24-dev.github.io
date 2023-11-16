import {useState} from 'react'
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
import google from '../../../assets/form/Google-Logo.png'
import apple from '../../../assets/form/apple.svg'
import FormInput from '../formSignUp/FormInput'
import {Link} from 'react-router-dom'
import {login} from '../../../firebase/app'
import ButtonForm from '../formSignUp/ButtonForm'

function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password} = form

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const CredentialUser = await login(email, password)
			console.log(CredentialUser)
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
			className='flex justify-center items-center flex-col gap-3 w-96 min-h-max bg-martinique-50 shadow-lg rounded-md'
			onSubmit={handleSubmit}>
			<header className='w-4/5 text-center'>
				<h1 className='my-5 text-2xl text-dark900'>Sign in</h1>
				<ButtonForm
					icon={google}
					content='Sign in with Google'
				/>
				<ButtonForm
					icon={apple}
					content='Sign in with Apple'
				/>
			</header>
			<FormInput
				type='email'
				nameTag='email'
				value={email}
				eventTag={handleChange}
				nameId='email'
				icon={en}
				description='email'
				placeholder='Your email'
			/>
			<FormInput
				type='password'
				nameTag='password'
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
					Sign In
				</button>
				<hr className='w-full mt-5' />
				<Link
					className='text-center text-xl text-martinique-700'
					to='/'>
					<h3 className='mt-2 mb-5'>Register</h3>
				</Link>
			</footer>
		</form>
	)
}

export default Form
