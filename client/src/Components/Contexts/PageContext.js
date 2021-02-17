import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = props => {
	const [pages, setPages] = useState(['home'])
	const [activeElementId, setActiveElementId] = useState('home')

	return (
		<PageContext.Provider value={{ pages, setPages }}>
			{props.children}
		</PageContext.Provider>
	)
}
