import Logo from '../Logo/Logo'
import GitHub from '../sidebar/iconComponent/GitHub'
function Nav() {
	/* const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	} */
	return (
		<nav className='flex justify-between items-center px-10 py-4 bg-light'>
			<Logo />
			<ul className='flex items-center gap-x-5'>
				<li>
					<GitHub />
				</li>
				<li></li>
				<li></li>
			</ul>
		</nav>
	)
}
export default Nav
