import React from 'react'
import TemplateValues from './Components/TemplateValues'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Page from './Components/Page'
import Layers from './Components/Layers'

import { PageProvider } from './Components/Contexts/PageContext'
import { PropertiesProvider } from './Components/Contexts/PropertiesContext'
import { TemplateProvider } from './Components/Contexts/TemplateContext'

const App = () => {
	return (
		<div>
			<PageProvider>
				<TemplateProvider>
					<TemplateValues />
					<Navbar />
					<div className='three-section'>
						<Toolbar />
						<Layers />
						<Page />
						<PropertiesProvider>
							<Propertiesbar />
						</PropertiesProvider>
					</div>
				</TemplateProvider>
			</PageProvider>
		</div>
	)
}

export default App
