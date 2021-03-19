import React from 'react'
import { inputStyle } from '../Styles/inputStyle'

//This component is for adding input element
const Input = ({ activeElement, activePage, findAndInsert, uniqueString, setPages, pages }) => {
	//For adding element into pages data
	const addInput = () => {
		//Assigning new variable pages data,
		//For inserting input element
		const temp = Object.assign({}, pages)
		//For holding all data of a input element
		const input = [
			'input',
			{
				type: 'text',
				placeholder: 'placeholder',
				id: uniqueString(),
				styles: {
					small: inputStyle,
					medium: inputStyle,
					large: inputStyle,
					xlarge: inputStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
			},
			[],
		]
		//if inserting input into body
		if (activeElement === activePage) {
			temp[activePage].push(input)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, input)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addInput}>Input Field</p>
}

export default Input
