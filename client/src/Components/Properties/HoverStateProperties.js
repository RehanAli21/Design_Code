import React from 'react'

const HoverStateProperties = ({ state, activePage, activeElement }) => {
	return <div style={{ display: activePage !== activeElement && state === 'hover' ? 'block' : 'none' }}></div>
}

export default HoverStateProperties
