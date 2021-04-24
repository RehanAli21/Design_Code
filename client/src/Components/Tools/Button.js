import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//This component is for adding Button element
const Button = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addButton = () => {
		//Assigning new variable pages data,
		//For inserting Button element
		const temp = Object.assign({}, pages)
		//For holding all data of a Button element
		const Button = [
			'button',
			{
				id: uniqueString(),
				text: 'button',
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
		//if inserting Button into body
		if (activeElement === activePage) {
			temp[activePage].push(Button)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, Button)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addButton}>Button</p>
}

export default Button
