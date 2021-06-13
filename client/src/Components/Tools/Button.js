import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding Button element
const Button = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addButton = () => {
		//Assigning new variable pages data,
		//For inserting Button element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `button${counter}`)) {
			counter++
		}
		//For holding all data of a Button element
		const Button = [
			'button',
			{
				name: `button${counter}`,
				id: uniqueString(),
				text: 'button',
				showChildren: true,
				class: ' clickTargetNotApplied ',
				indexOfText: 0,
				clickTargets: {},
				hoverTargets: {},
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
		//if inserting Button into body
		if (activeElement === activePage) {
			temp[activePage].push(Button)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, Button)
		}

		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addButton}>Button</p>
}

export default Button
