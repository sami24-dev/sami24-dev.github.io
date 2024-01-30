import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function LinkSidebar(LinkProps) {
	const {svg, path, content} = LinkProps
	return (
		<li>
			<Link
				className='flex items-center p-4 md:p-3 lg:p-4 mb-1 font-poppins text-xl text-dark dark:text-light rounded-md md:hover:text-light md:hover:bg-light500 active:text-light500 md:active:bg-light500 transition-color duration-300 ease-in-out disabled:opacity-75  '
				to={path}>
				{svg}
				<span className='ml-4 md:block hidden'>{content}</span>
			</Link>
		</li>
	)
}
Link.propTypes = {
	LinkProps: PropTypes.shape({
		svg: PropTypes.element,
		path: PropTypes.string,
		content: PropTypes.string
	})
}
