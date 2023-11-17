import Sidebar from '../../components/sidebar/Sidebar'
/* import {useUserContext} from '../../context/UserContext' */
import {logout} from '../../firebase/app'

function HomePage() {
	const handleLogaut = async () => {
		try {
			await logout()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='flex w-full h-screen'>
			<Sidebar />
			<main>
				<h1>Ruta Protegida</h1>
				<button onClick={handleLogaut}>Logaut</button>
			</main>
		</div>
	)
}

export default HomePage
