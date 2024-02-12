/* import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app' */
import {useState} from 'react'
import ImgAvatar from '../../components/Avatar/ImgAvatar'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import Panel from '../../components/Panel/Panel'
import Post from '../../components/Post/Post'
import FrontPage from '../../components/frontPage/FrontPage'
import {useDataPost} from '../../hooks/useDataPost'
import '../../scroll.css'
function Profile() {
	const {post, fechtData} = useDataPost()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<main className='lg:flex flex-col md:flex-col lg:w-full lg:h-screen rounded-md px-2 md:px-0 lg:px-0 lg:py-2'>
				<section className='box md:overflow-y-scroll'>
					<FrontPage />
					<article className='flex justify-between items-center md:justify-start gap-x-4 px-5 w-full py-3 rounded-md bg-light dark:bg-customBgDark mb-2 '>
						<ImgAvatar
							classContainImg={
								'rounded-full dark:border-2 dark:border-light500 w-[48px] md:w-[58px]'
							}
						/>
						<button
							className='flex items-center box-border w-[75%] px-3 py-2 lg:p-3 border border-blue-zodiac-500 font-poppins text-lg md:text-xl text-dark dark:text-light rounded-full md:hover:text-light md:hover:bg-light500 active:text-light500 md:active:bg-light500 transition-color duration-300 ease-in-out'
							onClick={openModal}>
							Crear Publicación
						</button>
						<Modal
							isOpen={isModalOpen}
							onClose={closeModal}>
							<Post open={fechtData} close={closeModal} />
						</Modal>

						<div></div>
					</article>
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
