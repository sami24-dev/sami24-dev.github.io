import PropTypes from 'prop-types'
import imageUser from '../../../public/assets/usuario.png'
import {useDataDb} from '../../hooks/useDataDb'
function Avatar() {
	const {data} = useDataDb()
	return (
		<article className='flex justify-start items-center relative'>
			<div className='rounded-full  w-[15%] md:w-[18%] lg:w-[20%]  absolute bottom-5 lg:bottom-0 left-5 z-50'>
				<img
					className='rounded-full bg-dark object-cover w-[58px] h-[58px] lg:w-[169px] lg:h-[169px]'
					src={data?.urlAvatar ? data?.urlAvatar : imageUser}
				/>
			</div>
			<footer
				className={` flex flex-col justify-start items-start text-dark dark:text-light text-sm md:text-base font-poppins font-medium pl-[24%] mt-2`}>
				<h2 className='capitalize'>
					{data?.firstName} <span>{data?.lastName}</span>{' '}
				</h2>
				<h3 className='capitalize'>{data?.profession}</h3>
			</footer>
		</article>
	)
}
Avatar.propTypes = {
	classContainImg: PropTypes.string,
	classContent: PropTypes.string
}
export default Avatar
