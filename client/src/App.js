import React from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Pages from './Components/Pages'
import { PagesProvider } from './Components/Contexts/PagesContext'

const App = () => {
	return (
		<PagesProvider>
			<div>
				<Navbar />
				<div className='three-section'>
					<Toolbar />
					<div className='main-div' id='main-div'>
						<Pages />
					</div>
					<Propertiesbar />
				</div>
			</div>
		</PagesProvider>
	)
}

export default App
