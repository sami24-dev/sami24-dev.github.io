import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {udaptePost, uploadPost} from '../../firebase/app'
import LinkCard from '../LinkCard/LInkCard'
import PencilIcon from '../sidebar/iconComponent/PencilIcon'

const Modal = (date) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState(date)
	const key = data.date.uuid
	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}
	const {user} = useUserContext()
	const {uid} = user
	const [image, setImage] = useState({
		previewImage: data.date.foto,
		uploadImage: false,
		typeImage: ''
	})

	const [post, setPost] = useState({
		updateDescriptions: data.date.descripcion,
		updatePhoto: ''
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
			updateImage()
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
				<section className='fixed z-50  top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-50 '>
					<article className='relative w-1/2 h-full overflow-auto bg-white p-8 rounded shadow-lg dark:bg-customBgDark'>
						<div className='flex justify-end gap-2 absolute top-1 right-1'>
							<button
								onClick={closeModal}
								className='h-10 p-2 text-customTextDark hover:text-customTextLight dark:text-customTextLight rounded-md font-poppins text-xl hover:bg-dark900 dark:hover:bg-customTextLight dark:hover:text-customTextDark transition-color duration-500 ease-in-out'>
								Cancel
							</button>
						</div>
						<header className='w-full h-[10%] relative flex justify-start items-center'>
							<h3 className='absolute top-2 left-2 whitespace-nowrap text-2xl md:text-4xl text-dark900 tracking-wide font-poppins font-bold dark:text-customTextLight'>
								Shiftnet
							</h3>
						</header>
						<section className='w-full h-1/2'>
							<h2 className='text-base  font-poppins mb-4 dark:text-customTextLight'>
								Make your content shine even more. If you want to make changes
								or Add additional information to your post, follow these steps:
							</h2>

							<article className='w-full p-2 flex justify-between items-center gap-2'>
								<label
									className='cursor-pointer w-10 h-10 text-customTextDark dark:text-customTextLight'
									htmlFor='inputModal'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='38'
										height='38'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<rect
											width='20'
											height='20'
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
								<textarea
									className='appearance-none w-3/4 h-11 p-2 text-base  resize-none text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark capitalize focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
									type='text'
									value={updateDescriptions}
									name='updateDescriptions'
									onChange={handleChange}
								/>
								<input
									className='hidden'
									accept='image/*'
									type='file'
									name=''
									id='inputModal'
									onChange={handleImage}
								/>
								<button
									onClick={handleSubmit}
									className='box-border h-11 p-2 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'>
									Confirm
								</button>
							</article>
							<img
								className='rounded-md object-cover'
								src={previewImage}
							/>
						</section>
					</article>
				</section>
			)}
		</div>
	)
}

export default Modal
