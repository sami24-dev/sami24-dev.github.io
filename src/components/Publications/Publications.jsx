import {useState} from 'react'
import {useDataPost} from '../../hooks/useDataPost'
import Avatar from '../Avatar/Avatar'
import Modal from '../Modal/Modal'
import Post from '../Post/Post'
function Publications() {
	const {fechtData} = useDataPost()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<article className='flex justify-between items-center md:justify-start gap-x-4 px-5 w-full py-3 rounded-md bg-light dark:bg-customBgDark mb-2'>
				<Avatar
					classContainImg={
						'rounded-full dark:border-2 dark:border-light500 w-[48px] md:w-[58px]'
					}
					classImg={'rounded-full bg-dark object-cover'}
				/>

				<button
					className='flex items-center box-border w-[75%] px-3 py-2 lg:p-3 border border-blue-zodiac-500 font-poppins text-lg md:text-xl text-dark dark:text-light rounded-full md:hover:text-light md:hover:bg-light500 active:text-light500 md:active:bg-light500 transition-color duration-300 ease-in-out'
					onClick={openModal}>
					Crear Publicación
				</button>
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}>
					<Post
						open={fechtData}
						close={closeModal}
					/>
				</Modal>

				<div></div>
			</article>
		</>
	)
}
export default Publications
