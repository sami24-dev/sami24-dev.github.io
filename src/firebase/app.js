// funcion inicializacion firebase
import { initializeApp } from 'firebase/app';
// funciones de autenticacion
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
// funciones del storage
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// funciones de las bases de datos 
import { doc, getFirestore, setDoc } from "firebase/firestore";




const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Conexiones
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)

// funciones de autenticacion
export const register = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password)
}
export const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
}
export const logout = () => {
	return signOut(auth)
}



// funcion de storage subir imagen
 
 export const uploadFile = async (file, uid, type) => {
	const storageRef = ref(storage, `${uid}/avatar/some-child`)
	const metaData = {
		contentType: type
	  };
	await uploadBytes(storageRef, file, metaData)
	const url = await getDownloadURL(storageRef)
	return url
 }

export const setUser = async (email, lastName, firstName, photo, profession, uid) => {
	// Add a new document with a generated id.
	try {
		const docRef = await setDoc(doc(db, 'usuarios', uid), {
			email,
			lastName,
			name: firstName,
			photoProfile: photo,
			profession
		})
		return docRef
	} catch (error) {
		console.log(error)
	}
}



