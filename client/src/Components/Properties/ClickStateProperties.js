import React from 'react'

const ClickStateProperties = ({ state, activePage, activeElement }) => {
	return <div style={{ display: activePage !== activeElement && state === 'click' ? 'block' : 'none' }}></div>
}

export default ClickStateProperties
