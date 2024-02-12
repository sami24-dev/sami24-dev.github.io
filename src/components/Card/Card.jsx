import {deleteDoc, doc} from 'firebase/firestore'
import PropTypes from 'prop-types'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import {useDataDb} from '../../hooks/useDataDb'
import ImgAvatar from '../Avatar/ImgAvatar'
import LinkCard from '../LinkCard/LInkCard'
import ModalUdapte from '../Modal/ModalUdapte'
import TrashIcon from '../iconComponent/TrashIcon'
import './card.css'
function Card({param, open}) {
	const {user} = useUserContext()
	const {data} = useDataDb()
	const deleteData = async (uui, uuid) => {
		try {
			const document = doc(db, `${uui.uid}`, `${uuid}`)
			const respon = await deleteDoc(document)
			console.log(respon)
			open()
		} catch (error) {
			console.log(error)
		}
	}
	function renderizarUsuario() {
		if (param.foto === 'false') {
			return ''
		} else {
			return (
				<img
					className='w-full h-auto aspect-square object-cover '
					src={param.foto}
					alt='image'
				/>
			)
		}
	}
	return (
		<>
			<header className='relative flex justify-between flex-col w-full h-full'>
				<div className='flex justify-between pt-5 px-5'>
					<div className='flex justify-center items-center gap-x-2'>
						<ImgAvatar
							classContainImg={
								'rounded-full dark:border-2 dark:border-light500 w-[48px] md:w-[58px]'
							}
						/>
						<h2 className='capitalize font-poppins text-dark dark:text-light text-lg'>
							{data.firstName}
							<span> {data.lastName}</span>
						</h2>
					</div>
					<div className='flex justify-center items-center'>
						<LinkCard
							svg={<TrashIcon />}
							handleFunc={() => {
								deleteData(user, param.id)
							}}
						/>
						<ModalUdapte
							date={param}
							udapte={open}
						/>
					</div>
				</div>
			</header>
			<main className=''>
				<div className='flex justify-start items-center px-4 '>
					<span className='my-4 text-xl text-customTextDark dark:text-customTextLight break-words lg:max-w-[650px]'>
						{param.descripcion}
					</span>
				</div>
				{renderizarUsuario()}
			</main>
			<footer className='md:flex-shrink-0 md:h-full '></footer>
		</>
	)
}
Card.propTypes = {
	param: PropTypes.object.isRequired,
	open: PropTypes.func.isRequired
}
export default Card
