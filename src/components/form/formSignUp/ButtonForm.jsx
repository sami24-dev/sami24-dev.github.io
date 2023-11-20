import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'
function ButtonForm(buttonProps) {
	const {icon, content} = buttonProps
	return (
		<Link
			to='/'
			className='flex justify-center items-center gap-2 w-full mb-5 bg-transparent rounded-md border border-martinique-200 transition-color duration-500 ease-in-out hover:border-martinique-600'>
			<img
				className='w-6'
				src={icon}
				alt='logo'
			/>
			<h3 className='my-2 pt-1 text-dark900 font-poppins'>{content}</h3>
		</Link>
	)
}
ButtonForm.propTypes = {
	buttonProps: PropTypes.shape({
		icon: PropTypes.string,
		content: PropTypes.string.isRequired
	})
}

export default ButtonForm
