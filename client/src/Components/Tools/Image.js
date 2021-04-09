import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { imageStyle } from '../Styles/imageStyle'

//This component is for adding image element
const Image = ({ findAndInsert, uniqueString }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)
	//For adding element into pages data
	const addImage = () => {
		//Assigning new variable pages data,
		//For inserting image element
		const temp = Object.assign({}, pages)
		//For holding all data of a image element
		const image = [
			'img',
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
				hoverStyles: {
					small: imageStyle,
					medium: imageStyle,
					large: imageStyle,
					xlarge: imageStyle,
				},
				hoverStyleWidth: {
					changedSmall: false,
					changedMedium: false,
					changedLarge: false,
					changeXlarge: false,
				},
				clickStyles: {
					small: imageStyle,
					medium: imageStyle,
					large: imageStyle,
					xlarge: imageStyle,
				},
				ClickStyleWidth: {
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
