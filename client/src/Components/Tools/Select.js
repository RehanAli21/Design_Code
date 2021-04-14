import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//This component is for adding select element
const Select = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addSelect = () => {
		//Assigning new variable pages data,
		//For inserting select element
		const temp = Object.assign({}, pages)
		//For holding all data of a select element
		const select = [
			'select',
			{
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
				hoverStyles: {
					small: {},
					medium: {},
					large: {},
					xlarge: {},
				},
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
					small: {},
					medium: {},
					large: {},
					xlarge: {},
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
		//if inserting select into body
		if (activeElement === activePage) {
			temp[activePage].push(select)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, select)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addSelect}>Drop Menu</p>
}

export default Select
