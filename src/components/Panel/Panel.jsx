import Avatar from '../Avatar/Avatar'
import ImageAvatar from '../Avatar/ImageAvatar'
import UserName from '../Avatar/UserName'

function Panel() {
	return (
		<section className='w-full md:w-64 md:h-screen md:mx-1 bg-white dark:bg-customBgDark'>
			<header className='w-full h-40 bg-dark relative'>
				<img
					src=''
					alt=''
				/>
			</header>
			<div className='hidden md:block'>
				<Avatar />
			</div>
			<div className='md:hidden'>
				<article className='flex items-center justify-center flex-col gap-2 h-24'>
					<ImageAvatar />
					<UserName />
				</article>
			</div>
		</section>
	)
}
export default Panel
