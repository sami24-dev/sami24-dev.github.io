import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function FooterForm({BtnPrimary, BtnSecundary, rute}) {
	return (
		<footer className='w-4/5 '>
			<button
				className='w-full h-9 text-light font-poppins text-xl bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark dark:bg-blue-zodiac-800'
				type='submit'>
				{BtnPrimary}
			</button>
			<hr className='w-full mt-5' />
			<Link
				className='text-center'
				to={`${rute}`}>
				<h3 className='mt-2 mb-5 text-xl text-dark900 font-poppins dark:text-customTextLight'>
					{BtnSecundary}
				</h3>
			</Link>
		</footer>
	)
}
FooterForm.propTypes = {
	BtnPrimary: PropTypes.string,
	BtnSecundary: PropTypes.string,
	rute: PropTypes.string
}
export default FooterForm
