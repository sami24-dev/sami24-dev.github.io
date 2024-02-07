// context user
import {useUserContext} from '../../../context/UserContext'
// hook react
import {useState} from 'react'
// funciones de app firebase
import {setDbFirebase} from '../../../firebase/app'
// react router dom
import {useNavigate} from 'react-router-dom'
// biblioteca sonner
import {Toaster, toast} from 'sonner'

import GetPhoto from '../../GetPhoto/GetPhoto'
import FormInput from '../formSignUp/FormInput'
function formDataPersonal() {
	const {
		user: {uid, email}
	} = useUserContext()
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		profession: '',
		email,
		urlAvatar: '',
		urlFrontPage: ''
	})

	const navigate = useNavigate()

	const {firstName, lastName, profession} = userData

	const handleChange = (e) => {
		const {name, value} = e.target
		setUserData({...userData, [name]: value})
	}
	const getDataPhoto = (props) => {
		setUserData({...userData, urlAvatar: props})
		console.log(props)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await setDbFirebase(userData, 'DATA-USUARIOS', uid)
			toast.success('Registro completado')
		} catch (error) {
			console.log(error.code)
		} finally {
			setTimeout(() => {
				navigate('/app')
			}, 2000)
		}
	}
	return (
		<form
			className='flex justify-center items-center rounded-md flex-col gap-3 w-4/5 md:w-96 border-2 border-light-500 p-2'
			onSubmit={handleSubmit}>
			<GetPhoto enviarDatosAlPadre={getDataPhoto} />
			<FormInput
				nameId={'firstName'}
				description={'Nombre'}
				name={'firstName'}
				type={'text'}
				value={firstName}
				eventTag={handleChange}
			/>
			<FormInput
				nameId={'lastName'}
				description={'Apellido'}
				name={'lastName'}
				type={'text'}
				value={lastName}
				eventTag={handleChange}
			/>
			<FormInput
				nameId={'profession'}
				description={'Ocupación'}
				name={'profession'}
				type={'text'}
				value={profession}
				eventTag={handleChange}
			/>
			<button
				className='w-full h-9 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'
				type='submit'>
				Guardar
			</button>
			<Toaster
				richColors
				position='top-center'
				expand={true}
			/>
		</form>
	)
}
export default formDataPersonal
