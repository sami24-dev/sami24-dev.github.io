import PropTypes from 'prop-types'
import imageUser from '../../../public/assets/usuario.png'
import {useDataDb} from '../../hooks/useDataDb'

function ImgAvatar({classContainImg}) {
	const {data} = useDataDb()
	return (
		<div className={`${classContainImg}`}>
			<img
				className='rounded-full bg-dark object-cover w-[58px] h-[58px]'
				src={data?.urlAvatar ? data?.urlAvatar : imageUser}
			/>
		</div>
	)
}
ImgAvatar.propTypes = {
	classContainImg: PropTypes.string,
	classContent: PropTypes.string
}
export default ImgAvatar
