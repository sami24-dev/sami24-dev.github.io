import {createBrowserRouter} from 'react-router-dom'
// pages
import NotFound from '../pageViews/NotFound/NotFound'
import Login from '../pageViews/Login/Login'
import Form from '../components/form/formSignUp/Form'
import FormSignIn from '../components/form/formSignIn/FormSignIn'
import HomePage from '../pageViews/home/HomePage'
import Layaut from '../Layaut/layaut'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <FormSignIn />
			},
			{
				path: '/signup',
				element: <Form />
			}
		]
	},
	{
		path: '/daskboard',
		element: <Layaut />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <HomePage />
			}
		]
	}
])
