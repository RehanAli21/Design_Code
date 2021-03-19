import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

let z = false
let x = false
let top = 0
let left = 0
let scale = 0.8
let oldx = 0
let oldy = 0
//This compoenent controls page.
const Page = () => {
	const { pages, activePage, width, render } = useContext(PageContext)

	//for zooming functionality by mouse wheel
	document.addEventListener('wheel', e => {
		if (z === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				if (e.deltaY === -100) {
					if (scale < 2) scale += 0.01
				} else if (e.deltaY === 100) {
					if (scale > 0.5) scale -= 0.01
				}
				ele.style.transform = `scale(${scale})`
			}
		}
	})

	//for darg functionality by mouse move
	document.addEventListener('mousemove', e => {
		const ele = document.querySelector('.pages-div')
		if (ele && z === true && x === true) {
			if (oldy > e.pageY) {
				top -= 5
			} else if (oldy < e.pageY) {
				top += 5
			}

			if (oldx < e.pageX) {
				left += 5
			} else if (oldx > e.pageX) {
				left -= 5
			}

			ele.style.top = `${top * scale}px`
			ele.style.left = `${left * scale}px`

			oldy = e.pageY
			oldx = e.pageX
		}
	})

	//for zoom and drag functionality by keyboard
	document.addEventListener('keydown', e => {
		//for enabling zoom
		if (e.key === 'z' && z === false) {
			z = true
		}
		//for enabling drag
		if (e.key === 'x' && x === false) {
			x = true
		}
		//for reseting zoom and drag
		if (e.key === 'r' && z === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				ele.style.transform = 'scale(0.8)'
				if (x === true) {
					ele.style.left = '0px'
					ele.style.top = '0px'
				}
			}
		}
		//for zooming the page element
		if (e.key === 'ArrowUp' && scale < 2 && z === true && x === false) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				scale += 0.01
				ele.style.transform = `scale(${scale})`
			}
		} else if (e.key === 'ArrowDown' && scale > 0.5 && z === true && x === false) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				scale -= 0.01
				ele.style.transform = `scale(${scale})`
			}
		}
		//for draging the page element
		if (e.key === 'ArrowUp' && z === true && x === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				top -= 5
				ele.style.top = `${top * scale}px`
			}
		} else if (e.key === 'ArrowDown' && z === true && x === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				top += 5
				ele.style.top = `${top * scale}px`
			}
		} else if (e.key === 'ArrowLeft' && z === true && x === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				left -= 5
				ele.style.left = `${left * scale}px`
			}
		} else if (e.key === 'ArrowRight' && z === true && x === true) {
			const ele = document.querySelector('.pages-div')
			if (ele) {
				left += 5
				ele.style.left = `${left * scale}px`
			}
		}
	})
	//for disabling zoom and drag
	document.addEventListener('keyup', e => {
		//for disabling zoom
		if (e.key === 'z') {
			z = false
		}
		//for disabling drag
		if (e.key === 'x') {
			x = false
		}
	})

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
			 * second parameter giving attributes for elements
			 * third parameter for children, if there is children do recursion
			 */
			if (e[0] === 'div') {
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
									: e[1].styles.xlarge,
						},
						e[2].length > 0 ? showElements(e[2]) : null
					)
				)
			} else if (e[0] === 'input') {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							type: e[1].type,
							placeholder: e[1].placeholder,
							style:
								width < 540
									? e[1].styles.small
									: width < 720
									? e[1].styles.medium
									: width < 960
									? e[1].styles.large
									: e[1].styles.xlarge,
						},
						null
					)
				)
			}
		})

		return temp
	}

	return (
		<div className={render ? 'ok main-div' : 'main-div'}>
			<div
				className='pages-div'
				id={activePage}
				style={{
					width: `${width}px`,
					minWidth: '300px',
					marginLeft: width < 720 ? '15%' : width < 1000 ? '10%' : width < 1500 ? '5%' : '0%',
				}}>
				{showElements(pages[activePage])}
			</div>
		</div>
	)
}

export default Page
