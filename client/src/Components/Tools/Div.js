import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { divStyle } from '../Styles/divStyle'

//This component is for adding div element
const Div = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addDiv = () => {
		//Assigning new variable pages data,
		//For inserting div element
		const temp = Object.assign({}, pages)
		//For holding all data of a div element
		const div = [
			'div',
			{
				id: uniqueString(),
				showChildren: true,
				styles: {
					small: divStyle,
					medium: divStyle,
					large: divStyle,
					xlarge: divStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				hoverStyles: {
					small: divStyle,
					medium: divStyle,
					large: divStyle,
					xlarge: divStyle,
				},
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
					small: divStyle,
					medium: divStyle,
					large: divStyle,
					xlarge: divStyle,
				},
				ClickStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
			},
			[],
		]
		//if inserting div into body
		if (activeElement === activePage) {
			temp[activePage].push(div)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, div)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addDiv}>Div</p>
}

export default Div
