import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//This component is for adding option element
const Option = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addOption = () => {
		//Assigning new variable pages data,
		//For inserting option element
		const temp = Object.assign({}, pages)
		//For holding all data of a option element
		const option = [
			'option',
			{
				name: 'option',
				text: 'text',
				placeholder: 'placeholder',
				id: uniqueString(),
				maxLength: 0,
				min: '',
				max: '',
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
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addOption}>Option</p>
}

export default Option
