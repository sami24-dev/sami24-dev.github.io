/* eslint-disable react/prop-types */
function FormInput(props) {
	return (
		<div className='relative w-4/5 text-xl mt-5'>
			<label
				htmlFor={props.define}
				className='absolute -top-7 left-1 text-martinique-700 capitalize'>
				{props.description}
			</label>
			<input
				className='w-full h-10 rounded-md  outline-none text-base pl-2 border border-martinique-200 mb-2  hover:border-martinique-600 focus:border-martinique-600 '
				type={props.type}
				id={props.define}
				name={props.nameTag}
				value={props.value}
				placeholder={props.placeholder}
				required
				onChange={props.eventTag}
			/>
			<img
				className='absolute top-2 right-2'
				src={props.icon}
				alt=''
			/>
		</div>
	)
}
/* FormInput.prototype = {
	define: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
	nameTag: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	eventTag: PropTypes.func,
	icon: PropTypes.string
} */

export default FormInput
