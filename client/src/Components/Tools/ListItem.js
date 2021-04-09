import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { listitemStyle } from '../Styles/listitemStyle'

//This component is for adding list element
const ListItem = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addListItem = () => {
		//Assigning new variable pages data,
		//For inserting listItem element
		const temp = Object.assign({}, pages)
		//For holding all data of a listItem element
		const listItem = [
			'list Item',
			{
				type: 'li',
				id: uniqueString(),
				showChildren: true,
				styles: {
					small: listitemStyle,
					medium: listitemStyle,
					large: listitemStyle,
					xlarge: listitemStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				hoverStyles: {
					small: listitemStyle,
					medium: listitemStyle,
					large: listitemStyle,
					xlarge: listitemStyle,
				},
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
					small: listitemStyle,
					medium: listitemStyle,
					large: listitemStyle,
					xlarge: listitemStyle,
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
		//if inserting listitem into body
		if (activeElement === activePage) {
			temp[activePage].push(listItem)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, listItem)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addListItem}>List Item</p>
}

export default ListItem
