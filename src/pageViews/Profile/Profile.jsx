import {collection, getDocs} from 'firebase/firestore'
import {useCallback, useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import Panel from '../../components/Panel/Panel'
import Post from '../../components/Post/Post'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

export default function Component() {
	const [publications, setPublications] = useState(false)
	const {user} = useUserContext()
	const {uid} = user
	const fechtData = useCallback(async () => {
		try {
			const q = collection(db, uid)
			const date = await getDocs(q)
			// console.log(date.docs.map((doc) =>{...doc.data(), id: doc.id}))
			setPublications(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
		} catch (error) {
			console.log(error)
		}
	}, [publications])
	useEffect(() => {
		if (!publications || publications) {
			fechtData()
		}
	}, [publications])

	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<Panel />
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark'>
				<Post />
				<h2 className='p-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<section className='pt-5 px-2 space-y-4 md:overflow-auto bg-customTextLight'>
					{publications &&
						publications.map((subArray) =>
							subArray.map((obj) => {
								return (
									<article
										key={obj.id}
										className='bg-white h-80 text-card-foreground max-w-md mx-auto shadow-lg dark:shadow-sm rounded-md overflow-hidden md:max-w-2xl flex flex-col md:flex-row md:h-60 md:justify-between md:items-center relative dark:shadow-customBorderDark dark:bg-gray-900'>
										<Card
											param={obj}
											state={publications}
										/>
									</article>
								)
							})
						)}
				</section>
			</section>
		</main>
	)
}
