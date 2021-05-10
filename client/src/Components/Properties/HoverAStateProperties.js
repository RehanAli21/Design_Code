import React from 'react'

const HoverAStateProperties = ({ activePage, activeElement, state }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'hoverjs' ? 'block' : 'none' }}>
			<p>HOVER(ADVANCE) PROPERTIES</p>
		</div>
	)
}

export default HoverAStateProperties
