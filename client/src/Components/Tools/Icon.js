import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding Icon element
const Icon = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addIcon = () => {
		//Assigning new variable pages data,
		//For inserting Icon element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `icon${counter}`)) {
			counter++
		}
		//For holding all data of a Icon element
		const Icon = [
			'i',
			{
				name: `icon${counter}`,
				id: uniqueString(),
				class: '',
				hoverTarget: '',
				clickTarget: '',
				hoverTargetName: '',
				clickTargetName: '',
				hTargetStyle: {},
				cTargetStyle: {},
				evenClickStyleRemover: 'no',
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
		]
		//if inserting Icon into body
		if (activeElement === activePage) {
			temp[activePage].push(Icon)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, Icon)
		}

		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addIcon}>Icon</p>
}

export default Icon
