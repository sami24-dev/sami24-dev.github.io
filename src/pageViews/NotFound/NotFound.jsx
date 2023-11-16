import {Link, useRouteError} from 'react-router-dom'
import Lun from '../../assets/NotFound/luna-llena.png'
import Court from '../../assets/NotFound/Frame.svg'
function NotFound() {
	const error = useRouteError()
	const {data, statusText} = error
	return (
		<section className='w-full h-screen bg-gradient-to-t from-martinique-500 from-10% via-martinique-700 via-30% to-martinique-950 to-90% '>
			<article className='h-2/3 relative flex justify-center items-center gap-48'>
				<img
					className='w-36 h-36 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
					src={Lun}
					alt='Lun'
				/>
				<img
					className='w-20 h-20 absolute top-1/4 left-2/3 -translate-x-1/2 -translate-y-1/2'
					src={Court}
					alt=''
				/>
				<h4 className='text-12xl text-martinique-300 font-poppins mt-10'>4</h4>
				<h4 className='text-12xl text-martinique-300 font-poppins mt-10'>4</h4>
			</article>
			<article className='h-1/3 text-center'>
				<Link
					className='w-28 bg-martinique-950 text-martinique-50 text-2xl p-4 rounded-2xl '
					to='/'>
					Back to Home
				</Link>
				<p className='mt-8 text-martinique-950 text-xl'>
					<span className='text-martinique-50'>Oops!</span>{' '}
					<span>{statusText}</span>
				</p>
				<span>{data}</span>
			</article>
		</section>
	)
}

export default NotFound
