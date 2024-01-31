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
			<main className='lg:flex lg:w-full lg:h-screen bg-customBgDark dark:bg-gray-900 rounded-md md:overflow-y-scroll lg:overflow-y-scroll px-2 md:px-0 lg:px-0 lg:py-2'>
				<section className='flex flex-col flex-1 bg-customBgDark md:overflow-y-scroll dark:bg-customBgDark rounded-md'>
					<FrontPage />
					<article className='flex flex-col justify-center items-center bg-customTextLight dark:bg-customBgDark rounded-md '>
						<About />
						<About />
						<About />
					</article>
				</section>
			</main>
			<aside className='bg-customBgDark dark:bg-gray-900 hidden md:block py-2 pr-2'>
				<Panel />
			</aside>
		</>
	)
}
