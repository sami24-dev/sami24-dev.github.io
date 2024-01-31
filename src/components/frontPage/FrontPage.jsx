import Avatar from '../Avatar/Avatar'
import Portada from './portada.png'
function FrontPage() {
	return (
		<>
			<header className='w-full h-[30%] min-h-[200px] lg:h-1/2  lg:min-h-[350px] relative bg-customTextLight dark:bg-customBgDark rounded-md mb-2'>
				<div>
					<img
						className='object-cover aspect-auto rounded-tl-md rounded-tr-md'
						src={Portada}
						alt=''
					/>
				</div>
				<Avatar
					classContainAvatar={
						'flex justify-start items-end gap-1 px-4 mt-[-7%] md:mt-[-10%] lg:mt-[-10%]'
					}
					classContainImg={
						'rounded-full dark:border dark:border-light500 w-[15%] md:w-[18%] lg:w-[20%] dark:border dark:border-blue-zodiac-500'
					}
					classImg={'rounded-full bg-dark object-cover'}
					classUser={'hidden'}
					classOcupation={'hidden'}
				/>
				<div className='flex flex-col justify-start items-start  pl-[23%] py-2 mt-[-8%] font-poppins text-dark dark:text-light font-medium'>
					<h2>Samir gonzalez</h2>
					<h3>Developer Frontend</h3>
				</div>
			</header>
		</>
	)
}
export default FrontPage
