import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding section(slide) element
const Slide = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)

	//For adding element into pages data
	const addSlide = () => {
		//Assigning new variable pages data,
		//For inserting section(slide) element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `section${counter}`)) {
			counter++
		}
		//For holding all data of a section(slide) element
		const slide = [
			'section',
			{
				name: `slide${counter}`,
				id: uniqueString(),
				showChildren: true,
				class: ' animate__animated ',
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
		//if inserting section(slide) into body
		if (activeElement === activePage) {
			temp[activePage].push(slide)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, slide)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addSlide}>Slide</p>
}

export default Slide
