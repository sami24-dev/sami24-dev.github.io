// context user
import {useUserContext} from '../../context/UserContext'
// hook react
import {useState} from 'react'
// funciones de app firebase
import {setUserDb} from '../../firebase/app'
// react router dom
import {useNavigate} from 'react-router-dom'
// biblioteca sonner
import {Toaster, toast} from 'sonner'

import GetPhoto from '../../components/GetPhoto/GetPhoto'
function ConfigUser() {
	// estados

	const [userData, setUserData] = useState({
		urlAvatar: '',
		firstName: '',
		lastName: '',
		profession: ''
	})
	// useNavigate react-router-dom
	const navigate = useNavigate()
	// destructuracion
	const {
		user: {uid, email}
	} = useUserContext()
	const {firstName, lastName, urlAvatar, profession} = userData
	// funciones para detectar el cambio  en las entradas
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
			await setUserDb(email, lastName, firstName, urlAvatar, profession, uid)
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
		<section className='flex justify-center items-center w-full h-full dark:bg-customBgDark'>
			<article className='flex justify-center items-center flex-col w-full h-full md:w-1/2 md:min-h-full rounded-md md:shadow-lg p-5'>
				<header className='flex flex-col space-y-1.5 px-6 pt-6'>
					<h3 className='tracking-tight text-lg text-center font-medium font-poppins dark:text-customTextLight'>
						Profile Data Entry
					</h3>
					<p className='text-base text-muted-foreground text-center font-poppins dark:text-customTextLight'>
						Fill in your information and press save to update your profile.
					</p>
				</header>
				<form
					className='flex justify-center items-center rounded-md flex-col gap-3 w-4/5 md:w-96 p-2 md:mt-3 shadow-xl dark:shadow-customShadowLight'
					onSubmit={handleSubmit}>
					<GetPhoto enviarDatosAlPadre={getDataPhoto} />
					<div className='relative w-4/5 text-xl mt-5'>
						<label
							htmlFor='firstName'
							className='absolute -top-7 left-1  font-poppins capitalize dark:text-customTextLight'>
							FirstName
						</label>
						<input
							className='appearance-none w-4/5 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark capitalize focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
							type='text'
							id='firstName'
							name='firstName'
							required
							value={firstName}
							onChange={handleChange}
						/>
					</div>
					<div className='relative w-4/5 text-xl mt-6'>
						<label
							htmlFor='lastName'
							className='absolute -top-7 left-1  font-poppins capitalize dark:text-customTextLight'>
							LastName
						</label>
						<input
							className='appearance-none w-4/5 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
							type='text'
							id='lastName'
							name='lastName'
							required
							value={lastName}
							onChange={handleChange}
						/>
					</div>
					<div className='relative w-4/5 text-xl mt-6'>
						<label
							htmlFor='profession'
							className='absolute -top-7 left-1  font-poppins capitalize dark:text-customTextLight'>
							Profession
						</label>
						<input
							className='appearance-none w-4/5 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
							type='text'
							id='profession'
							name='profession'
							required
							value={profession}
							onChange={handleChange}
						/>
					</div>
					<button
						className='w-full h-9 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'
						type='submit'>
						Save
					</button>
				</form>
				<Toaster
					richColors
					position='top-center'
					expand={true}
				/>
			</article>
		</section>
	)
}
export default ConfigUser
