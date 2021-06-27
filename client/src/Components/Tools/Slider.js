import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

//for unique name
let counter = 1
//This component is for adding slider element
const Slider = ({ findAndInsert, uniqueString, findName }) => {
	const { activeElement, activePage, setPages, pages } = useContext(PageContext)

	//For adding element into pages data
	const addSlider = () => {
		//Assigning new variable pages data,
		//For inserting slider element
		const temp = Object.assign({}, pages)
		//checking if name already exists, then counter increament and that make name unique
		while (findName(temp[activePage], `slider${counter}`)) {
			counter++
		}
		//For holding all data of a slider element
		const slider = [
			'section',
			{
				name: `slider${counter}`,
				type: 'main',
				activeSlide: '',
				effect: 'effect1',
				loop: 'no',
				autoplay: 'no',
				autoplayTiming: '',
				id: uniqueString(),
				showChildren: true,
				class: ' Slider ',
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
			[
				[
					'button',
					{
						name: `SRB${counter}`,
						id: uniqueString(),
						text: 'right',
						type: 'sliderButton',
						showChildren: true,
						class: ' sliderButton rightButton ',
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
				],
				[
					'button',
					{
						name: `SLB${counter}`,
						id: uniqueString(),
						type: 'sliderButton',
						text: 'left',
						showChildren: true,
						class: ' sliderButton leftButton ',
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
				],
			],
		]
		//if inserting slider into body
		if (activeElement === activePage) {
			temp[activePage].push(slider)
		} else {
			temp[activePage] = findAndInsert(temp[activePage], activeElement, slider)
		}
		counter++

		//Assigning new data into pages data
		setPages(temp)
	}

	return <p onClick={addSlider}>Slider</p>
}

export default Slider
