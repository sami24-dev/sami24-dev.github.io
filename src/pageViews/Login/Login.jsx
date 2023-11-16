import {Outlet} from 'react-router-dom'

function Login() {
	return (
		<main className='flex flex-row justify-center items-center w-full h-screen bg-martinique-50'>
			<section className='flex justify-center items-cente-r flex-col w-1/2 px-20'>
				<h1 className='text-5xl text-center mb-2 text-martinique-900'>
					SHIFTBOOK
				</h1>
				<p className='text-2xl text-martinique-800 font-semibold'>
					SHIFT It helps you share your business and so that they can acquire
					your product or service without long lines and without loss of time.
				</p>
			</section>
			<section className='flex justify-center items-center w-1/2'>
				<Outlet />
			</section>
		</main>
	)
}

export default Login
