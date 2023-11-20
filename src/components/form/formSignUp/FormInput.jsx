import PropTypes from 'prop-types'

function FormInput(inputProps) {
	const {
		nameId,
		description,
		type,
		name,
		value,
		placeholder,
		eventTag,
		eventBlur,
		icon
	} = inputProps
	return (
		<div className='relative w-4/5 text-xl mt-5'>
			<label
				htmlFor={nameId}
				className='absolute -top-7 left-1 text-dark900 font-poppins capitalize'>
				{description}
			</label>
			<input
				className='w-full h-10 pl-4 mb-2 text-base text-dark900 font-poppins rounded-md outline-none border border-martinique-200 transition-color duration-500 ease-in-out hover:border-martinique-600 focus:border-martinique-600 '
				type={type}
				id={nameId}
				name={name}
				value={value}
				placeholder={placeholder}
				required
				onChange={eventTag}
				onBlur={eventBlur}
			/>
			<img
				className='absolute top-2 right-2'
				src={icon}
				alt=''
			/>
		</div>
	)
}
FormInput.propTypes = {
	inputProps: PropTypes.shape({
		nameId: PropTypes.string,
		description: PropTypes.string,
		type: PropTypes.string,
		name: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		placeholder: PropTypes.string,
		eventTag: PropTypes.func,
		eventBlur: PropTypes.func,
		icon: PropTypes.string
	})
}

export default FormInput
