import React, { useState } from 'react'
import TemplateValues from './Components/TemplateValues'
import Navbar from './Components/Navbar'
import Toolbar from './Components/Toolbar'
import Propertiesbar from './Components/Propertiesbar'
import Page from './Components/Page'
import Layers from './Components/Layers'

import { PageProvider } from './Components/Contexts/PageContext'
import { PropertiesProvider } from './Components/Contexts/PropertiesContext'
import { TemplateProvider } from './Components/Contexts/TemplateContext'

let zoom = false
let move = false
const App = () => {
	const [scale, setScale] = useState(0.8)
	const [tX, setTX] = useState(0)
	const [tY, setTY] = useState(0)

	const scaleTranslatePage = e => {
		if (e.key === 'z' && zoom === false) {
			zoom = true
		}
		if (e.key === 'x' && move === false) {
			move = true
		}

		//For reseting zoom and move
		if (zoom && e.key === 'r') {
			setScale(0.8)
			setTX(0)
			setTY(0)
		}

		//For Zoom
		if (zoom && !move && e.key === 'ArrowUp' && scale < 2) {
			setScale(scale + 0.05)
		} else if (zoom && !move && e.key === 'ArrowDown' && scale > 0.2) {
			setScale(scale - 0.05)
		}

		//For Move
		if (zoom && move && e.key === 'ArrowUp') {
			setTY(tY - 10)
		} else if (zoom && move && e.key === 'ArrowDown') {
			setTY(tY + 10)
		} else if (zoom && move && e.key === 'ArrowLeft') {
			setTX(tX - 10)
		} else if (zoom && move && e.key === 'ArrowRight') {
			setTX(tX + 10)
		}
	}

	const disableScaleTranslate = e => {
		if (e.key === 'z' && zoom) zoom = false
		if (e.key === 'x' && move) move = false
	}

	return (
		<div onKeyUp={disableScaleTranslate} onKeyDown={scaleTranslatePage} tabIndex='0'>
			<PageProvider>
				<TemplateProvider>
					<TemplateValues />
					<Navbar />
					<div className='three-section'>
						<Toolbar />
						<Layers />
						<Page scale={scale} tX={tX} tY={tY} />
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
