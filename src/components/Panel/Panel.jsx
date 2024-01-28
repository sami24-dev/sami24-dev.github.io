import ImageAvatar from '../Avatar/ImageAvatar'
import UserName from '../Avatar/UserName'
import Portada from './portada.png'
function Panel() {
	return (
		<article className='flex flex-col justify-start items-center w-full md:w-64 md:h-screen md:mx-1 bg-customTextLight dark:bg-customBgDark relative'>
			<header className='w-full bg-dark relative'>
				<img
					src={Portada}
					alt=''
				/>
			</header>

			<ImageAvatar
				classContain={'absolute top-10 p-2 w-20'}
				classImg={
					'w-full shadow-md p-1 rounded-full w-10 h-10 md:w-14 md:h-14 aspect-square object-cover'
				}
			/>
			<UserName classUser={'absolute top-28'}/>
		</article>
	)
}
export default Panel
