import PropTypes from 'prop-types'
import iconAvatar from '../../assets/usuario.png'
import {useUserContext} from '../../context/UserContext'
function ImageAvatar({classContain, classImg}) {
	const {userB} = useUserContext()
	console.log(userB)
	return (
		<div className={`${classContain}`}>
			{/*  */}
			<img
				className={`bg-dark ${classImg}`}
				/*  */
				src={
					userB === undefined
						? iconAvatar
						: userB?.fotoPerfil === ''
						  ? iconAvatar
						  : userB?.fotoPerfil
				}
			/>
		</div>
	)
}
ImageAvatar.propTypes = {
	classContain: PropTypes.string,
	classImg: PropTypes.string
}
export default ImageAvatar
