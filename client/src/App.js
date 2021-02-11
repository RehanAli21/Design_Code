import React from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='three-section'>
				<Toolbar />
				<div className='main-div' id='main-div'></div>
				<Propertiesbar />
			</div>
		</div>
	)
}

export default App
