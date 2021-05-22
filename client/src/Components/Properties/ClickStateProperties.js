import React from 'react'
import ClickExtra from './PropertiesComponenets/ClickExtra'

const ClickStateProperties = ({ activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<ClickExtra />
		</div>
	)
}

export default ClickStateProperties
