import PropTypes from 'prop-types'
import {useDataDb} from '../../hooks/useDataDb'
function Avatar({classContainImg, classImg}) {
	const {data} = useDataDb()
	return (
		<div className={` ${classContainImg}`}>
			<img
				className={` ${classImg}`}
				src={data?.urlAvatar}
			/>
		</div>
	)
}
Avatar.propTypes = {
	classContainImg: PropTypes.string,
	classImg: PropTypes.string
}
export default Avatar
