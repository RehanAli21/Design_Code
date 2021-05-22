import React from 'react'
import HoverAppearance from './PropertiesComponenets/HoverAppearance'
import HoverExtra from './PropertiesComponenets/HoverExtra'
import HoverPropertiesOne from './PropertiesComponenets/HoverPropertiesOne'

const HoverStateProperties = ({ activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<HoverPropertiesOne />`
			<HoverAppearance />
			<HoverExtra />
		</div>
	)
}

export default HoverStateProperties
