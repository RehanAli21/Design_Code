import React from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Page from './Components/Page'
import Layers from './Components/Layers'

import { PageProvider } from './Components/Contexts/PageContext'
import { PropertiesProvider } from './Components/Contexts/PropertiesContext'

const App = () => {
	return (
		<div>
			<PageProvider>
				<Navbar />
				<div className='three-section'>
					<Toolbar />
					<Layers />
					<Page />
					<PropertiesProvider>
						<Propertiesbar />
					</PropertiesProvider>
				</div>
			</PageProvider>
		</div>
	)
}

export default App
