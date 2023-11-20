import {useState, useContext, createContext, useEffect} from 'react'

// config firebase
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase/app'
import {MutatingDots} from 'react-loader-spinner'
const userContext = createContext()

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
	const [user, setUser] = useState(false)

	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
		return unSuscribe
	}, [user])

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
	return <userContext.Provider value={{user}}>{children}</userContext.Provider>
}
export const useUserContext = () => useContext(userContext)
