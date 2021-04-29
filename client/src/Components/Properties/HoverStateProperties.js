import React from 'react'
import HoverAppearance from './PropertiesComponenets/HoverAppearance'

const HoverStateProperties = ({ state, activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'hover' ? 'block' : 'none' }}>
			<HoverAppearance />
		</div>
	)
}

export default HoverStateProperties
