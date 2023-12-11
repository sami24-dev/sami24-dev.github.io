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
function ConfigUser() {
	// estados
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		photo: '',
		profession: ''
	})
	const [avatar, setAvatar] = useState({
		previewAvatar: User,
		uploadAvatar: '',
		typeAvatar: ''
	})
	const [complete, setComplete] = useState({
		result: null
	})
	// destructuracion
	const {firstName, lastName, photo, profession} = userData
	const {previewAvatar, uploadAvatar, typeAvatar} = avatar
	const {result} = complete
	const {user} = useUserContext()
	const {uid, email} = user

	const navigate = useNavigate()

	const handleChange = (e) => {
		const {name, value} = e.target
		setUserData({...userData, [name]: value})
	}

	const handleAvatar = (e) => {
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
	const fectchData = async () => {
		try {
			const results = await uploadFile(uploadAvatar, uid, typeAvatar)
			setUserData({...userData, photo: results})
			console.log(userData)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (avatar) {
			fectchData()
		}
	}, [avatar])
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await setUserDb(
				email,
				lastName,
				firstName,
				photo,
				profession,
				uid
			)
			setComplete({...complete, result: res})
		} catch (error) {
			console.log(error.code)
		}
	}

	useEffect(() => {
		if (result === undefined) {
			navigate('/app')
		}
	}, [result])

	return (
		<section className='flex justify-center items-center w-full h-screen'>
			<article className='w-[50%] min-h-[50%] rounded-md shadow-lg p-5'>
				<header className='flex flex-col space-y-1.5 px-6 pt-6'>
					<h3 className='tracking-tight text-lg font-medium font-poppins'>
						Profile Data Entry
					</h3>
					<p className='text-sm text-muted-foreground font-poppins'>
						Fill in your information and press save to update your profile.
					</p>
				</header>
				<form
					className='p-6'
					onSubmit={handleSubmit}>
					<div className='relative w-max text-xl mb-10'>
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
							onChange={handleAvatar}
						/>
					</div>
					<div className='relative w-4/5 text-xl mt-5'>
						<label
							htmlFor='firstName'
							className='absolute -top-7 left-1  font-poppins capitalize dark:text-customTextLight'>
							FirstName
						</label>
						<input
							className='appearance-none w-1/2 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark capitalize focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
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
							className='appearance-none w-1/2 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
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
							className='appearance-none w-1/2 h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
							type='text'
							id='profession'
							name='profession'
							required
							value={profession}
							onChange={handleChange}
						/>
					</div>
					<button
						className='w-full h-9 mt-2 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'
						type='submit'>
						Save
					</button>
				</form>
			</article>
		</section>
	)
}
export default ConfigUser
