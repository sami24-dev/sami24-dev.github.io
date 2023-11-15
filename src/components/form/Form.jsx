/* eslint-disable no-unused-vars */
import {useState} from 'react';
import look from '../../assets/form/cerrar.svg';
import en from '../../assets/form/en.svg';
import google from '../../assets/form/Google-Logo.png';
import apple from '../../assets/form/apple.svg';
import FormInput from './FormInput';
import {Link} from 'react-router-dom';
import {register} from '../../firebase/app';
function Form() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	});
	const {email, password} = form;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const CredentialUser = await register(email, password);
			console.log(CredentialUser);
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	};
	return (
		<form
			className='flex justify-center items-center flex-col gap-3 w-96 min-h-max bg-martinique-50 shadow-lg rounded-md'
			onSubmit={handleSubmit}>
			<header className='w-4/5 text-center'>
				<h1 className='my-5 text-2xl text-martinique-700'>
					Create Your Acount
				</h1>
				<Link
					to='/'
					className='flex justify-center items-center gap-2 w-full bg-transparent rounded-md cursor-pointer text-martinique-700 border border-martinique-200 mb-5  hover:border-martinique-600'>
					<img
						className='w-6'
						src={google}
						alt='logo'
					/>
					<h3 className='my-2 pt-1 '>Sign up with Google</h3>
				</Link>
				<Link
					to='/'
					className='flex justify-center items-center gap-2 w-full bg-transparent rounded-md cursor-pointer text-martinique-700 border border-martinique-200 mb-2  hover:border-martinique-600'>
					<img
						className='w-6'
						src={apple}
						alt='logo'
					/>
					<h3 className='my-2 pt-1 '>Sign up with Apple</h3>
				</Link>
			</header>
			<FormInput
				type='email'
				name='email'
				value={email}
				event={handleChange}
				define='email'
				icon={en}
				description='email'
				placeholder='Your email'
			/>
			<FormInput
				type='password'
				name='password'
				value={password}
				event={handleChange}
				define='password'
				icon={look}
				description='password'
				placeholder='Your password'
			/>
			<footer className='w-4/5 '>
				<button
					className='w-full h-9 text-martinique-50 text-xl bg-martinique-950 rounded-md hover:martinique-700 active:martinique-700'
					type='submit'>
					SignUp
				</button>
				<hr className='w-full mt-5' />
				<h2 className='text-center text-xl mt-2 mb-5'>
					<a
						className='no-underline text-martinique-700'
						href='#'>
						Login
					</a>
				</h2>
			</footer>
		</form>
	);
}

export default Form;
