import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
export default function LinkSidebar(LinkProps) {
	const {svg, path, content} = LinkProps
	return (
		<Link
			className='flex items-center p-4 mb-1 font-poppins text-xl text-dark  dark:text-light rounded-md md:hover:text-light md:hover:bg-light500 active:text-light500 md:active:bg-light500 transition-color duration-300 ease-in-out'
			to={path}>
			{svg}
			<span className='ml-4 md:block hidden'>{content}</span>
		</Link>
	)
}
Link.propTypes = {
	LinkProps: PropTypes.shape({
		svg: PropTypes.element,
		path: PropTypes.string,
		content: PropTypes.string
	})
}
