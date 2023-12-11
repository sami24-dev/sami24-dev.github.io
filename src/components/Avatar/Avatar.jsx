import {doc, getDoc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
function Avatar() {
	const {user} = useUserContext()

	const [data, setData] = useState('')

	useEffect(() => {
		if (!data) {
			const getUser = async (params) => {
				const docRef = doc(db, 'usuarios', params)
				const docSnap = await getDoc(docRef)

				if (docSnap.exists()) {
					return setData(docSnap.data())
				} else {
					// docSnap.data() will be undefined in this case
					return setData('No such document!')
				}
			}

			getUser(user.uid)
		}
	}, [user])

	return (
		<article className='flex items-center justify-center px-4 md:pt-6 md:px-6'>
			<img
				alt='Avatar'
				width='40'
				height='40'
				className='aspect-square object-cover rounded-full md:w-13 md:h-13 bg-dark'
				src={data && data.photoProfile}
			/>
			<section className='ml-4 md:block hidden'>
				<article>
					<h6 className='block text-lg text-dark900 font-poppins font-semibold'>
						{data && data.name} <span>{data && data.lastName}</span>
					</h6>
					<span className='block text-sm font-poppins text-dark800'>
						{data && data.profession}
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
