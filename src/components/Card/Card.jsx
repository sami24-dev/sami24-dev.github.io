import {deleteDoc, doc} from 'firebase/firestore'
import PropTypes from 'prop-types'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import ImageAvatar from '../Avatar/ImageAvatar'
import UserName from '../Avatar/UserName'
import LinkCard from '../LinkCard/LInkCard'
import Modal from '../Modal/Modal'
import TrashIcon from '../sidebar/iconComponent/TrashIcon'

function Card(params) {
	const {param, open} = params
	const {user} = useUserContext()

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
	return (
		<>
			<header className='relative flex justify-between flex-col w-full h-full'>
				<div className='flex'>
					<div className='flex flex-row-reverse md:flex-row absolute top-1 right-1 md:top-2 md:right-2'>
						<LinkCard
							svg={<TrashIcon />}
							handleFunc={() => {
								deleteData(user, param.id)
							}}
						/>
						<Modal
							date={param}
							udapte={open}
						/>
					</div>
					<div className='flex items-center gap-3 absolute md:top-2 md:left-2'>
						<ImageAvatar
							classContain={'absolute top-10 p-2 w-20'}
							classImg={
								'w-full shadow-md p-1 rounded-full w-10 h-10 md:w-14 md:h-14 aspect-square object-cover'
							}
						/>
						<UserName />
					</div>
				</div>
				<div className='flex justify-start items-center py-8 px-4 '>
					<p className='flex mt-2 text-xl text-customTextDark dark:text-customTextLight whitespace-pre-line'>
						{param.descripcion.length > 40
							? `${param.descripcion.substring(0, 40)}...`
							: param.descripcion}
					</p>
				</div>
			</header>
			<footer className='md:flex-shrink-0 md:h-full'>
				<img
					className='h-48 w-full md:aspect-square object-cover md:h-full md:w-48'
					src={param.foto}
					alt='image'
					width='500'
					height='300'
				/>
			</footer>
		</>
	)
}
Card.propTypes = {
	param: PropTypes.object.isRequired,
	open: PropTypes.func.isRequired
}
export default Card
