import {doc, getDoc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import IconAvatar from '../../assets/usuario.png'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
function ImageAvatar(image) {
	const [data, setData] = useState(null)
	const {user} = useUserContext()
	const fechtData = async () => {
		try {
			const docRef = doc(db, 'usuarios', user.uid)
			const docSnap = await getDoc(docRef)
			if (docSnap.exists()) {
				return setData(docSnap.data())
			} else {
				// docSnap.data() will be undefined in this case
				return setData('No such document!')
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (data == null) {
			fechtData()
		}
	}, [data])

	return (
		<>
			<img
				className='aspect-square object-cover bg-dark shadow-md p-1 rounded-full md:w-14 md:h-14'
				src={
					data === null
						? IconAvatar
						: data.fotoPerfil === ''
						  ? IconAvatar
						  : data.fotoPerfil
				}
			/>
		</>
	)
}
export default ImageAvatar
