import {useNavigate, useRouteError} from 'react-router-dom'
import Lun from '../../assets/NotFound/luna-llena.png'
import Court from '../../assets/NotFound/Frame.svg'
function NotFound() {
	const error = useRouteError()
	const navigate = useNavigate()
	const {data, statusText} = error
	const handleNavigate = () => {
		navigate(-1)
	}
	return (
		<section className='w-full h-screen bg-gradient-to-t from-light500 from-10% via-dark800 via-30% to-dark to-90% '>
			<article className='h-2/3 relative flex justify-center items-center gap-48'>
				<img
					className='w-36 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					src={Lun}
					alt='Lun'
				/>
				<img
					className='w-20 h-20 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'
					src={Court}
					alt=''
				/>
				<h4 className='text-12xl text-light400 font-Custom mt-16'>4</h4>
				<h4 className='text-12xl text-light400 font-Custom mt-16'>4</h4>
			</article>
			<article className='h-1/3 text-center'>
				<button
					onClick={handleNavigate}
					className='w-max p-4 text-2xl text-light font-poppins bg-dark900 transition-color duration-500 ease-in-out rounded-md hover:bg-dark active:bg-dark '
					to='/'>
					Back to Home
				</button>
				<p className='mt-8 text-light text-xl font-poppins'>
					Oops! <span className='text-dark'>{statusText}</span>
				</p>
				<p className='text-dark text-xl font-poppins'>{data}</p>
			</article>
		</section>
	)
}

export default NotFound
