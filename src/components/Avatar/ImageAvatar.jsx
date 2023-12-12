import {doc, getDoc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
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
		if (!data) {
			fechtData()
		}
	}, [data])
	return (
		<>
			<img
				width='40'
				height='40'
				className='aspect-square object-cover rounded-full md:w-13 md:h-13 bg-dark'
				src={data && data.fotoPerfil}
			/>
		</>
	)
}
export default ImageAvatar
