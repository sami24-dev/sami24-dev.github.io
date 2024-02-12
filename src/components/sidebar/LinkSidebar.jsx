/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function LinkSidebar({classLink, path, func, body, text}) {
	return (
		<li>
			<Link
				className={` ${classLink}`}
				to={path}
				onClick={func}>
				{body}
				<span className='ml-4 lg:block hidden'>{text}</span>
			</Link>
		</li>
	)
}
Link.propTypes = {
	classLink: PropTypes.string,
	path: PropTypes.string,
	func: PropTypes.func,
	body: PropTypes.element,
	text: PropTypes.string
}

export default LinkSidebar
