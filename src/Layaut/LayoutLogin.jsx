import {Outlet} from 'react-router-dom'

function LayoutLogin() {
	return (
		<main className='flex flex-row justify-center items-center w-full h-screen bg-martinique-50'>
			<section className='flex flex-col w-1/2 px-20'>
				<h1 className='mb-6 text-5xl text-dark900 tracking-wide font-poppins font-bold'>
					Shiftbook
				</h1>
				<p className='text-2xl tracking-wide text-dark900 font-poppins mb-32'>
					{/* In the business realm streamlines all aspect. Boost your sales by
					strategically promoting your products or services. Optimize your time
					eliminating crowds and long queues. our network becomes your essential
					ally for effective management, providing the convenience of scheduling
					appointments for your clients. In our community, connection goes
					beyond clicks. */}{' '}
					Welcome to a space where authenticity and efficiency come together to
					enhance your experience and business success, if entrepreneurship is
					your thing!!create a monopoly with{' '}
					<span className='font-bold'>Shiftbook.</span>
				</p>
			</section>
			<section className='flex justify-center items-center w-1/2'>
				<Outlet />
			</section>
		</main>
	)
}

export default LayoutLogin
