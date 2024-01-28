import PropTypes from 'prop-types'

function BtnPrimary({body, onClick }) {
	return (
		<button onClick={onClick} className='w-full text-light font-poppins text-sm text-nowrap bg-dark900 transition-all duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800 p-2 md:hover:scale-105'>
			{body}
		</button>
	)
}
BtnPrimary.propTypes = {
	body: PropTypes.string.isRequired,
	onclick: PropTypes.func
}
export default BtnPrimary
