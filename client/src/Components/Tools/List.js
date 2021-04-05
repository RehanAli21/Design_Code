import React from 'react'
import { listStyle } from '../Styles/listStyle'

//This component is for adding list element
const List = ({ activeElement, activePage, findAndInsert, uniqueString, setPages, pages }) => {
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
				text: '',
				id: uniqueString(),
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
			},
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
