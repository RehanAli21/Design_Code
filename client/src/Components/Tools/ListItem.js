import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding list element
const ListItem = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addListItem = () => {
		//Assigning new variable pages data,
		//For inserting listItem element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `list item${counter}`)) {
			counter++
		}
		//For holding all data of a listItem element
		const listItem = [
			'list Item',
			{
				name: `list item${counter}`,
				type: 'li',
				id: uniqueString(),
				class: ' clickTargetNotApplied ',
				showChildren: true,
				clickTargets: {},
				hoverTargets: {},
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
		//if inserting listitem into body
		if (activeElement === activePage) {
			temp[activePage].push(listItem)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, listItem)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addListItem}>List Item</p>
}

export default ListItem
