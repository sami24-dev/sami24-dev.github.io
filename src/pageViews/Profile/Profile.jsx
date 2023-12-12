import {collection, getDocs, query, where} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Avatar from '../../components/Avatar/Avatar'
import Post from '../../components/Post/Post'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

export default function Component() {
	const [publications, setPublications] = useState('')
	const {user} = useUserContext()
	const {uid} = user
	const fechtData = async () => {
		try {
			const q = query(collection(db, 'publications'), where('uid', '==', uid))
			const querySnapshot = await getDocs(q)
			let response = []
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				response = {
					id: doc.data().id,
					descripcion: doc.data().descripcion,
					foto: doc.data().foto
				}
				console.log(response)
			})
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (!publications) {
			fechtData()
		}
	}, [publications])

	console.log(publications)
	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<section className='w-full md:w-64 md:h-screen md:mx-1 bg-white dark:bg-customBgDark'>
				<header className='w-full h-40 bg-dark relative'>
					<img
						src=''
						alt=''
					/>
				</header>
				<Avatar />
			</section>
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark'>
				<Post />
				<h2 className='mt-8 pl-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<div className='space-y-4 mt-4 overflow-auto'></div>
			</section>
		</main>
	)
}
