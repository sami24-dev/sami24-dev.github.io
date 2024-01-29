import {useEffect, useState} from 'react'
// react-router-dom
import {useNavigate} from 'react-router-dom'
// UserContex
import {useUserContext} from '../../../context/UserContext'
// image-SVG
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
import google from '../../../assets/form/Google-Logo.png'
// metodo-signInWithEmailAndPassword-firebase
import {login} from '../../../firebase/app'
// components
import {toast, Toaster} from 'sonner'
import ButtonForm from '../formSignUp/ButtonForm'
import FooterForm from '../formSignUp/FooterForm'
import FormInput from '../formSignUp/FormInput'

function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password} = form

	// navegar al home con el hook creado de context si el usuario existe
	const navigate = useNavigate()
	const {user} = useUserContext()
	useEffect(() => {
		if (user) {
			navigate('/app')
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
			toast.error('Contraseña no válida')
			return
		}

		try {
			// eslint-disable-next-line no-unused-vars
			const CredentialUser = await login(email, password)
		} catch (error) {
			if (error.code === 'auth/invalid-login-credentials') {
				toast.warning('Has ingresado correo o contraseña invalida')
			}
		}
	}
	const handleChange = (e) => {
		const {name, value} = e.target
		setForm({...form, [name]: value.trim()})
	}
	return (
		<form
			className='flex justify-center items-center rounded-md flex-col gap-3 w-4/5 md:w-96 md:min-h-max shadow-xl dark:shadow-customShadowLight bg-light'
			onSubmit={handleSubmit}>
			<header className='w-4/5 text-center mt-5'>
				<h3 className='my-5 text-2xl text-dark900 font-poppins dark:text-customTextLight'>
					Cuenta de Ingreso
				</h3>
				<ButtonForm
					icon={google}
					content='iniciar sesión con Google'
				/>
			</header>
			<FormInput
				type='email'
				name='email'
				value={email}
				eventTag={handleChange}
				nameId='email'
				icon={en}
				description='Correo Electronico'
				placeholder='Correo Electronico'
			/>

			<FormInput
				type='password'
				name='password'
				value={password}
				eventTag={handleChange}
				nameId='password'
				icon={look}
				description='Contraseña'
				placeholder='Contraseña'
			/>
			<FooterForm
				BtnPrimary={'Iniciar Sesión'}
				BtnSecundary={'Registrarse'}
				rute={'/signUp'}
			/>
			<Toaster
				richColors
				position='bottom-right'
			/>
		</form>
	)
}

export default Form
