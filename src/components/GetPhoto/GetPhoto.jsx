import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
// imagen
import {toast} from 'sonner'
import User from '../../assets/images/usuario.png'
import {useUserContext} from '../../context/UserContext'
import {uploadFile} from '../../firebase/app'
function GetPhoto({enviarDatosAlPadre}) {
	const [avatar, setAvatar] = useState({
		previewAvatar: User,
		uploadAvatar: false
	})

	const {previewAvatar, uploadAvatar} = avatar
	const {
		user: {uid}
	} = useUserContext()
	const handleChangeAvatar = (e) => {
		const file = e.target.files[0]
		if (file && file.type.substring(0, 5) === 'image') {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imageUrl = reader.result
				setAvatar({
					...avatar,
					previewAvatar: imageUrl,
					uploadAvatar: imageUrl.split(',')[1]
				})
			}
			reader.readAsDataURL(file)
		}
	}
	console.log(uploadAvatar)
	
	const UploadPhoto = async () => {
		try {
			const urlPhoto = await uploadFile(uploadAvatar, uid, 'PROFILE-PHOTO')
			enviarDatosAlPadre(urlPhoto)
		} catch (error) {
			console.log(error)
		}
	}

	/* console.log(urlAvatar) */
	useEffect(() => {
		if (uploadAvatar) {
			toast.promise(UploadPhoto, {
				loading: 'Cargando la imagen. Por favor, espera...',
				success: '¡La imagen se ha cargado con éxito!',
				error:
					'La conexión con el servidor se perdió durante la carga de la imagen. '
			})
		}
	}, [uploadAvatar])
	return (
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
				Ingresa tu foto de perfil
			</p>
		</div>
	)
}
GetPhoto.propTypes = {
	enviarDatosAlPadre: PropTypes.func
}
export default GetPhoto
