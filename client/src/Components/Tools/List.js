import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { listStyle } from '../Styles/listStyle'

//This component is for adding list element
const List = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addList = () => {
		//Assigning new variable pages data,
		//For inserting list element
		const temp = Object.assign({}, pages)
		//For holding all data of a list element
		const list = [
			'list',
			{
				type: 'ul',
				id: uniqueString(),
				showChildren: true,
				styles: {
					small: listStyle,
					medium: listStyle,
					large: listStyle,
					xlarge: listStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				hoverStyles: {
					small: listStyle,
					medium: listStyle,
					large: listStyle,
					xlarge: listStyle,
				},
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
					small: listStyle,
					medium: listStyle,
					large: listStyle,
					xlarge: listStyle,
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
		//if inserting list into body
		if (activeElement === activePage) {
			temp[activePage].push(list)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, list)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addList}>List</p>
}

export default List
