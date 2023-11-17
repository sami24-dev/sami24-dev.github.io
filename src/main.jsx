import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './Routes/Router'
import './index.css'
import {UserContextProvider} from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
)
