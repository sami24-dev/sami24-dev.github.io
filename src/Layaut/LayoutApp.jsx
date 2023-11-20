import {Outlet, Navigate} from 'react-router-dom'
import {useUserContext} from '../context/UserContext'
import Sidebar from '../components/sidebar/Sidebar'

function LayoutApp() {
	const {user} = useUserContext()
	return (
		<>
			<Sidebar />
			{user ? <Outlet /> : <Navigate to='/' />}
			<aside className='md:block hidden'></aside>
		</>
	)
}

export default LayoutApp
