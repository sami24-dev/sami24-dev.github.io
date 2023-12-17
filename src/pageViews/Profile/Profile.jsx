import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import Panel from '../../components/Panel/Panel'
import Post from '../../components/Post/Post'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

export default function Component() {
	const [publications, setPublications] = useState(false)
	const [state, setState] = useState(true)
	const {user} = useUserContext()
	const {uid} = user

	const handleChildrem = (active) => {
		setState(active)
	}
	const fechtData = async () => {
		try {
			if (user && state) {
				const q = collection(db, uid)
				const date = await getDocs(q)
				setPublications(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (user && state) {
			fechtData()
			return () => {
				setState(false)
			}
		}
	}, [user, state])
	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<Panel />
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark overflow-y-auto'>
				<Post open={handleChildrem} />
				<h2 className='p-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<section className='py-5 px-2 space-y-4 md:overflow-auto bg-customTextLight dark:bg-customBgDark'>
					{publications &&
						publications.map((subArray) =>
							subArray.map((obj) => {
								return (
									<article
										key={obj.id}
										className='bg-white h-80 max-w-md mx-auto shadow-sm dark:shadow-sm rounded-md overflow-hidden md:max-w-2xl flex flex-col md:flex-row md:h-60 md:justify-between md:items-center relative dark:shadow-customBorderDark dark:bg-customBgDark'>
										<Card
											param={obj}
											open={handleChildrem}
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
