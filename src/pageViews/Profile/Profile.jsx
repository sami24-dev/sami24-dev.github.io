/* import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app' */
import Card from '../../components/Card/Card'
import Panel from '../../components/Panel/Panel'
import Publications from '../../components/Publications/Publications'
import FrontPage from '../../components/frontPage/FrontPage'
import {useDataPost} from '../../hooks/useDataPost'
import '../../scroll.css'

function Profile() {
	const {post, fechtData} = useDataPost()
	return (
		<>
			<main className='lg:flex flex-col lg:w-full lg:h-screen rounded-md px-2 md:px-0 lg:px-0 lg:py-2'>
				<section className='box md:overflow-y-scroll'>
					<FrontPage />
					<Publications />
					{post &&
						post.map((subArray) =>
							subArray.map((obj) => {
								return (
									<article
										key={obj.id}
										className='flex flex-col
												w-full mb-2 rounded-md overflow-hidden bg-light dark:bg-customBgDark relative'>
										<Card
											param={obj}
											open={fechtData}
										/>
									</article>
								)
							})
						)}
				</section>
			</main>
			<aside className='bg-customBgDark dark:bg-gray-900 hidden md:block pr-2 py-2'>
				<Panel />
			</aside>
		</>
	)
}
export default Profile
