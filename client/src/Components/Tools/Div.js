import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

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
				name: 'div',
				id: uniqueString(),
				showChildren: true,
				class: '',
				styles: {
					small: {},
					medium: {},
					large: {},
					xlarge: {},
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				hoverStyle: {},
				clickStyle: {},
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
