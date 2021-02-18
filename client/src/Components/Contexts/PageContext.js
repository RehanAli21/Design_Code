import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = props => {
	const [pages, setPages] = useState({ home: [] })
	const [activePage, setActivePage] = useState('home')
	const [activeElement, setActiveElement] = useState('')

	return (
		<PageContext.Provider
			value={{ pages, setPages, activePage, setActivePage }}>
			{props.children}
		</PageContext.Provider>
	)
}
