import React from 'react'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Pages from './Components/Pages'
import { PagesProvider } from './Components/Contexts/PagesContext'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const App = () => {
	return (
		<PagesProvider>
			<div>
				<Navbar />
				<div className='three-section'>
					<Toolbar />
					<div className='main-div' id='main-div'>
						<TransformWrapper
							options={{
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
