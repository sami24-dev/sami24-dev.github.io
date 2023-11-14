import Form from '../../components/form/Form';

function Login() {
	return (
		<main className='flex flex-row justify-center items-center w-full h-screen bg-martinique-50'>
			<section className='flex justify-center items-cente-r flex-col w-1/2 px-20'>
				<h1 className='text-5xl text-center mb-2 text-martinique-900'>
					SHIFTBOOK
				</h1>
				<p className='text-2xl text-martinique-800 font-semibold'>
					SHIFT te ayuda a compartir tu negocio y que puedan adquirir tu
					producto o servivio sin largas filas y sin perdida de tiempo
				</p>
			</section>
			<section className='flex justify-center items-center w-1/2'>
				<Form />
			</section>
		</main>
	);
}

export default Login;
