import React, { useContext } from 'react'
import { LayerContext } from './Contexts/LayerContext'

const Layers = () => {
	const { layers } = useContext(LayerContext)

	const showLayers = layers => {
		return (
			<ul>
				{layers.map(layer => {
					if (Array.isArray(layer)) {
						return showLayers(layer)
					} else {
						return (
							<li>
								<p>{layer.toUpperCase()}</p>
							</li>
						)
					}
				})}
			</ul>
		)
	}

	return <div className='layers'>{showLayers(layers)}</div>
}

export default Layers
