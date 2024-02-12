// context user
import {useUserContext} from '../../context/UserContext'
// hook react
import {useEffect, useState} from 'react'
// funciones de firebase/app.js
import PropTypes from 'prop-types'
import {setUserPost, uploadPost} from '../../firebase/app'
// biblioteca de uid unicos
import {Toaster, toast} from 'sonner'
import {v4 as uuidv4} from 'uuid'
import IconImage from '../iconComponent/IconImage'
// eslint-disable-next-line react/prop-types
function Post({open, close}) {
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
			toast.promise(uploadPhotoPost, {
				loading: 'Cargando la imagen. Por favor, espera...',
				success: '¡La imagen se ha cargado con éxito!',
				error:
					'La conexión con el servidor se perdió durante la carga de la imagen. '
			})
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
			setPost({...post, descriptions: ''})
			open()
			close()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<article className='w-full h-full p-10'>
			<header className=''>
				<label
					className='flex gap-x-2 items-center text-dark dark:text-light font-poppins cursor-pointer'
					htmlFor='inputFiled'>
					<IconImage /> Agregar Imagen
				</label>
				<input
					className='hidden'
					accept='image/*'
					type='file'
					name=''
					id='inputFiled'
					onChange={handleImage}
				/>
			</header>
			<main className='flex flex-col lg:flex-row mt-5'>
				<textarea
					className='box w-full h-12 md:h-auto p-2 bg-transparent  rounded-md resize-none outline-none text-customTextDark font-poppins  dark:text-customTextLight'
					placeholder='¿Sobre que deseas hablar?'
					name='descriptions'
					value={descriptions}
					onChange={handleChange}
				/>

				<img
					className='w-64 h-auto cursor-pointer rounded-md'
					src={previewImage}
				/>
			</main>
			<footer className='w-full min-h-14 relative'>
				<button
					onClick={handleSubmit}
					className='w-max p-2 rounded-md font-poppins text-light text-xl bg-dark900 transition-color duration-500 ease-in-out hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800 absolute right-0 bottom-0'>
					Publish
				</button>
				<Toaster
					richColors
					position='top-center'
					expand={true}
					closeButton={true}
				/>
			</footer>
		</article>
	)
}
Post.propTypes = {
	open: PropTypes.func
}
export default Post
