import {doc, getDoc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

function UserName(size) {
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
		<h6 className='block text-base text-dark900 whitespace-nowrap font-poppins font-normal'>
			{data && data.nombre} <span>{data && data.apellido}</span>
		</h6>
	)
}
export default UserName
