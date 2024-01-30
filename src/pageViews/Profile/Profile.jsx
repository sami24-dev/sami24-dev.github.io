/* import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app' */
import About from '../../components/About/About'
import Panel from '../../components/Panel/Panel'
import FrontPage from '../../components/frontPage/FrontPage'
import './scroll.css'

export default function Component() {
	/* const [publications, setPublications] = useState(false)
	const [state, setState] = useState(true)
	const {user} = useUserContext()
	const {uid} = user

	const fechtData = async () => {
		try {
			const q = collection(db, uid)
			const date = await getDocs(q)
			setPublications(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
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
	}, [user, state]) */
	return (
		<>
			<main className='lg:flex lg:w-full h-screen bg-customBgDark dark:bg-gray-900 py-2 px-2 md:px-0 rounded-md'>
				<section className='flex flex-col flex-1 lg:max-w-full bg-customBgDark dark:bg-customBgDark overflow-y-auto rounded-md'>
					<section className='space-y-4 lg:overflow-auto bg-customTextLight dark:bg-customBgDark h-full rounded-md '>
						<FrontPage />
						<div className='p-2'>
							<About />
							<About />
							<About />
						</div>
					</section>
				</section>
			</main>
			<aside className='bg-customBgDark dark:bg-gray-900 p-2 hidden md:block'>
				<Panel />
			</aside>
		</>
	)
}
