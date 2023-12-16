function UserName(datos) {
	const userName = datos
	return (
		<h6 className='block text-base capitalize text-customTextDark dark:text-customTextLight whitespace-nowrap font-poppins font-normal'>
			{userName?.datos && userName?.datos?.nombre}{' '}
			<span>{userName?.datos && userName?.datos?.apellido}</span>
		</h6>
	)
}
export default UserName
