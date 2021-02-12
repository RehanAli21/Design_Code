import React, { createContext } from 'react'

export const PagesContext = createContext()

export const PagesProvider = props => {
	return (
		<PagesContext.Provider value={'hi'}>
			{props.children}
		</PagesContext.Provider>
	)
}
