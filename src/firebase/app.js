// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseConfig} from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const Register = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};
