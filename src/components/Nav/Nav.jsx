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
		<nav className='flex justify-between items-center px-8 py-4 bg-light'>
			<h1 className='whitespace-nowrap top-8 left-6 pl-6 md:pl-0 text-2xl md:text-3xl text-dark900 tracking-wide font-poppins font-bold dark:text-customTextLight'>
				SHIFT<span className='text-violet-700'>NET.</span>
			</h1>
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
