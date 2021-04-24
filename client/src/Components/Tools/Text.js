import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//This component is for adding input element
const Text = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addText = () => {
		//Assigning new variable pages data,
		//For inserting text element
		const temp = Object.assign({}, pages)
		//For holding all data of a input element
		const text = [
			'text',
			{
				type: 'p',
				text: 'Hello World',
				id: uniqueString(),
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
		//if inserting text into body
		if (activeElement === activePage) {
			temp[activePage].push(text)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, text)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addText}>Text</p>
}

export default Text
