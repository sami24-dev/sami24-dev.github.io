/* eslint-disable react/prop-types */

import Close from '../iconComponent/Close'

function Modal({isOpen, onClose, children}) {
	return (
		isOpen && (
			<main className='fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center '>
				<section className='flex justify-center items-center relative w-1/2 rounded-md bg-light dark:bg-gray-900'>
					<span
						className='absolute top-[4%] right-[2%] text-xl cursor-pointer text-dark dark:text-light'
						onClick={onClose}>
						<Close />
					</span>
					{children}
				</section>
			</main>
		)
	)
}

export default Modal
