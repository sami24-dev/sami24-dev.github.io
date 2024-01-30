import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav/Nav'

function LayoutLogin() {
	return (
		<div className='flex flex-col bg-customBgDark dark:bg-gray-900 p-2'>
			<header className='rounded-md mb-2 dark:border dark:border-blue-500'>
				<Nav />
			</header>
			<main className='flex flex-col md:flex-row justify-center items-center w-full h-full overflow-auto md:overflow-hidden bg-light dark:bg-customBgDark rounded-md '>
				<section className='md:flex justify-center items-center w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 hidden'>
					<p className='md:text-3xl text-dark900 text-pretty md:text-start tracking-wide font-poppins mt-5 mx-5 md:mx-0 md:mt-0 dark:text-customTextLight'>
						Bienvenidos a un espacio donde se unen la autenticidad y eficiencia
						para potenciar tu experiencia y éxito empresarial, si lo tuyo es el
						emprendimiento!! crear un monopolio con Shiftnet.{' '}
						<span className='block md:hidden '>
							En el ámbito empresarial se agiliza todos los aspectos. Impulsa
							tus ventas promocionando estratégicamente tus productos o
							servicios. Optimiza tu tiempo eliminando aglomeraciones y largas
							colas. nuestra red se convierte en su aliado esencial para una
							gestión efectiva, brindándole la comodidad de programar citas para
							sus clientes. En nuestra comunidad, la conexión va más allá de los
							clics.
						</span>
					</p>
				</section>
				<section className='flex justify-center items-center w-full h-full md:w-1/2'>
					<Outlet />
				</section>
			</main>
		</div>
	)
	/*  */
}

export default LayoutLogin
