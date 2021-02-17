import React, { createContext, useState } from 'react'

export const LayerContext = createContext()

export const LayerProvider = props => {
	const [layers, setLayers] = useState(['home'])
	const [activeElement, setActiveElement] = useState('')

	return (
		<LayerContext.Provider value={{ layers, setLayers }}>
			{props.children}
		</LayerContext.Provider>
	)
}
