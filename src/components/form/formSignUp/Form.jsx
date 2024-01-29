import {useEffect, useState} from 'react'
// react-router-dom
import {useNavigate} from 'react-router-dom'
// UserContex
import {useUserContext} from '../../../context/UserContext'
// metodo-createUserWidthEmailAndPassword-firebase
import {register} from '../../../firebase/app'
// image-SVG
import look from '../../../assets/form/cerrar.svg'
import en from '../../../assets/form/en.svg'
// components
import {Toaster, toast} from 'sonner'
import FooterForm from './FooterForm'
import FormInput from './FormInput'
function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const {email, password} = form
	// navegar al home con el hook creado de context y el useNavigte si el usuario existe
	const navigate = useNavigate()
	const {user, setUser} = useUserContext()
	useEffect(() => {
		if (user) {
			navigate('/app/configUser')
		}
	}, [user])
	const isValidEmail = (email) => {
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
						Crear Cuenta
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
				<FooterForm
					BtnPrimary={'Registrarse'}
					BtnSecundary={'Acceso'}
					rute={'/'}
				/>
				<Toaster
					richColors
					position='bottom-right'
				/>
			</form>
		</section>
	)
}

export default Form
