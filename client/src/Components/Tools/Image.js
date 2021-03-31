import React from 'react'
import { imageStyle } from '../Styles/ImageStyle'

//This component is for adding image element
const Image = ({ activeElement, activePage, findAndInsert, uniqueString, setPages, pages }) => {
	//For adding element into pages data
	const addImage = () => {
		//Assigning new variable pages data,
		//For inserting image element
		const temp = Object.assign({}, pages)
		//For holding all data of a image element
		const image = [
			'image',
			{
				id: uniqueString(),
				alt: '',
				src: '',
				styles: {
					small: imageStyle,
					medium: imageStyle,
					large: imageStyle,
					xlarge: imageStyle,
				},
				styleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
			},
		]
		//if inserting image into body
		if (activeElement === activePage) {
			temp[activePage].push(image)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, image)
		}
		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addImage}>Image</p>
}

export default Image
