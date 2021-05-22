import React from 'react'

const HoverAStateProperties = ({ activePage, activeElement }) => {
	return (
		<div style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<p>HOVER(ADVANCE) PROPERTIES</p>
		</div>
	)
}

export default HoverAStateProperties
