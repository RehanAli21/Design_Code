import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
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
				name: `select${counter}`,
				id: uniqueString(),
				showChildren: true,
				class: '',
				hoverTarget: '',
				clickTarget: '',
				hTargetStyle: {},
				cTargetStyle: {},
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
		//if inserting select into body
		if (activeElement === activePage) {
			temp[activePage].push(select)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, select)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addSelect}>Drop Menu</p>
}

export default Select
