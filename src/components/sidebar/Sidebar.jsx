/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'
import { logout } from '../../firebase/app'
import LinkSidebar from './LinkSidebar'
import IconChat from './iconComponent/IconChat'
import IconFriends from './iconComponent/IconFriends'
import IconHome from './iconComponent/IconHome'
import IconSettings from './iconComponent/IconSettings'
import IconStore from './iconComponent/IconStore'
import Publications from './iconComponent/Publications'
function Sidebar() {
	const handleLogaut = async () => {
		try {
			await logout()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<nav className='sticky top-0 w-full h-14 md:left-0 md:h-screen md:w-64 dark:bg-customBgDark text-white flex md:flex-col justify-between'>
			<article className='flex items-center justify-center px-4 md:pt-6 md:px-6'>
				<img
					alt='Avatar'
					className='rounded-full md:w-13 md:h-13 bg-dark'
					height='40'
					src={Avatar}
					style={{
						aspectRatio: '40/40',
						objectFit: 'cover'
					}}
					width='40'
				/>
				<section className='ml-4 md:block hidden'>
					<article>
						<span className='block text-lg text-dark900 font-poppins font-semibold'>
							Jack Parrows
						</span>
						<span className='block text-sm font-poppins text-dark800'>
							Pirata
						</span>
					</article>
					<article className='flex items-center gap-1'>
						<span className='font-medium text-zinc-500 dark:text-zinc-400'>
							1.5k
						</span>
						<span className='text-zinc-500 dark:text-zinc-400'>followers</span>
					</article>
				</section>
			</article>

			<ul className='flex md:flex-col justify-between overflow-x-auto'>
				<li>
					<LinkSidebar
						svg={<IconHome />}
						content='Dashboard'
					/>
				</li>
				<li>
					<LinkSidebar
						svg={<Publications />}
						content='Publications'
					/>
				</li>
				<li>
					<LinkSidebar
						svg={<IconChat />}
						content='Messages'
					/>
				</li>
				<li>
					<LinkSidebar
						svg={<IconStore />}
						content='Store'
					/>
				</li>
				<li>
					<LinkSidebar
						svg={<IconFriends />}
						content='Friends'
					/>
				</li>
				<li>
					<LinkSidebar
						svg={<IconSettings />}
						content='Settings'
					/>
				</li>
			</ul>
			<div>
				<Link
					onClick={handleLogaut}
					className='flex items-center p-4 mb-1 font-poppins text-xl text-dark dark:text-light rounded-md md:hover:text-light md:hover:bg-light500 active:bg-light500 transition-color duration-300 ease-in-out'
					href='#'>
					<svg
						className='w-6 h-6'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
						<polyline points='16 17 21 12 16 7' />
						<line
							x1='21'
							x2='9'
							y1='12'
							y2='12'
						/>
					</svg>
					<span className='ml-4 md:block hidden'>Logout</span>
				</Link>
			</div>
		</nav>
	)
}

export default Sidebar
