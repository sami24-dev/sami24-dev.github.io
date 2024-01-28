import PropTypes from 'prop-types'

function FormInput({
	nameId,
	description,
	type,
	name,
	value,
	placeholder,
	eventTag,
	eventBlur,
	icon
}) {
	return (
		<div className='relative w-4/5 text-xl mt-5'>
			<label
				htmlFor={nameId}
				className='absolute -top-7 left-1  font-poppins capitalize dark:text-customTextLight'>
				{description}
			</label>
			<input
				className='appearance-none w-full h-10 pl-4 mb-2 text-base text-customTextDark font-poppins rounded-md outline-none border border-customBorderLight transition-colors duration-500 ease-in-out  hover:border-customBorderDark focus:border-customBorderDark dark:border-opacity-5 dark:!bg-customBgDark dark:hover:border-blue-zodiac-900 dark:text-customTextLight dark:focus:bg-customBgDark'
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
	nameId: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	eventTag: PropTypes.func,
	eventBlur: PropTypes.func,
	icon: PropTypes.string
}

export default FormInput
