import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Pages from './Components/Pages'
import { PagesProvider } from './Components/Contexts/PagesContext'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const App = () => {
	const [move, setMove] = useState(true)

	document.addEventListener('keydown', e =>
		e.key.toLowerCase() === 'm' ? setMove(false) : null
	)
	document.addEventListener('keyup', e =>
		e.key.toLowerCase() === 'm' ? setMove(true) : null
	)

	return (
		<PagesProvider>
			<div>
				<Navbar />
				<div className='three-section'>
					<Toolbar />
					<div
						style={{ cursor: move ? 'default' : 'grab' }}
						className='main-div'
						id='main-div'>
						<TransformWrapper
							options={{
								disabled: move,
								minScale: 0.5,
								maxScale: 2,
								limitToBounds: false
							}}
							doubleClick={{ mode: 'reset' }}>
							<TransformComponent>
								<Pages />
							</TransformComponent>
						</TransformWrapper>
					</div>
					<Propertiesbar />
				</div>
			</div>
		</PagesProvider>
	)
}

export default App
