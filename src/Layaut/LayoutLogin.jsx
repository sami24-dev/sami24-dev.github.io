import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav/Nav'

function LayoutLogin() {
	return (
		<div className='flex flex-col'>
			<header>
				<Nav />
			</header>
			<main className='md:flex flex-row justify-center items-center w-full h-full overflow-auto md:overflow-hidden bg-light dark:bg-customBgDark'>
				<section className='flex flex-col w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 '>
					<p className='md:text-3xl text-dark900 md:text-pretty text-center md:text-start tracking-wide font-poppins mt-5 mx-5 md:mx-0 md:mt-0 md:mb-32 dark:text-customTextLight'>
						Bienvenidos a un espacio donde se unen la autenticidad y eficiencia
						para potenciar tu experiencia y éxito empresarial, si lo tuyo es el
						emprendimiento!! crear un monopolio con Shiftnet.
					</p>
				</section>
				<section className='flex justify-center items-center md:w-1/2'>
					<Outlet />
				</section>
			</main>
		</div>
	)
	/* In the business realm streamlines all aspect. Boost your sales by strategically promoting your products or services. Optimize your time
						eliminating crowds and long queues. our network becomes your essential ally for effective management, providing the convenience of scheduling
						appointments for your clients. In our community, connection goes beyond clicks. */
}

export default LayoutLogin
