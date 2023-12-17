import iconAvatar from '../../assets/usuario.png'
import {useUserContext} from '../../context/UserContext'

function ImageAvatar() {
	const {userB} = useUserContext()

	return (
		<>
			<img
				className='aspect-square object-cover bg-dark shadow-md p-1 rounded-full w-10 h-10 md:w-14 md:h-14'
				src={
					userB === undefined
						? iconAvatar
						: userB?.fotoPerfil === ''
						  ? iconAvatar
						  : userB?.fotoPerfil
				}
			/>
		</>
	)
}
export default ImageAvatar
