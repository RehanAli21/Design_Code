import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = props => {
	const [pages, setPages] = useState({ home: [] })
	const [activePage, setActivePage] = useState('home')
	const [activeElement, setActiveElement] = useState('')
	const [width, setWidth] = useState(720)
	const [actionHistory, setActionHistory] = useState({ home: [] })

	const setHistory = () => {
		const temp = []
		actionHistory[activePage].forEach(e => temp.push(e))

		if (temp.length > 3)
			for (let i = temp.length - 1; i > 3; i--) temp.shift()

		const a = []
		pages[activePage].forEach(p => a.push(p))
		temp.push(a)

		const historyTemp = Object.assign({}, actionHistory)
		historyTemp[activePage] = temp
		setActionHistory(historyTemp)
	}

	const undoFunc = () => {
		if (actionHistory[activePage].length < 1) return

		const pagesTemp = Object.assign({}, pages)
		const historyTemp = Object.assign({}, actionHistory)

		pagesTemp[activePage] =
			historyTemp[activePage][historyTemp[activePage].length - 1]

		console.log(pagesTemp)
		console.log(historyTemp)

		setPages(pagesTemp)
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
				setHistory,
				undoFunc
			}}>
			{props.children}
		</PageContext.Provider>
	)
}
