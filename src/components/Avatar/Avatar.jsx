import {doc, getDoc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import ImageAvatar from './ImageAvatar'
import UserName from './UserName'
function Avatar() {
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
		<article className='flex items-center justify-center px-4 md:pt-6 md:px-6'>
			<ImageAvatar />
			<section className='ml-4 md:block hidden'>
				<article>
					<UserName />
					<span className='block text-sm capitalize font-poppins text-dark800'>
						{data && data.ocupacion}
					</span>
				</article>
				{/* <article className='flex items-center gap-1'>
					<span className='font-medium text-zinc-500 dark:text-zinc-400'>
						1.5k
					</span>
					<span className='text-zinc-500 dark:text-zinc-400'>followers</span>
				</article> */}
			</section>
		</article>
	)
}
export default Avatar
