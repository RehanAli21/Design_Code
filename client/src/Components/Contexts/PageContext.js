import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = props => {
	const [pages, setPages] = useState({ home: [] })
	const [activePage, setActivePage] = useState('home')
	const [activeElement, setActiveElement] = useState('')
	const [width, setWidth] = useState(720)
	const [actionHistory, setActionHistory] = useState([])

	const setHistory = () => {
		const temp = []
		actionHistory.forEach(e => temp.push(e))

		if (temp.length > 5) temp.shift()

		temp.push({ [activePage]: pages[activePage] })

		setActionHistory(temp)
		console.log(actionHistory)
	}

	return (
		<PageContext.Provider
			value={{
				pages,
				setPages,
				activePage,
				setActivePage,
				activeElement,
				setActiveElement,
				width,
				setWidth,
				setHistory
			}}>
			{props.children}
		</PageContext.Provider>
	)
}
