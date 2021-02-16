import React, { useContext } from 'react'
import { LayersContext } from './Contexts/LayersContext'

const Layers = () => {
	const { show } = useContext(LayersContext)

	return (
		<div
			style={{ display: show ? 'block' : 'none' }}
			className='layers'></div>
	)
}

export default Layers
