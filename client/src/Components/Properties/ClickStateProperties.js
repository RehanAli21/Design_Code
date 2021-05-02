import React from 'react'
import ClickExtra from './PropertiesComponenets/ClickExtra'

const ClickStateProperties = ({ state, activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'click' ? 'block' : 'none' }}>
			<ClickExtra />
		</div>
	)
}

export default ClickStateProperties
