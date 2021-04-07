import React from 'react'
import { optionStyle } from '../Styles/optionStyle'

//This component is for adding option element
const Option = ({ activeElement, activePage, findAndInsert, uniqueString, setPages, pages }) => {
	//For adding element into pages data
	const addOption = () => {
		//Assigning new variable pages data,
		//For inserting option element
		const temp = Object.assign({}, pages)
		//For holding all data of a option element
		const option = [
			'option',
			{
				type: 'text',
				placeholder: 'placeholder',
				id: uniqueString(),
				maxLength: 0,
				min: '',
				max: '',
				styles: {
					small: optionStyle,
					medium: optionStyle,
					large: optionStyle,
					xlarge: optionStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
			},
		]
		//if inserting option into body
		if (activeElement === activePage) {
			temp[activePage].push(option)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, option)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addOption}>Option</p>
}

export default Option
