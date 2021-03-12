import React from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Page from './Components/Page'
import Layers from './Components/Layers'

import { PageProvider } from './Components/Contexts/PageContext'

const App = () => {
	return (
		<div>
			<PageProvider>
				<Navbar />
				<div className='three-section'>
					<Toolbar />
					<Layers />
					<Page />
					<Propertiesbar />
				</div>
			</PageProvider>
		</div>
	)
}

export default App
