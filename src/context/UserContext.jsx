import {useState, useContext, createContext, useEffect} from 'react'

// config firebase
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase/app'

const userContext = createContext()

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
	 
	const [user, setUser] = useState(false)

	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (user) => {
			console.log(user)
			setUser(user)
		})
		return unSuscribe
	}, [])

	return <userContext.Provider value={{user}}>{children}</userContext.Provider>
}

export const myUserContext = () => useContext(userContext)
