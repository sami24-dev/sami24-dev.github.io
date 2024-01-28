/* eslint-disable react/prop-types */

function ModalLogin({isOpen, onClose, component}) {
	return (
		isOpen && (
			<section
				className='fixed z-10 top-0 left-0 w-full h-full bg-violet-900/10 flex justify-center items-center'
				onClick={onClose}>
				<article className='flex justify-center items-center p-10 relative w-1/2 rounded-md'>
					<span
						className='absolute top-[5%] right-[5%] text-xl cursor-pointer'
						onClick={onClose}>
						&times;
					</span>
					{component}
				</article>
			</section>
		)
	)
}

export default ModalLogin
