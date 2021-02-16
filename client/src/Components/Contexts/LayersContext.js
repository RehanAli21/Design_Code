import React, { createContext, useState } from 'react'

export const LayersContext = createContext()

export const LayersProvider = props => {
	const [show, setShow] = useState(false)

	return (
		<LayersContext.Provider
			value={{
				show,
				setShow
			}}>
			{props.children}
		</LayersContext.Provider>
	)
}
