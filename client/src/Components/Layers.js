import React from 'react'

const Layers = ({ show }) => {
	return (
		<div
			style={{ display: show ? 'block' : 'none' }}
			className='layers'></div>
	)
}

export default Layers
