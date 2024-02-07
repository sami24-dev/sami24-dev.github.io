import PropTypes from 'prop-types'
import Portada from './portada.png'
/* import {useEffect, useState} from 'react'
import {toast} from 'sonner'
import {useUserContext} from '../../context/UserContext'
import {uploadFile} from '../../firebase/app' */
function ImgFrontPage({enviarDatosAlPadre}) {
	/* 	const {
		user: {uid}
	} = useUserContext()
	const [frontPage, setFrontPage] = useState({
		previewFrontPage: Portada,
		uploadFrontPage: ''
	})

	const {previewFrontPage, uploadFrontPage} = frontPage

	const handleChangeFrontPage = (e) => {
		const file = e.target.files[0]
		if (file && file.type.substring(0, 5) === 'image') {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imageUrl = reader.result
				setFrontPage({
					...frontPage,
					previewFrontPage: imageUrl,
					uploadFrontPage: imageUrl.split(',')[1]
				})
			}
			reader.readAsDataURL(file)
		}
	}
	const UploadPhoto = async () => {
		try {
			const urlPhoto = await uploadFile(
				uploadFrontPage,
				uid,
				'FRONT-PAGE-PHOTO'
			)
			enviarDatosAlPadre(urlPhoto)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (uploadFrontPage) {
			toast.promise(UploadPhoto, {
				loading: 'Cargando la imagen. Por favor, espera...',
				success: '¡La imagen se ha cargado con éxito!',
				error:
					'La conexión con el servidor se perdió durante la carga de la imagen. '
			})
		}
	}, [uploadFrontPage]) */
	return (
		<header>
			<img
				className='object-cover aspect-auto rounded-tl-md rounded-tr-md'
				src={Portada}
				alt=''
			/>
		</header>
	)
}
ImgFrontPage.propTypes = {
	enviarDatosAlPadre: PropTypes.func
}

export default ImgFrontPage
