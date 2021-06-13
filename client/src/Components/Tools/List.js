import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding list element
const List = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addList = () => {
		//Assigning new variable pages data,
		//For inserting list element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `list${counter}`)) {
			counter++
		}
		//For holding all data of a list element
		const list = [
			'list',
			{
				name: `list${counter}`,
				type: 'ul',
				id: uniqueString(),
				showChildren: true,
				class: ' clickTargetNotApplied ',
				clickTargets: {},
				hoverTargets: {},
				styles: {
					small: {
						listStyleType: 'circle',
					},
					medium: {
						listStyleType: 'circle',
					},
					large: {
						listStyleType: 'circle',
					},
					xlarge: {
						listStyleType: 'circle',
					},
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
		//if inserting list into body
		if (activeElement === activePage) {
			temp[activePage].push(list)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, list)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addList}>List</p>
}

export default List
