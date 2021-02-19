import React from 'react'
import { divStyle } from '../Styles/divStyle'

const Div = ({
	activeElement,
	activePage,
	findAndInsert,
	uniqueString,
	setPages,
	pages
}) => {
	const addDiv = () => {
		const temp = Object.assign({}, pages)

		if (activeElement === activePage) {
			temp[activePage].push([
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
			])
		} else {
			findAndInsert(temp[activePage], activeElement, [
				'div',
				{ id: uniqueString() },
				[]
			])
		}

		setPages(temp)
	}

	return <p onClick={addDiv}>Div</p>
}

export default Div
