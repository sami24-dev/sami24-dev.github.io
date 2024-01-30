import PropTypes from 'prop-types'
function Logo({classLogo}) {
	return (
		<h2
			className={`text-nowrap text-2xl md:text-3xl text-dark dark:text-light tracking-wide font-poppins font-bold dark:text-customTextLight${classLogo}`}>
			SHIFT<span className='text-light500'>NET.</span>
		</h2>
	)
}
Logo.propTypes = {
	classLogo: PropTypes.string
}
export default Logo
