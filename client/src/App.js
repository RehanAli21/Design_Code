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
				<div className='main-div' id='main-div'>
					<div>
						<p>Small</p>
						<div className='small'></div>
					</div>
					<div>
						<p>Medium</p>
						<div className='medium'></div>
					</div>
					<div>
						<p>Large</p>
						<div className='large'></div>
					</div>
					<div>
						<p>X-Large</p>
						<div className='x-large'></div>
					</div>
					<div>
						<p>No-width</p>
						<div className='universal'></div>
					</div>
				</div>
				<Propertiesbar />
			</div>
		</div>
	)
}

export default App
