import {useUserContext} from '../context/UserContext'
import {Outlet, Navigate} from 'react-router-dom'

function Layaut() {
	const {user} = useUserContext()

	return user ? <Outlet /> : <Navigate to='/' />
}

export default Layaut
