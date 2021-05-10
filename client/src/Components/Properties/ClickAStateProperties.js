import React from 'react'

const ClickAStateProperties = ({ activePage, activeElement, state }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'clickjs' ? 'block' : 'none' }}>
			<p>CLICK(ADVANCE) PROPERTIES</p>
		</div>
	)
}

export default ClickAStateProperties
