/* eslint-disable react/no-unknown-property */
import {Link} from 'react-router-dom'

import {logout} from '../../firebase/app'
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
		<nav className='sticky z-50 top-0 w-full h-14 md:left-0 md:h-screen md:w-64 bg-customTextLight dark:bg-customBgDark text-white flex md:flex-col justify-between'>
			<div className='md:flex justify-center items-end hidden md:h-[16%]'>
				{/* <ImageAvatar
					classContain={'p-2 w-20 '}
					classImg={
						'w-full shadow-md p-1 rounded-full w-10 h-10 md:w-14 md:h-14 aspect-square object-cover bg-dark '
					}
				/> */}
				<h1 className='whitespace-nowrap top-8 left-6 pl-6 md:pl-0 text-2xl md:text-3xl text-dark900 tracking-wide font-poppins font-bold dark:text-customTextLight'>
					SHIFT<span className='text-violet-700'>NET.</span>
				</h1>
			</div>
			<ul className='flex md:flex-col justify-between overflow-x-auto'>
				<LinkSidebar
					svg={<IconHome />}
					content='Inicio'
				/>
				<LinkSidebar
					svg={<Publications />}
					content='Publicaciones'
				/>
				<LinkSidebar
					svg={<IconChat />}
					content='Mensajes'
				/>
				<LinkSidebar
					svg={<IconStore />}
					content='Mercadeo'
				/>
				<LinkSidebar
					svg={<IconFriends />}
					content='Amigos'
				/>
				<LinkSidebar
					svg={<IconSettings />}
					content='Configuracion'
				/>
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
					<span className='ml-4 md:block hidden text-nowrap'>
						Cerrar Seccion
					</span>
				</Link>
			</div>
		</nav>
	)
}

export default Sidebar
