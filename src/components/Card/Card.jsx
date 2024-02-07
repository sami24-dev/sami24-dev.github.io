import {deleteDoc, doc} from 'firebase/firestore'
import PropTypes from 'prop-types'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import {useDataDb} from '../../hooks/useDataDb'
import Avatar from '../Avatar/Avatar'
import LinkCard from '../LinkCard/LInkCard'
import ModalUdapte from '../Modal/ModalUdapte'
import TrashIcon from '../iconComponent/TrashIcon'

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

	return (
		<>
			<header className='relative flex justify-between flex-col w-full h-full'>
				<div className='flex justify-between pt-5 px-5'>
					<div className='flex justify-center items-center gap-x-2'>
						<Avatar
							classImg={
								'rounded-full md size-12 dark:border-2 dark:border-light500'
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
					<p className='flex my-4 text-xl text-customTextDark dark:text-customTextLight whitespace-pre-line'>
						{param.descripcion.length > 40
							? `${param.descripcion.substring(0, 40)}...`
							: param.descripcion}
					</p>
				</div>
				{param.foto === false ? (
					''
				) : (
					<img
						className='w-full h-auto aspect-square object-cover '
						src={param.foto}
						alt='image'
					/>
				)}
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
