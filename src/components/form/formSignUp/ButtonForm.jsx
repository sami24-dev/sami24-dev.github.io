import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {loginWithGoogle} from '../../../firebase/app'

function ButtonForm({icon, content}) {
	const handleLoginGoogle = (e) => {
		e.preventDefault()
		try {
			const response = loginWithGoogle()
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Link
			to='/'
			onClick={handleLoginGoogle}
			className='flex justify-center items-center gap-2 w-full mb-5 bg-transparent rounded-md border border-customBorderDark border-opacity-5 transition-colors duration-500 ease-in-out hover:border-customBorderDark '>
			<img
				className='w-6'
				src={icon}
				alt='logo'
			/>
			<h3 className='my-2 pt-1 text-dark900 font-poppins dark:text-customTextLight'>
				{content}
			</h3>
		</Link>
	)
}
ButtonForm.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string.isRequired
}

export default ButtonForm
