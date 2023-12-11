import {Navigate, Outlet} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import {useUserContext} from '../context/UserContext'

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
