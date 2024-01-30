import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import Panel from '../../components/Panel/Panel'
import Post from '../../components/Post/Post'
import Publications from '../../components/Publications/Publications'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import './scroll.css'
function Publication() {
    const [publications, setPublications] = useState(false)
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
	}, [user, state])
  return (
   <>
   <main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900 py-2  rounded-md'>
				<section className='flex flex-col flex-1 md:max-w-full bg-customBgDark dark:bg-customBgDark overflow-y-auto rounded-md'>
					<section className='space-y-4 md:overflow-auto bg-customTextLight dark:bg-customBgDark h-full rounded-md'>
                        <Publications/>
						<Post open={fechtData} />
						{publications &&
							publications.map((subArray) =>
								subArray.map((obj) => {
									return (
										<article
											key={obj.id}
											className='bg-white h-80 max-w-md mx-auto shadow-sm dark:shadow-sm rounded-md overflow-hidden md:max-w-2xl flex flex-col md:flex-row md:h-60 md:justify-between md:items-center relative dark:shadow-customBorderDark dark:bg-customBgDark'>
											<Card
												param={obj}
												open={fechtData}
											/>
										</article>
									)
								})
							)}
					</section>
				</section>
			</main>
			<aside className='bg-customBgDark dark:bg-gray-900  p-2'>
				<Panel />
			</aside>
   </>
  )
}
export default Publication