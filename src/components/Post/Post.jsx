import {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useUserContext} from '../../context/UserContext'
import {setUserPost, uploadPost} from '../../firebase/app'
function Post() {
	const {user} = useUserContext()
	const {uid} = user
	const [image, setImage] = useState({
		previewImage: '',
		uploadImage: '',
		typeImage: ''
	})

	const [post, setPost] = useState({
		descriptions: '',
		photo: ''
	})
	const {previewImage, uploadImage, typeImage} = image
	const {descriptions, photo} = post

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
	const fectchData = async () => {
		try {
			const results = await uploadPost(
				uploadImage,
				uid,
				'publications',
				typeImage,
				uuidv4()
			)
			setPost({...post, photo: results})
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (image) {
			fectchData()
		}
	}, [image])
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await setUserPost(descriptions, photo, uuidv4(), uid)
			console.log(res)
			// setComplete({...complete, result: res})

			setImage('')
			setPost({...post, descriptions: ''})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<header className='bg-white dark:bg-customBgLight relative  '>
			<h2 className='text-2xl pl-3 md:mt-2 text-left dark:text-customTextLight font-normal font-poppins'>
				Publish
			</h2>

			<textarea
				className='w-full h-12 md:h-19 py-3 px-6 rounded-md resize-none outline-none text-customTextDark font-poppins dark:bg-customBgLight dark:text-customTextLight'
				placeholder="What's on your mind?"
				name='descriptions'
				required
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
		</header>
	)
}
export default Post
