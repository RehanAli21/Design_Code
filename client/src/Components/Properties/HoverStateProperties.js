import React from 'react'
import HoverAppearance from './PropertiesComponenets/HoverAppearance'
import HoverExtra from './PropertiesComponenets/HoverExtra'
import HoverTextFont from './PropertiesComponenets/HoverTextFont'

const HoverStateProperties = ({ state, activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'hover' ? 'block' : 'none' }}>
			<HoverAppearance />
			<HoverExtra />
			<HoverTextFont />
		</div>
	)
}

export default HoverStateProperties
