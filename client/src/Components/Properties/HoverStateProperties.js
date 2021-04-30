import React from 'react'
import HoverAppearance from './PropertiesComponenets/HoverAppearance'
import HoverExtra from './PropertiesComponenets/HoverExtra'
import HoverPropertiesOne from './PropertiesComponenets/HoverPropertiesOne'

const HoverStateProperties = ({ state, activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'hover' ? 'block' : 'none' }}>
			<HoverPropertiesOne />`
			<HoverAppearance />
			<HoverExtra />
		</div>
	)
}

export default HoverStateProperties
