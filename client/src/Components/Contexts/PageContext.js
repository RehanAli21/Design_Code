import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = props => {
	const [pages, setPages] = useState({ home: [] })
	const [activePage, setActivePage] = useState('home')
	const [activeElement, setActiveElement] = useState('')
	const [width, setWidth] = useState(720)
	const [actionHistory, setActionHistory] = useState({ home: [] })
	const [pageBC, setPageBC] = useState('#ffffff')
	const [showBreakPoint, setShowBreakPoint] = useState(true)
	const [sBreakPoint, setSBreakPoint] = useState(540)
	const [mBreakPoint, setMBreakPoint] = useState(720)
	const [lBreakPoint, setLBreakPoint] = useState(970)

	const setHistory = (parentId, object, index) => {
		if (parentId && object) {
			const temp = Object.assign({}, actionHistory)

			try {
				temp[activePage].push([object, parentId, index])
			} catch (e) {
				temp[activePage] = []
				temp[activePage].push([object, parentId, index])
			}

			setActionHistory(temp)
		}
	}

	const undoFunc = () => {
		if (actionHistory[activePage].length < 1) return
		const pagesTemp = Object.assign({}, pages)
		const historyTemp = Object.assign({}, actionHistory)

		const length = historyTemp[activePage].length - 1

		undoHelper(pagesTemp[activePage], activePage, historyTemp[activePage][length])

		historyTemp[activePage].pop()

		setPages(pagesTemp)
		setActionHistory(historyTemp)
	}

	const undoHelper = (arr, parentId, object) => {
		if (parentId === object[1]) {
			if (object[2] === 0) {
				arr.unshift(object[0])
			} else {
				arr.splice(object[2], 0, object[0])
			}
			return true
		} else {
			arr.forEach(a => {
				if (undoHelper(a[2], a[1].id, object)) {
					return true
				}
			})
		}
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
				undoFunc,
				pageBC,
				setPageBC,
				showBreakPoint,
				setShowBreakPoint,
				sBreakPoint,
				setSBreakPoint,
				mBreakPoint,
				setMBreakPoint,
				lBreakPoint,
				setLBreakPoint,
			}}>
			{props.children}
		</PageContext.Provider>
	)
}
