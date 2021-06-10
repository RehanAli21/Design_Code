import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding image element
const Image = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addImage = () => {
		//Assigning new variable pages data,
		//For inserting image element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `img${counter}`)) {
			counter++
		}
		//For holding all data of a image element
		const image = [
			'img',
			{
				name: `img${counter}`,
				id: uniqueString(),
				alt: '',
				src: '',
				class: ' clickTargetNotApplied ',
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
		//if inserting image into body
		if (activeElement === activePage) {
			temp[activePage].push(image)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, image)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addImage}>Image</p>
}

export default Image
