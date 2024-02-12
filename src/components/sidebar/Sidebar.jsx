import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../../firebase/app'
import Logo from '../Logo/Logo'
import IconChat from '../iconComponent/IconChat'
import IconFriends from '../iconComponent/IconFriends'
import IconHome from '../iconComponent/IconHome'
import IconSettings from '../iconComponent/IconSettings'
import IconStore from '../iconComponent/IconStore'
import Publications from '../iconComponent/Publications'
import LinkSidebar from './LinkSidebar'
function Sidebar() {
	const handleLogaut = async () => {
		try {
			await logout()
		} catch (error) {
			console.log(error)
		}
	}
	const handleClick = (e) => {
		e.preventDefault()
	}

	return (
		<nav className='sticky z-50 top-0 w-full h-14 lg:left-0 lg:h-full lg:w-56 bg-light dark:bg-customBgDark text-white flex lg:flex-col justify-between items-center rounded-md'>
			<div className='lg:flex justify-center items-end pl-5 lg:pl-0 lg:h-[16%] hidden md:block'>
				<Logo />
			</div>
			<ul className='flex lg:flex-col justify-between items-center lg:items-start overflow-x-auto'>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:mb-1 font-poppins text-xl text-dark dark:text-light rounded-md lg:hover:text-light lg:hover:bg-light500 active:text-light500 lg:active:bg-light500 transition-color duration-300 ease-in-out'
					}
					path={'/app'}
					body={<IconHome />}
					text='Inicio'
				/>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:lg:mb-1 font-poppins text-xl text-gray-300 dark:text-gray-700 rounded-md'
					}
					func={handleClick}
					body={<Publications />}
					text='Publicaciones'
				/>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:mb-1 font-poppins text-xl text-gray-300 dark:text-gray-700 rounded-md'
					}
					func={handleClick}
					body={<IconChat />}
					text='Mensajes'
				/>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:mb-1 font-poppins text-xl text-gray-300 dark:text-gray-700 rounded-md'
					}
					func={handleClick}
					body={<IconStore />}
					text='Mercadeo'
				/>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:mb-1 font-poppins text-xl text-gray-300 dark:text-gray-700 rounded-md'
					}
					func={handleClick}
					body={<IconFriends />}
					text='Amigos'
				/>
				<LinkSidebar
					classLink={
						'flex items-center p-4 lg:p-3 lg:p-4 lg:mb-1 font-poppins text-xl text-gray-300 dark:text-gray-700 rounded-md'
					}
					func={handleClick}
					body={<IconSettings />}
					text='Configuracion'
				/>
			</ul>
			<div>
				<Link
					onClick={handleLogaut}
					className='flex items-center p-4 mb-1 font-poppins text-xl text-dark dark:text-light rounded-md lg:hover:text-light lg:hover:bg-light500 active:bg-light500 transition-color duration-300 ease-in-out'
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
					<span className='ml-4 lg:block hidden text-nowrap'>
						Cerrar Seccion
					</span>
				</Link>
			</div>
		</nav>
	)
}

export default React.memo(Sidebar)
