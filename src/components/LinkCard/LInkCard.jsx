import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function LinkCard(LinkProps) {
	const {svg, handleFunc} = LinkProps

	return (
		<button
			onClick={handleFunc}
			className=' flex items-center p-2 mb-1 font-poppins text-xl text-dark  dark:text-light rounded-md md:hover:text-light md:hover:bg-light500 active:text-light500 md:active:bg-light500 transition-color duration-300 ease-in-out'>
			{svg}
		</button>
	)
}
Link.propTypes = {
	LinkProps: PropTypes.shape({
		svg: PropTypes.element,
		path: PropTypes.string,
		handleFunc: PropTypes.func
	})
}
