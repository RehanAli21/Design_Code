import React, { createContext, useState } from 'react'

export const PagesContext = createContext()

export const PagesProvider = props => {
	const [pages, setPages] = useState(['home'])
	const [activePage, setActivePage] = useState('home')
	const [pageWidths, setPageWidths] = useState([
		'small',
		'medium',
		'large',
		'x-large'
	])
	const [activePageWidth, setActivePageWidth] = useState('small')
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
