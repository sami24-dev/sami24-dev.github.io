import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'
function ButtonForm(buttonProps) {
	const {icon, content} = buttonProps
	return (
		<Link
			to='/'
			className='flex justify-center items-center gap-2 w-full bg-transparent rounded-md cursor-pointer text-martinique-700 border border-martinique-200 mb-5  hover:border-martinique-600'>
			<img
				className='w-6'
				src={icon}
				alt='logo'
			/>
			<h3 className='my-2 pt-1 '>{content}</h3>
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
