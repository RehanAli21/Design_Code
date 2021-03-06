import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

let oldx = 0
let oldy = 0
let prevActiveElement = ''
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
	let parent = ''

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
		if (e.pageX > oldx) {
			if (width < parentWidth) setW(w + 1)
		} else if (e.pageX < oldx) {
			if (width >= 0) setW(w - 1)
		}

		if (e.pageY > oldy) {
			if (h < parentHeight) setH(h + 1)
		} else if (e.pageY < oldy) {
			if (h >= 0) setH(h - 1)
		}

		oldy = e.pageY
		oldx = e.pageX
	}

	const HeightChange = e => {
		if (e.pageY > oldy) {
			if (h < parentHeight) setH(h + 1)
		} else if (e.pageY < oldy) {
			if (h >= 0) setH(h - 1)
		}

		oldy = e.pageY
	}

	const WidthChange = e => {
		if (e.pageX > oldx) {
			if (w < parentWidth) setW(w + 1)
		} else if (e.pageX < oldx) {
			if (w >= 0) setW(w - 1)
		}
		oldx = e.pageX
	}

	useEffect(() => {
		findParent(activePage, pages[activePage], activeElement)
		if (parent !== '' && activeElement !== '') {
			let p = document.getElementById(parent)
			let e = document.getElementById(activeElement)

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
			setParentWidth(p.clientWidth)
			setParentHeight(p.clientHeight)
			setL(e.offsetLeft)
			setT(e.offsetTop)
			setW(e.clientWidth)
			setH(e.clientHeight)

			const upperLayer = document.getElementById('ul-container')

			if (upperLayer !== null) {
				upperLayer.remove()
			}

			e.innerHTML += `<div id='ul-container' class='ul-container'>
				<div
					style="width: ${w}px; height: ${h}px; margin-left: ${l}px; margin-top: ${t}px;"
					class='upper-layer'
					id='upper-layer'>
					<div
						draggable='true'
						id='mover'
						class='mover'
						style="left: ${(w - 10) / 2.1}px">
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
						style="left: ${(w - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='bottom'
						style="left: ${(w - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='left'
						style="top: ${(h - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='right'
						style="top: ${(h - 10) / 2.1}px"></div>
				</div>
			</div>`

			document.getElementById('mover').addEventListener('drag', move)

			document.getElementById('tl').addEventListener('drag', widthHeight)

			document.getElementById('tr').addEventListener('drag', widthHeight)
			document.getElementById('bl').addEventListener('drag', widthHeight)
			document.getElementById('br').addEventListener('drag', widthHeight)
		}
	}, [activePage, pages, activeElement])

	const findParent = (parentId, arr, id) => {
		arr.forEach(element => {
			if (element[1].id === id) {
				parent = parentId
				return true
			} else if (element[2].length > 0) {
				if (findParent(element[1].id, element[2], id)) return true
			}
		})
	}

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
