import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Pages from './Components/Pages'
import Layers from './Components/Layers'
import { PagesProvider } from './Components/Contexts/PagesContext'
import { PagesDataProvider } from './Components/Contexts/PagesDataContext'
import { LayersProvider } from './Components/Contexts/LayersContext'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const App = () => {
	const [move, setMove] = useState(true)

	document.addEventListener('keydown', e =>
		e.key.toLowerCase() === 'z' ? setMove(false) : null
	)
	document.addEventListener('keyup', e =>
		e.key.toLowerCase() === 'z' ? setMove(true) : null
	)

	return (
		<PagesDataProvider>
			<PagesProvider>
				<LayersProvider>
					<div>
						<Navbar />
						<div className='three-section'>
							<Toolbar />
							<Layers />
							<div
								style={{ cursor: move ? 'default' : 'grab' }}
								className='main-div'
								id='main-div'>
								<TransformWrapper
									options={{
										disabled: move,
										minScale: 0.25,
										maxScale: 4,
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
				</LayersProvider>
			</PagesProvider>
		</PagesDataProvider>
	)
}

export default App
