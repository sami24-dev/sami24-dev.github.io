import {useUserContext} from '../../context/UserContext'
import ImageAvatar from './ImageAvatar'
import UserName from './UserName'
function Avatar() {
	const {userB} = useUserContext()

	return (
		<article className='flex flex-col items-center justify-center gap-1 px-4 md:pt-6 md:px-6'>
			<ImageAvatar />
			<section className='ml-4 md:block hidden'>
				<article className='md:flex md:flex-col'>
					<UserName datos={userB.nombre} />
					<span className='block text-sm capitalize font-poppins text-dark800'>
						{userB && userB.ocupacion}
					</span>
				</article>
				{/* <article className='flex items-center gap-1'>
					<span className='font-medium text-zinc-500 dark:text-zinc-400'>
						1.5k
					</span>
					<span className='text-zinc-500 dark:text-zinc-400'>followers</span>
				</article> */}
			</section>
		</article>
	)
}
export default Avatar
