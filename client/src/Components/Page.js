import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

let oldx = 0
let oldy = 0
let l = 0
let t = 0
let w = 0
let h = 0
let parentWidth = 0
let parentHeight = 0
//This compoenent controls page.
const Page = () => {
	const { pages, activePage, width, activeElement, render } = useContext(
		PageContext
	)
	const [l, setL] = useState(0)
	const [t, setT] = useState(0)
	const [w, setW] = useState(0)
	const [h, setH] = useState(0)
	const [parentWidth, setParentWidth] = useState(0)
	const [parentHeight, setParentHeight] = useState(0)

	//For showing elements into a div which acts
	//as body element/tag, using recursion
	const showElements = arr => {
		//Variable for storing elments
		const temp = []
		//Iterating each element
		arr.forEach(e => {
			/**
			 * Inserting elements into variable.
			 * Using React.createElement func for creating elements
			 * first parameter is element type
			 * second parameter giving 3 things, first: key, second: id
			 * 		third: different style according to the width of body tag
			 * third parameter for children, if there is children do recursion
			 */
			temp.push(
				React.createElement(
					e[0],
					{
						key: uuid(),
						id: e[1].id,
						style:
							width < 540
								? e[1].styles.small
								: width < 720
								? e[1].styles.medium
								: width < 960
								? e[1].styles.large
								: e[1].styles.xlarge
					},
					e[2].length > 0 ? showElements(e[2]) : null
				)
			)
		})

		return temp
	}

	const move = e => {
		if (e.pageX > oldx) {
			if (l < parentWidth - w) setL(l + 1)
		} else if (e.pageX < oldx) {
			if (l >= 0) setL(l - 1)
		}
		if (e.pageY > oldy) {
			if (t < parentHeight - h) setT(t + 1)
		} else if (e.pageY < oldy) {
			if (t >= 0) setT(t - 1)
		}
		oldy = e.pageY
		oldx = e.pageX
	}

	const widthHeight = e => {
		// if (e.pageX > oldx) {
		// 	if (width < parentWidth) setW(w + 1)
		// } else if (e.pageX < oldx) {
		// 	if (width >= 0) setW(w - 1)
		// }
		// if (e.pageY > oldy) {
		// 	if (h < parentHeight) setH(h + 1)
		// } else if (e.pageY < oldy) {
		// 	if (h >= 0) setH(h - 1)
		// }
		// oldy = e.pageY
		// oldx = e.pageX
	}

	const HeightChange = e => {
		// if (e.pageY > oldy) {
		// 	if (h < parentHeight) setH(h + 1)
		// } else if (e.pageY < oldy) {
		// 	if (h >= 0) setH(h - 1)
		// }
		// oldy = e.pageY
	}

	const WidthChange = e => {
		// if (e.pageX > oldx) {
		// 	if (w < parentWidth) setW(w + 1)
		// } else if (e.pageX < oldx) {
		// 	if (w >= 0) setW(w - 1)
		// }
		// oldx = e.pageX
	}

	const changeStatesForUpperLayer = (p, e) => {
		setParentWidth(p.clientWidth)
		setParentHeight(p.clientHeight)
		setL(e.offsetLeft)
		setT(e.offsetTop)
		setW(e.clientWidth)
		setH(e.clientHeight)
	}

	const addEvent = (e, func) =>
		document.getElementById(e).addEventListener('drag', func)

	useEffect(() => {
		if (activeElement !== '' && activeElement !== activePage) {
			let e = document.getElementById(activeElement)
			if (e !== null) {
				let p = document.getElementById(activeElement).parentElement

				console.log('parnet wifht: ', p.clientWidth)
				console.log('parnet height: ', p.clientHeight)
				console.log('e client left: ', e.clientLeft)
				console.log('e client Top: ', e.clientTop)
				console.log('e width: ', e.clientWidth)
				console.log('e height: ', e.clientHeight)
				console.log('e margin left: ', e.style.marginLeft)
				console.log('e margin top: ', e.style.marginTop)
				console.log('e offsetleft: ', e.offsetLeft)
				console.log('e offsetTop: ', e.offsetTop)

				changeStatesForUpperLayer(p, e)
				console.log(l, t, w, h, parentWidth, parentHeight)

				const upperLayer = document.getElementById('ul-container')

				if (upperLayer !== null) {
					upperLayer.remove()
				}

				const element = document.createElement('div')

				element.innerHTML += `<div id='ul-container' class='ul-container'>
			<div
			style="width: ${e.clientWidth}px; height: ${e.clientHeight}px; margin-left: ${
					e.offsetLeft
				}px; margin-top: ${e.offsetTop}px;"
					class='upper-layer'
					id='upper-layer'>
					<div
						draggable='true'
						id='mover'
						class='mover'
						style="left: ${(e.clientWidth - 10) / 2.1}px">
						<div class='line'></div>
					</div>
					<div
						draggable='true'
						id='tl'
						class='top-left size'></div>
					<div
						draggable='true'
						id='tr'
						class='top-right'></div>
					<div
						draggable='true'
						id='bl'
						class='bottom-left'></div>
					<div
						draggable='true'
						id='br'
						class='bottom-right'></div>
					<div
						draggable='true'
						class='top'
						id='upperlayer-t'
						style="left: ${(e.clientWidth - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='bottom'
						id='upperlayer-b'
						style="left: ${(e.clientWidth - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='left'
						id='upperlayer-l'
						style="top: ${(e.clientHeight - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='right'
						id='upperlayer-r'
						style="top: ${(e.clientHeight - 10) / 2.1}px"></div>
				</div>
			</div>`

				p.appendChild(element)

				addEvent('mover', move)

				addEvent('tl', widthHeight)
				addEvent('tr', widthHeight)
				addEvent('bl', widthHeight)
				addEvent('br', widthHeight)

				addEvent('upperlayer-l', WidthChange)
				addEvent('upperlayer-r', WidthChange)
				addEvent('upperlayer-b', HeightChange)
				addEvent('upperlayer-t', HeightChange)
			}
		}
	}, [activePage, pages, activeElement, width, render])

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div className={render ? 'ok' : ''}>
				<div
					className='pages-div'
					id={activePage}
					style={{
						width: `${width}px`,
						minWidth: '300px',
						marginLeft:
							width < 720
								? '15%'
								: width < 1000
								? '10%'
								: width < 1500
								? '5%'
								: '0%'
					}}>
					{showElements(pages[activePage])}
				</div>
			</div>
		</div>
	)
}

export default Page
