import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useUserContext } from '../context/UserContext'
import { db } from '../firebase/app'


export function useDataPost () {
	const {user} = useUserContext()
	const {uid} = user
    const [post, setPost] = useState(false)

	const fechtData = async () => {
		try {
			const q = collection(db, uid)
			const date = await getDocs(q)
			setPost(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fechtData()
	}, [])
	
    return {post, fechtData}

}