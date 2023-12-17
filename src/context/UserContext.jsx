import {createContext, useContext, useEffect, useState} from 'react'

// config firebase
import {onAuthStateChanged} from 'firebase/auth'
import {MutatingDots} from 'react-loader-spinner'
import {auth, getUserData} from '../firebase/app'
const userContext = createContext()

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
	const [user, setUser] = useState(false)
	const [userB, setUserB] = useState()
	const [state, setState] = useState(true)
	const fechtData = async () => {
		try {
			if (user && state) {
				const result = await getUserData(user.uid)
				setUserB(result)
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
		return unSuscribe
	}, [user])

	useEffect(() => {
		if (user && state) {
			fechtData()

			return () => {
				setState(false)
			}
		}
	}, [user, state])

	if (user === false)
		return (
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<MutatingDots
					height='100'
					width='100'
					color='#3b99f6'
					secondaryColor='#3b99f6'
					radius='12.5'
					ariaLabel='mutating-dots-loading'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			</div>
		)
	return (
		<userContext.Provider value={{user, userB}}>
			{children}
		</userContext.Provider>
	)
}
export const useUserContext = () => useContext(userContext)
