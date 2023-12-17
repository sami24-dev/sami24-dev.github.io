import {useUserContext} from '../../context/UserContext'

function UserName() {
	const {userB} = useUserContext()
	return (
		<h6 className='block text-base capitalize text-customTextDark dark:text-customTextLight whitespace-nowrap font-poppins font-normal'>
			{userB?.nombre && userB?.nombre}{' '}
			<span>{userB?.apellido && userB?.apellido}</span>
		</h6>
	)
}
export default UserName
