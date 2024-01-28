// funcion inicializacion firebase
import { initializeApp } from 'firebase/app';
// funciones de autenticacion
// funciones del storage
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// funciones de las bases de datos 
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import { deleteDoc, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

// Configuracion firebase

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

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
export const loginWithGoogle = async ()=>{
	const responseGoogle = new GoogleAuthProvider()
	return await signInWithPopup(auth, responseGoogle)
}
export const logout = () => {
	return signOut(auth)
}

// funcion de storage subir imagen
 
 export const uploadFile = async (file, uid, type) => {
	try {
		const storageRef = ref(storage, `${uid}/avatar/Profile-photo`)
		const message = file
		const metaData = {
			contentType: type
		}
		await uploadBytes(storageRef, message, metaData)
		return await getDownloadURL(storageRef)
	} catch (error) {
		console.log(error)
	}
}

 export const uploadPost = async (file, uid, type, id) => {
	const storageRef = ref(storage, `${uid}/publications/${id}`)
	const message = file;
	const metaData = {
		contentType: type
	  }; 
	  await uploadBytes(storageRef, message, metaData)
	  const urlLink =  await getDownloadURL(storageRef)
	  return urlLink
 }

// funcion para agregar datos a la base de datos 

export const setUserDb = async (email, lastName, firstName, photo, profession, id) => {

	const dataDb = {
		correo: email.toString(),
		apellido: lastName.toString(),
		nombre: firstName.toString(),
		fotoPerfil: photo.toString(),
		ocupacion: profession.toString()
	}
	const response = await setDoc(doc(db, 'usuarios', id), dataDb)
	
	return response
}

export const setUserPost = async (descriptions, photo, uuid, uid) => {

	const dataDb = {
		descripcion: descriptions.toString(),
		foto: photo.toString(),
		uuid: uuid.toString(),
		uid: uid.toString()
	}
	const response = await setDoc(doc(db, uid, uuid), dataDb)
	
	return response
}
// funcion para consultar 

export const getUserData = async (id) => {
	try {
		const docRef = doc(db, 'usuarios', id)
		const docSnap = await getDoc(docRef)
		return docSnap.data()
		
	} catch (error) {
		console.log(error)
	}
} 

// funcion para actualizar la base de datos
export const udaptePost = async (descriptions, photo, uui, uuid) => {
	const udapteRef = doc(db, uui, uuid);

	await updateDoc(udapteRef, {
	descripcion: descriptions.toString(),
	foto: photo.toString(),
});
}

// funcion para borrar

export const deletePost = async (uui, uuid) => {
	const document = doc(db, `${uui.uid}`, `${uuid}`)
	await deleteDoc(document)
}