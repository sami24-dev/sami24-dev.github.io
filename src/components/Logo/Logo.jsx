import PropTypes from 'prop-types'
function Logo({classLogo}) {
	return (
		<h2 className='whitespace-nowrap top-8 left-6 pl-6 md:pl-0 text-2xl md:text-3xl text-dark900 tracking-wide font-poppins font-bold dark:text-customTextLight'>
			SHIFT<span className='text-light500'>NET.</span>
		</h2>
	)
}
Logo.propTypes = {
	classLogo: PropTypes.string
}
export default Logo
