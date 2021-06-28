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
		while (findName(temp[activePage], `slide${counter}`)) {
			counter++
		}
		const id = uniqueString()
		const isFirst = CheckForFirst(temp[activePage], activeElement, id)

		//For holding all data of a section(slide) element
		const slide = [
			'section',
			{
				name: `slide${counter}`,
				id: id,
				showChildren: true,
				class: `${isFirst === 'first' ? ' slide animate__animated activeOne ' : ' slide animate__animated '}`,
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

	const CheckForFirst = (arr, id, slideId) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				if (arr[i][2] && arr[i][2].length > 0) {
					let found = false

					for (let j = 0; j < arr[i][2].length; j++) {
						found = arr[i][2][j][0] === 'section'
					}

					if (arr[i][1].activeSlide === '' && !found) arr[i][1].activeSlide = slideId

					return found ? 'noFirst' : 'first'
				}
			} else if (arr[i][2] && arr[i][2].length > 0) {
				const ans = CheckForFirst(arr[i][2], id, slideId)
				if (ans === 'first' || ans === 'notFirst') return ans
			}
		}
		return false
	}

	return <p onClick={addSlide}>Slide</p>
}

export default Slide
