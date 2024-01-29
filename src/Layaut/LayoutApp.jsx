import {useEffect, useState} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useUserContext} from '../context/UserContext'

function LayoutApp() {
	const {user, userB} = useUserContext()
	const [state, setState] = useState()
	const getState = (params) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(params)
			}, 2000)
		})
	}
	useEffect(() => {
		getState(userB).then((res) => {
			setState(res)
		})
	}, [])
	console.log(state)

	return <>{!user ? <Navigate to='/' /> : <Outlet />}</>
}

export default LayoutApp
