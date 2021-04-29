import React from 'react'
import HoverAppearance from './PropertiesComponenets/HoverAppearance'
import HoverExtra from './PropertiesComponenets/HoverExtra'

const HoverStateProperties = ({ state, activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'hover' ? 'block' : 'none' }}>
			<HoverAppearance />
			<HoverExtra />
		</div>
	)
}

export default HoverStateProperties
