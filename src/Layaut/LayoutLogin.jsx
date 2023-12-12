import {Outlet} from 'react-router-dom'

function LayoutLogin() {
	return (
		<main className='md:flex flex-row justify-center items-center w-full h-full overflow-auto md:overflow-hidden bg-light dark:bg-customBgDark'>
			<section className='flex flex-col w-full md:w-1/2 md:px-20 mt-8 md:mt-0 '>
				<h1 className='whitespace-nowrap top-8 left-6 pl-6 md:pl-0 mb-6 text-2xl md:text-5xl text-dark900 tracking-wide font-poppins font-bold dark:text-customTextLight'>
					Shiftnet
				</h1>
				<p className='md:text-2xl text-dark900 text-center md:text-start tracking-wide font-poppins mt-5 mx-5 md:mx-0 md:mt-0 md:mb-32 dark:text-customTextLight'>
					{/* In the business realm streamlines all aspect. Boost your sales by
					strategically promoting your products or services. Optimize your time
					eliminating crowds and long queues. our network becomes your essential
					ally for effective management, providing the convenience of scheduling
					appointments for your clients. In our community, connection goes
					beyond clicks. */}{' '}
					Welcome to a space where authenticity and efficiency come together to
					enhance your experience and business success, if entrepreneurship is
					your thing!!create a monopoly with{' '}
					<span className='font-bold'>Shiftnet.</span>
				</p>
			</section>
			<section className='flex justify-center items-center md:w-1/2'>
				<Outlet />
			</section>
		</main>
	)
}

export default LayoutLogin
