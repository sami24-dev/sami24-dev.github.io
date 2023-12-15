// context user
import {useUserContext} from '../../context/UserContext'
// hook
import {useEffect, useState} from 'react'
// imagen
import User from '../../assets/usuario.png'
// funciones de app firebase

import {setUserDb, uploadFile} from '../../firebase/app'
// react router dom
import {useNavigate} from 'react-router-dom'
import {Toaster, toast} from 'sonner'
function ConfigUser() {
	// estados
	const [avatar, setAvatar] = useState({
		previewAvatar: User,
		uploadAvatar: '',
		typeAvatar: ''
	})
	const [userData, setUserData] = useState({
		urlAvatar: '',
		firstName: '',
		lastName: '',
		profession: ''
	})

	// destructuracion
	const {user} = useUserContext()
	const {uid, email} = user
	const {firstName, lastName, urlAvatar, profession} = userData
	const {previewAvatar, uploadAvatar, typeAvatar} = avatar

	const navigate = useNavigate()

	const handleChange = (e) => {
		const {name, value} = e.target
		setUserData({...userData, [name]: value})
	}

	const handleChangeAvatar = async (e) => {
		const file = e.target.files[0]
		const type = file.type
		if (file && file.type.substring(0, 5) === 'image') {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imageUrl = reader.result
				setAvatar({
					...avatar,
					previewAvatar: imageUrl,
					uploadAvatar: file,
					typeAvatar: type
				})
			}
			reader.readAsDataURL(file)
		}
	}
	const UploadPhoto = async () => {
		try {
			const urlPhoto = await uploadFile(uploadAvatar, uid, typeAvatar)
			setUserData({...userData, urlAvatar: urlPhoto})
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (uploadAvatar && uploadAvatar !== '') {
			UploadPhoto()
		}
	}, [uploadAvatar])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await setUserDb(email, lastName, firstName, urlAvatar, profession, uid)
			navigate('/app')
		} catch (error) {
			console.log(error.code)
		} finally {
			toast.success('Registro completado')
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
					<div className='flex flex-col justify-center items-center relative w-full text-xl mt-4 mb-10'>
						<label
							className='bg-transparent rounded-md'
							htmlFor='userImg'>
							<img
								className='rounded-full w-36 h-36 cursor-pointer'
								src={previewAvatar}
								alt='User'
							/>
						</label>
						<input
							className='hidden'
							accept='image/*'
							type='file'
							id='userImg'
							onChange={handleChangeAvatar}
						/>
						<p className='mt-2 text-base text-muted-foreground text-center font-poppins dark:text-customTextLight'>
							Enter your profile photo
						</p>
					</div>
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
					position='bottom-right'
				/>
			</article>
		</section>
	)
}
export default ConfigUser
