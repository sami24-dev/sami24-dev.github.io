import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import Panel from '../../components/Panel/Panel'
import Post from '../../components/Post/Post'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

export default function Component() {
	const [publications, setPublications] = useState()
	const {user} = useUserContext()
	const {uid} = user
	const fechtData = async () => {
		try {
			const q = collection(db, uid)
			const date = await getDocs(q)
			// console.log(date.docs.map((doc) =>{...doc.data(), id: doc.id}))
			setPublications(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (!publications) {
			fechtData()
		}
	}, [publications])
	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<Panel />
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark'>
				<Post />
				<h2 className='mt-8 pl-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<div className='space-y-4 mt-4 md:overflow-auto'>
					{publications &&
						publications.map((subArray) =>
							subArray.map((obj) => {
								return (
									<div key={obj.id}>
										<Card
											cons
											param={obj}
										/>
									</div>
								)
							})
						)}
				</div>
			</section>
		</main>
	)
}
