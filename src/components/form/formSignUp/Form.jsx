import {useEffect, useState} from 'react'
// react-router-dom
import {Link, useNavigate} from 'react-router-dom'
// UserContex
import {useUserContext} from '../../../context/UserContext'
// metodo-createUserWidthEmailAndPassword-firebase
import {register} from '../../../firebase/app'
// image-SVG
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
// components
import {Toaster, toast} from 'sonner'
import FormInput from './FormInput'
function Form({toogle}) {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password,} = form
	// navegar al home con el hook creado de context y el useNavigte si el usuario existe
	const navigate = useNavigate()
	const {user, setUser} = useUserContext()
	useEffect(() => {
		if (user) {
			navigate('/configUser')
		}
	}, [user])
	const isValidEmail = (email) => {
		// Puedes utilizar una expresión regular o alguna otra lógica para validar el correo electrónico
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!isValidEmail(email)) {
			toast.error('Correo electrónico no válido')
			return
		}

		if (password.length < 6) {
			toast.error('La contraseña debe tener al menos 6 caracteres')
			return
		}
		try {
			const CredentialUser = await register(email, password)
			setUser(CredentialUser)
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				toast.warning('El usuario ya existe')
			}
		}
	}
	const handleChange = (e) => {
		const {name, value} = e.target
		setForm({...form, [name]: value.trim()})
	}
	return (
		<section className={`toogle`}>
			<form
				className='flex justify-center items-center flex-col gap-3 w-96 min-h-max rounded-md shadow-xl dark:shadow-customShadowLight'
				onSubmit={handleSubmit}>
				<header className='w-4/5 text-center'>
					<h3 className='my-5 text-2xl text-dark900 dark:text-customTextLight'>
						Create Your Acount
					</h3>
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
						Sign Up
					</button>
					<hr className='w-full mt-5' />
					<Link
						className='text-center '
						to='/'>
						<h3 className='mt-2 mb-5 text-xl text-dark900 font-poppins dark:text-customTextLight'>
							Login
						</h3>
					</Link>
				</footer>
				<Toaster
					richColors
					position='bottom-right'
				/>
			</form>
		</section>
	)
}

export default Form
