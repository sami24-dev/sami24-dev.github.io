import iconAvatar from '../../assets/usuario.png'

function ImageAvatar(param) {
	const params = param

	return (
		<>
			<img
				className='aspect-square object-cover bg-dark shadow-md p-1 rounded-full md:w-14 md:h-14'
				src={
					params === null
						? iconAvatar
						: params?.param?.fotoPerfil === ''
						  ? iconAvatar
						  : params?.param?.fotoPerfil
				}
			/>
		</>
	)
}
export default ImageAvatar
