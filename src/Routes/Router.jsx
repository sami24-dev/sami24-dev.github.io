import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pageViews/NotFound/NotFound';
import Login from '../pageViews/Login/Login';
import HomePage from '../pageViews/home/HomePage';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		errorElement: <NotFound />,
		children: [
			{
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <HomePage />
					},
					{
						path: '/about',
						element: <div>about</div>
					},
					{
						path: '/blog',
						element: <div>blog</div>
					},
					{
						path: '/blog/:id',
						element: <div>post</div>
					}
				]
			}
		]
	}
]);
