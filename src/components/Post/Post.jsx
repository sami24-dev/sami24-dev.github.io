// context user
import {useUserContext} from '../../context/UserContext'
// hook react
import {useEffect, useState} from 'react'
// funciones de firebase/app.js
import {setUserPost, uploadPost} from '../../firebase/app'
// biblioteca de uid unicos
import {Toaster, toast} from 'sonner'
import {v4 as uuidv4} from 'uuid'
function Post() {
	// estados
	const [post, setPost] = useState({
		descriptions: '',
		urlLink: false
	})
	const [image, setImage] = useState({
		previewImage: '',
		uploadImage: false,
		typeImage: ''
	})

	// destructuracion
	const {user} = useUserContext()
	const {uid} = user
	const {descriptions, urlLink} = post
	const {previewImage, uploadImage, typeImage} = image

	// funciones para detectar el cambio  en las entradas
	const handleChange = (e) => {
		const {name, value} = e.target
		setPost({...post, [name]: value})
	}

	const handleImage = (e) => {
		const file = e.target.files[0]
		const type = file.type
		if (file && file.type.substring(0, 5) === 'image') {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imageUrl = reader.result
				setImage({
					...image,
					previewImage: imageUrl,
					uploadImage: file,
					typeImage: type
				})
			}
			reader.readAsDataURL(file)
		}
	}

	// esta funcion sube la foto al servidor de firebase y me retorna la url de la foto
	const uploadPhotoPost = async () => {
		try {
			const results = await uploadPost(uploadImage, uid, typeImage, uuidv4())
			setPost({...post, urlLink: results})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (uploadImage) {
			uploadPhotoPost()
		}
	}, [uploadImage])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (descriptions === '' && urlLink === false) {
				toast.warning(
					'Ups que deseas publicar... Completa algunos de los campos'
				)
				return
			}
			const res = await setUserPost(descriptions, urlLink, uuidv4(), uid)
			console.log(res)
			// setComplete({...complete, result: res})

			setImage('')
			setPost({...post, descriptions: ''})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<header className='bg-white dark:bg-customBgLight relative'>
			<h2 className='text-2xl pl-3 md:mt-2 text-left dark:text-customTextLight font-normal font-poppins'>
				Publish
			</h2>

			<textarea
				className='w-full h-12 md:h-19 py-3 px-6 whitespace-pre-line rounded-md resize-none outline-none text-customTextDark font-poppins dark:bg-customBgLight dark:text-customTextLight'
				placeholder="What's on your mind?"
				name='descriptions'
				value={descriptions}
				onChange={handleChange}
			/>
			<label
				className='absolute top-2 right-1 cursor-pointer w-10 h-10 text-customTextDark dark:text-customTextLight'
				htmlFor='inputFiled'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<rect
						width='18'
						height='18'
						x='3'
						y='3'
						rx='2'
						ry='2'
					/>
					<circle
						cx='9'
						cy='9'
						r='2'
					/>
					<path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
				</svg>
			</label>
			<input
				className='hidden'
				accept='image/*'
				type='file'
				name=''
				id='inputFiled'
				onChange={handleImage}
			/>
			<img
				className='w-full h-auto cursor-pointer'
				src={previewImage}
			/>

			<button
				onClick={handleSubmit}
				className='w-full h-9 mt-2 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'>
				Publish
			</button>
			<Toaster
				richColors
				position='bottom-right'
			/>
		</header>
	)
}
export default Post
