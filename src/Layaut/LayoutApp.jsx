import {Navigate, Outlet} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import {useUserContext} from '../context/UserContext'
import '../scroll.css'
function LayoutApp() {
	const {user} = useUserContext()

	return (
		<>
			<header className='bg-customBgDark dark:bg-gray-900 p-2'>
				<Sidebar />
			</header>
			{!user ? <Navigate to='/' /> : <Outlet />}
		</>
	)
}

export default LayoutApp
