import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//This component is for adding input element
const Input = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addInput = () => {
		//Assigning new variable pages data,
		//For inserting input element
		const temp = Object.assign({}, pages)
		//For holding all data of a input element
		const input = [
			'input',
			{
				name: 'input',
				type: 'text',
				placeholder: 'placeholder',
				id: uniqueString(),
				maxLength: 0,
				min: '',
				max: '',
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
				hoverStyle: {},
				clickStyle: {},
			},
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
