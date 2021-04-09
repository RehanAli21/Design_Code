import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

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
				hoverStyles: {
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
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
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
