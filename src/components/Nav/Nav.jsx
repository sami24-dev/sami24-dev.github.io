import Logo from '../Logo/Logo'
import GitHub from '../iconComponent/GitHub'
function Nav() {
	return (
		<nav className='flex justify-between items-center px-10 py-4 bg-light dark:bg-customBgDark rounded-md'>
			<Logo />
			<ul className='flex items-center gap-x-5'>
				<li>
					<GitHub />
				</li>
			</ul>
		</nav>
	)
}
export default Nav
