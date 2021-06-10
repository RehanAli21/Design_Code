import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding option element
const Option = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addOption = () => {
		//Assigning new variable pages data,
		//For inserting option element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `option${counter}`)) {
			counter++
		}
		//For holding all data of a option element
		const option = [
			'option',
			{
				name: `option${counter}`,
				text: 'text',
				id: uniqueString(),
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
		//if inserting option into body
		if (activeElement === activePage) {
			temp[activePage].push(option)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, option)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addOption}>Option</p>
}

export default Option
