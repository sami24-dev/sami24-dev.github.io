import PropTypes from 'prop-types'
import {useUserContext} from '../../context/UserContext'
function UserName({classUser}) {
	const {userB} = useUserContext()
	return (
		<h6
			className={`block text-base capitalize text-customTextDark dark:text-customTextLight text-nowrap font-poppins font-normal ${classUser}`}>
			{userB?.nombre && userB?.nombre}{' '}
			<span>{userB?.apellido && userB?.apellido}</span>
		</h6>
	)
}
UserName.propTypes = {
	classUser: PropTypes.string
}
export default UserName
