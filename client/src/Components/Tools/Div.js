import React from 'react'
import { divStyle } from '../Styles/divStyle'

const Div = ({
	activeElement,
	activePage,
	findAndInsert,
	uniqueString,
	setPages,
	pages,
	setHistory
}) => {
	const addDiv = () => {
		const temp = Object.assign({}, pages)
		const div = [
			'div',
			{
				id: uniqueString(),
				styles: {
					small: divStyle,
					medium: divStyle,
					large: divStyle,
					xlarge: divStyle
				}
			},
			[]
		]

		setHistory()

		if (activeElement === activePage) {
			temp[activePage].push(div)
		} else {
			temp[activePage] = findAndInsert(
				temp[activePage],
				activeElement,
				div
			)
		}

		setPages(temp)
	}

	return <p onClick={addDiv}>Div</p>
}

export default Div
