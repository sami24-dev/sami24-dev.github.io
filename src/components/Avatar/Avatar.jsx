import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import {useUserContext} from '../../context/UserContext'
import {getUserData} from '../../firebase/app'

function Avatar({classContainAvatar, classContainImg, classImg, classUser, classOcupation}) {
	const {user} = useUserContext()
	const [userB, setUserB] = useState()
	const [state, setState] = useState(true)
	const fechtData = async () => {
		try {
			if (user && state) {
				const result = await getUserData(user.uid)
				setUserB({...userB, result})
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (user && state) {
			fechtData()

			return () => {
				setState(false)
			}
		}
	}, [user, state])
	console.log(userB?.result)
	return (
		<article className={` ${classContainAvatar}`}>
			<div
				className={` ${classContainImg}`}>
				<img
					className={` ${classImg}`}
					src={userB?.result?.fotoPerfil}
				/>
			</div>
			<div className='md:flex md:flex-col md:justify-center items-start ml-4'>
				<h6
					className={` ${classUser}`}>
					{userB?.result?.nombre} <span>{userB?.result?.apellido}</span>
				</h6>
				<h5
					className={` ${classOcupation}`}>
					{userB?.result?.ocupacion}
				</h5>
			</div>
		</article>
	)
}
Avatar.propTypes = {
	classContainAvatar: PropTypes.string,
	classContainImg: PropTypes.string,
	classImg: PropTypes.string,
	classUser: PropTypes.string,
	classOcupation: PropTypes.string
}
export default Avatar
