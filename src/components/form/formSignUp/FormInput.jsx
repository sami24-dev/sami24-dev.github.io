import PropTypes from 'prop-types'

function FormInput(inputProps) {
	const {nameId, description, type, name, value, placeholder, eventTag, icon} =
		inputProps
	return (
		<div className='relative w-4/5 text-xl mt-5'>
			<label
				htmlFor={nameId}
				className='absolute -top-7 left-1 text-martinique-700 capitalize'>
				{description}
			</label>
			<input
				className='w-full h-10 rounded-md  outline-none text-base pl-4 border border-martinique-200 mb-2  hover:border-martinique-600 focus:border-martinique-600 '
				type={type}
				id={nameId}
				name={name}
				value={value}
				placeholder={placeholder}
				required
				onChange={eventTag}
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
		icon: PropTypes.string
	})
}

export default FormInput
