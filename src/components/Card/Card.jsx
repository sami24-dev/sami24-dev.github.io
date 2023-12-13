import {deleteDoc, doc} from 'firebase/firestore'
import {useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'
import ImageAvatar from '../Avatar/ImageAvatar'
import UserName from '../Avatar/UserName'
import LinkCard from '../LinkCard/LInkCard'
import Modal from '../Modal/Modal'
import TrashIcon from '../sidebar/iconComponent/TrashIcon'

function Card(param) {
	const {user} = useUserContext()
	// eslint-disable-next-line no-unused-vars
	const [params, setParams] = useState(param)
	// const Params = param
	const deleteData = async (uui, uuid) => {
		try {
			const document = doc(db, `${uui.uid}`, `${uuid}`)
			const respon = await deleteDoc(document)
			console.log(respon)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section className='h-80 text-card-foreground max-w-md mx-auto shadow-lg dark:shadow-sm rounded-md dark:shadow-customBorderDark overflow-hidden md:max-w-2xl flex flex-col md:flex-row md:h-60 md:justify-between md:items-center relative dark:bg-gray-900'>
			<header className='relative flex justify-between flex-col w-full h-full'>
				<div className='flex'>
					<div className='flex flex-row-reverse md:flex-row absolute top-1 right-1 md:top-2 md:right-2'>
						<LinkCard
							svg={<TrashIcon />}
							handleFunc={() => {
								deleteData(user, params.Key)
							}}
						/>
						<Modal date={params.param} />
					</div>
					<div className='flex items-center gap-3 absolute md:top-2 md:left-2'>
						<ImageAvatar />
						<UserName />
					</div>
				</div>
				<div className='flex justify-start items-center py-8 px-4 '>
					<p className='flex mt-2 text-xl text-customTextDark dark:text-customTextLight whitespace-pre-line'>
						{params.param.descripcion.length > 40
							? `${params.param.descripcion.substring(0, 40)}...`
							: params.param.descripcion}
					</p>
				</div>
			</header>
			<footer className='md:flex-shrink-0 md:h-full'>
				<img
					className='h-48 w-full md:aspect-square object-cover md:h-full md:w-48'
					src={params.param.foto}
					alt='image'
					width='500'
					height='300'
				/>
			</footer>
		</section>
	)
}
export default Card
