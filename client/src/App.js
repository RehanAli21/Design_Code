import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Page from './Components/Page'
import Layers from './Components/Layers'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import { PageProvider } from './Components/Contexts/PageContext'
import { LayerProvider } from './Components/Contexts/LayerContext'

const App = () => {
	const [move, setMove] = useState(true)

	document.addEventListener('keydown', e =>
		e.key.toLowerCase() === 'z' ? setMove(false) : null
	)
	document.addEventListener('keyup', e =>
		e.key.toLowerCase() === 'z' ? setMove(true) : null
	)

	return (
		<div>
			<PageProvider>
				<LayerProvider>
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
									<Page />
								</TransformComponent>
							</TransformWrapper>
						</div>
						<Propertiesbar />
					</div>
				</LayerProvider>
			</PageProvider>
		</div>
	)
}

export default App
