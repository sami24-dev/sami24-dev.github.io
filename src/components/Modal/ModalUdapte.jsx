import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import {Toaster, toast} from 'sonner'
import {useUserContext} from '../../context/UserContext'
import {udaptePost, uploadPost} from '../../firebase/app'
import '../../scroll.css'
import LinkCard from '../LinkCard/LInkCard'
import Logo from '../Logo/Logo'
import IconImage from '../iconComponent/IconImage'
import PencilIcon from '../iconComponent/PencilIcon'
const ModalUdapte = (props) => {
	// eslint-disable-next-line react/prop-types
	const {date, udapte} = props
	const [modalIsOpen, setModalIsOpen] = useState(false)
	// eslint-disable-next-line no-unused-vars
	const key = date.uuid
	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}
	const {user} = useUserContext()
	const {uid} = user
	const [image, setImage] = useState({
		previewImage: date.foto,
		uploadImage: false,
		typeImage: ''
	})

	const [post, setPost] = useState({
		updateDescriptions: date.descripcion,
		updatePhoto: date.foto
	})
	const {previewImage, uploadImage, typeImage} = image
	const {updateDescriptions, updatePhoto} = post

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
	const updateImage = async () => {
		try {
			const results = await uploadPost(uploadImage, uid, typeImage)
			setPost({...post, updatePhoto: results})
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (uploadImage) {
			toast.promise(updateImage, {
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
			const res = await udaptePost(updateDescriptions, updatePhoto, uid, key)
			console.log(res)
			// setComplete({...complete, result: res})

			setImage('')
			setPost({...post, descriptions: ''})
			udapte()
			closeModal()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<LinkCard
				svg={<PencilIcon />}
				handleFunc={openModal}
			/>

			{modalIsOpen && (
				<section className='fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-50'>
					<article className='relative w-full h-5/6 md:w-1/2 md:h-[90%] overflow-auto bg-white p-2 rounded shadow-lg dark:bg-gray-900'>
						<header className='flex justify-between items-center w-full bg-light dark:bg-customBgDark p-4 mb-2 rounded-md'>
							<Logo />
							<div className='flex items-center gap-x-5'>
								<button
									onClick={closeModal}
									className='h-11 p-2 text-customTextDark hover:text-customTextLight dark:text-customTextLight rounded-md font-poppins text-xl hover:bg-dark900 dark:hover:bg-customTextLight dark:hover:text-customTextDark transition-color duration-500 ease-in-out'>
									Cancelar
								</button>
								<button
									onClick={handleSubmit}
									className='box-border h-11 p-2 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'>
									Confirmar
								</button>
							</div>
						</header>
						<main className='bg-light dark:bg-customBgDark p-4 rounded-md w-full'>
							<p className='text-base  font-poppins mb-4 dark:text-customTextLight'>
								Haz que tu contenido brille aún más. Si desea realizar cambios o
								agregar información adicional a su publicación, siga estos
								pasos:
							</p>
							<div className='flex items-center gap-x-4 text-base text-dark dark:text-light font-poppins mb-4'>
								<label
									className='flex cursor-pointer w-10 h-10 text-customTextDark dark:text-customTextLight'
									htmlFor='inputFile'>
									<IconImage />
								</label>
								<span>Actualizar Imagen</span>
								<input
									className='hidden'
									accept='image/*'
									type='file'
									name=''
									id='inputFile'
									onChange={handleImage}
								/>
							</div>
							<div className='w-full flex justify-center items-start gap-2'>
								<textarea
									className='w-1/2 h-full p-2 text-base resize-none text-dark dark:text-light  font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark capitalize focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:focus:bg-customBgDark'
									type='text'
									value={updateDescriptions}
									name='updateDescriptions'
									onChange={handleChange}
								/>
								<div className='w-1/2'>
									<img
										className='rounded-md object-cover'
										src={previewImage}
									/>
								</div>
							</div>
						</main>
						<footer className='flex justify-end gap-2 absolute top-1 right-1'>
							<Toaster
								richColors
								position='top-right'
								expand={true}
								closeButton={true}
							/>
						</footer>
					</article>
				</section>
			)}
		</div>
	)
}
ModalUdapte.propTypes = {
	date: PropTypes.object.isRequired,
	udapte: PropTypes.func.isRequired
}
export default ModalUdapte
