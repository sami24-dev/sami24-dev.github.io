import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useUserContext } from "../context/UserContext"
import { db } from "../firebase/app"

export function useDataDb() {
    const [data, setData] = useState(false)
    const {user} = useUserContext()
    const {uid} = user
  
    const fechtData = async () => {
        try {
            const docRef = doc(db, 'DATA-USUARIOS', uid)
            const docSnap = await getDoc(docRef)
            setData(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fechtData()
    }, [])

    return {data}

}