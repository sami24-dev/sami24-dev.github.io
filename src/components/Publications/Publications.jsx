import {useState} from 'react'
import Avatar from '../Avatar/Avatar'
import ModalLogin from '../Modal/ModalLogin'
import Post from '../Post/Post'
function Publications() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<article className='flex flex-col w-[80%] p-5'>
				<div className='flex'>
					<Avatar
						classContainImg={
							'rounded-full dark:border dark:border-light500 w-12'
						}
						classImg={'rounded-full bg-dark object-cover'}
						classUser={'hidden'}
						classOcupation={'hidden'}
					/>
					<button onClick={openModal}>Crear publicación</button>
					<ModalLogin
						isOpen={isModalOpen}
						onClose={closeModal}>
						<Post />
					</ModalLogin>
				</div>
				<div></div>
			</article>
		</>
	)
}
export default Publications
