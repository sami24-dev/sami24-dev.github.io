import {createBrowserRouter} from 'react-router-dom'
// pages
import LayoutApp from '../Layaut/LayoutApp'
import LayoutLogin from '../Layaut/LayoutLogin'
import FormSignIn from '../components/form/formSignIn/FormSignIn'
import Form from '../components/form/formSignUp/Form'
import ConfigUser from '../pageViews/ConfigUser/ConfigUser'
import NotFound from '../pageViews/NotFound/NotFound'
import Profile from '../pageViews/Profile/Profile'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutLogin />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <FormSignIn />
			},
			{
				path: '/signUp',
				element: <Form />
			}
		]
	},
	{
		path: '/configUser',
		element: <ConfigUser />,
		errorElement: <NotFound />
	},
	{
		path: '/app',
		element: <LayoutApp />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Profile />
			}
		]
	}
])
