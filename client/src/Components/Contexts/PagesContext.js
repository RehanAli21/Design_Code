import React, { createContext, useState } from 'react'

export const PagesContext = createContext()

export const PagesProvider = props => {
	const [pages, setPages] = useState(['home'])
	const [activePage, setActivePage] = useState('home')
	const [activePageWidth, setActivePageWidth] = useState('small')

	console.log(activePage)
	console.log(activePageWidth)

	return (
		<PagesContext.Provider
			value={[
				pages,
				activePage,
				setActivePage,
				activePageWidth,
				setActivePageWidth
			]}>
			{props.children}
		</PagesContext.Provider>
	)
}
