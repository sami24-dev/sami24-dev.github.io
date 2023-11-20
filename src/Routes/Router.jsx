import {createBrowserRouter} from 'react-router-dom'
// pages
import NotFound from '../pageViews/NotFound/NotFound'
import LayoutLogin from '../Layaut/LayoutLogin'
import Form from '../components/form/formSignUp/Form'
import FormSignIn from '../components/form/formSignIn/FormSignIn'
import LayoutApp from '../Layaut/LayoutApp'
import Messages from '../pageViews/Messages/Messages'
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
		path: '/app',
		element: <LayoutApp />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Profile />
			},
			{
				path: 'messages',
				element: <Messages />
			}
		]
	}
])
