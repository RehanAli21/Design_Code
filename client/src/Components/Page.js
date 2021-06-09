import React, { useContext, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

let move = false
let zoom = false
let oldx = 0
let oldy = 0
//This compoenent controls page.
const Page = () => {
	const { pages, activePage, setActiveElement, width, height, pageBC, inPageActiveElement } = useContext(PageContext)

	const [scale, setScale] = useState(0.8)
	const [tX, setTX] = useState(0)
	const [tY, setTY] = useState(0)

	const enableMove = () => {
		if (!move) move = true
	}
	const disableMove = () => {
		if (move) move = false
	}
	const moveMe = e => {
		if (oldx < e.pageX && move) {
			setTX(tX + 10)
		} else if (oldx > e.pageX && move) {
			setTX(tX - 10)
		}

		if (oldy > e.pageY && move) {
			setTY(tY - 10)
		} else if (oldy < e.pageY && move) {
			setTY(tY + 10)
		}

		oldx = e.pageX
		oldy = e.pageY
	}
	const zoomMe = e => {
		if (e.deltaY === -100) {
			setScale(scale + 0.05)
		} else if (e.deltaY === 100) {
			setScale(scale - 0.05)
		}
	}
	const scaleTranslatePage = e => {
		if (e.key === 'z' && zoom === false) {
			zoom = true
		}
		if (e.key === 'x' && move === false) {
			move = true
		}

		//For reseting zoom and move
		if (zoom && e.key === 'r') {
			resetMe()
		}

		//For Zoom
		if (zoom && !move && e.key === 'ArrowUp' && scale < 2) {
			setScale(scale + 0.05)
		} else if (zoom && !move && e.key === 'ArrowDown' && scale > 0.2) {
			setScale(scale - 0.05)
		}

		//For Move
		if (zoom && move && e.key === 'ArrowUp') {
			setTY(tY - 10)
		} else if (zoom && move && e.key === 'ArrowDown') {
			setTY(tY + 10)
		} else if (zoom && move && e.key === 'ArrowLeft') {
			setTX(tX - 10)
		} else if (zoom && move && e.key === 'ArrowRight') {
			setTX(tX + 10)
		}
	}
	const disableScaleTranslate = e => {
		if (e.key === 'z' && zoom) zoom = false
		if (e.key === 'x' && move) move = false
	}
	const resetMe = () => {
		setScale(0.8)
		setTX(0)
		setTY(0)
	}

	//For applying hover styles on elements
	const onHoverStyle = (id, style, targetId, targetStyle) => {
		setStyle(id, style) //for own hover style
		setStyle(targetId, targetStyle) //for target hover style
	}
	//For applying click styles on elements
	const onClickStyle = (id, style, targetId, targetStyle) => {
		setStyle(id, style) //for own click style
		setStyle(targetId, targetStyle) //for target click style
		if (inPageActiveElement) setActiveElement(id)
	}

	//for click and hover style
	const setStyle = (id, style) => {
		const ele = document.getElementById(id)

		if (ele) {
			for (const e in style) {
				ele.style[e] = style[e]
			}
		}
	}

	//For reseting applied hover style on elements
	const onHoverLeaveStyle = (id, hoverStyle, normalStyle, targetId, targetHoverStyle) => {
		hoverLeaveStyle(id, hoverStyle, normalStyle) //for own hoverLeave
		//For Target element hoverleave
		const returnArr = findTargetStyle(pages[activePage], targetId)
		hoverLeaveStyle(targetId, targetHoverStyle, returnArr[1])
	}
	//helper function for abovee function
	const hoverLeaveStyle = (id, hoverStyle, normalStyle) => {
		const ele = document.getElementById(id)

		if (ele) {
			for (const e in hoverStyle) {
				if (normalStyle[e] !== undefined) {
					ele.style[e] = normalStyle[e]
				} else {
					ele.style[e] = ''
				}
			}
		}
	}
	const findTargetStyle = (arr, id) => {
		const found = [false, {}]
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				return [
					true,
					width < 540
						? arr[i][1].styles.small
						: width < 720
						? arr[i][1].styles.medium
						: width < 960
						? arr[i][1].styles.large
						: arr[i][1].styles.xlarge,
				]
			} else if (arr[i][2]) {
				const temp = findTargetStyle(arr[i][2], id)
				if (temp[0]) return temp
			}
		}
		return found
	}

	//For reseting applied click style on elements
	const onClickLeaveStyle = (id, clickStyle, normalStyle) => {
		const ele = document.getElementById(id)

		if (ele) {
			for (const e in clickStyle) {
				if (normalStyle[e] !== undefined) {
					ele.style[e] = normalStyle[e]
				} else {
					ele.style[e] = ''
				}
			}
		}
	}

	//For showing elements into a div which acts
	//as body element/tag, using recursion
	const showElements = arr => {
		//Variable for storing elments
		const temp = []
		//Iterating each element
		arr.forEach(e => {
			//checking if element is array or not (for button's text)
			if (!Array.isArray(e)) temp.push(e)
			else {
				if (e[0] === 'div') {
					temp.push(showElementsHelper(e, 'noType', 'children', 'class'))
				} else if (e[0] === 'input') {
					temp.push(
						React.createElement(
							e[0],
							{
								key: uuid(),
								id: e[1].id,
								type: e[1].type,
								placeholder: e[1].placeholder,
								maxLength: e[1].maxLength === -1 ? 9999 : e[1].maxLength,
								min: e[1].min,
								max: e[1].max,
								className: e[1].class,
								onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle, e[1].hoverTarget, e[1].hTargetStyle),
								onMouseLeave: () =>
									onHoverLeaveStyle(
										e[1].id,
										e[1].hoverStyle,
										width < 540
											? e[1].styles.small
											: width < 720
											? e[1].styles.medium
											: width < 960
											? e[1].styles.large
											: e[1].styles.xlarge,
										e[1].hoverTarget,
										e[1].hTargetStyle
									),
								onMouseDown: () => onClickStyle(e[1].id, e[1].clickStyle, e[1].clickTarget, e[1].cTargetStyle),
								onMouseUp: () =>
									onClickLeaveStyle(
										e[1].id,
										e[1].clickStyle,
										width < 540
											? e[1].styles.small
											: width < 720
											? e[1].styles.medium
											: width < 960
											? e[1].styles.large
											: e[1].styles.xlarge
									),
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
				} else if (e[0] === 'button') {
					//This logic applied to add icons in the button
					let children = [] //for storing children of button element
					//checking if there is children of button element
					if (e[2].length > 0) {
						//assigning greater length to children for adding text
						children = new Array(e[2].length + 1)
						//iterating each element
						for (let i = 0, j = 0; i < children.length; i++) {
							//for adding text w.r.t indexOfText
							if (i === e[1].indexOfText) {
								children[i] = e[1].text
							} else {
								children[i] = e[2][j]
								j++
							}
						}
					} else if (e[2].length <= 0) {
						//if no children, then add text only
						children.push(e[1].text)
					}
					//new array to store element
					const newElement = []
					//copying element data into new Array
					e.forEach(e => newElement.push(e))
					//changing children of new Array
					newElement[2] = children

					temp.push(showElementsHelper(newElement, 'noType', 'children', 'class'))
				} else if (e[0] === 'text' && e[1].type !== 'a') {
					temp.push(showElementsHelper(e, 'type', 'text', 'class'))
				} else if (e[0] === 'text' && e[1].type === 'a') {
					temp.push(showElementsHelper(e, 'type', 'text', 'class'))
				} else if (e[0] === 'img') {
					temp.push(showElementsHelper(e, 'noType', 'noChildren', 'class'))
				} else if (e[0] === 'select') {
					temp.push(showElementsHelper(e, 'noType', 'children', 'class'))
				} else if (e[0] === 'option') {
					//The showElementsHelper does not used because,
					//this is different and small
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
							e[1].text
						)
					)
				} else if (e[0] === 'i') {
					temp.push(showElementsHelper(e, 'noType', 'noChildren', 'class'))
				} else if (e[0] === 'list') {
					temp.push(showElementsHelper(e, 'type', 'children', 'class'))
				} else if (e[0] === 'list Item') {
					temp.push(showElementsHelper(e, 'type', 'children', 'noclass'))
				}
			}
		})

		return temp
	}
	//This function used for reducing code
	const showElementsHelper = (e, type, choice, className) => {
		/**
		 * Inserting elements into variable.
		 * Using React.createElement func for creating elements
		 * first parameter is element type
		 * second parameter giving attributes for elements
		 * third parameter for children, if there is children do recursion
		 */
		return React.createElement(
			type === 'type' ? e[1].type : e[0],
			{
				key: uuid(),
				id: e[1].id,
				className: className === 'class' ? e[1].class : '',
				onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle, e[1].hoverTarget, e[1].hTargetStyle),
				onMouseLeave: () =>
					onHoverLeaveStyle(
						e[1].id,
						e[1].hoverStyle,
						width < 540
							? e[1].styles.small
							: width < 720
							? e[1].styles.medium
							: width < 960
							? e[1].styles.large
							: e[1].styles.xlarge,
						e[1].hoverTarget,
						e[1].hTargetStyle
					),
				onMouseDown: () => onClickStyle(e[1].id, e[1].clickStyle, e[1].clickTarget, e[1].cTargetStyle),
				onMouseUp: () =>
					onClickLeaveStyle(
						e[1].id,
						e[1].clickStyle,
						width < 540
							? e[1].styles.small
							: width < 720
							? e[1].styles.medium
							: width < 960
							? e[1].styles.large
							: e[1].styles.xlarge
					),
				style:
					width < 540
						? e[1].styles.small
						: width < 720
						? e[1].styles.medium
						: width < 960
						? e[1].styles.large
						: e[1].styles.xlarge,
			},
			choice === 'children' && e[2].length > 0 ? showElements(e[2]) : choice === 'text' ? e[1].text : null
		)
	}

	return (
		<div
			onMouseDown={enableMove}
			onMouseUp={disableMove}
			onMouseMove={moveMe}
			onWheel={zoomMe}
			onKeyUp={disableScaleTranslate}
			onKeyDown={scaleTranslatePage}
			onDoubleClick={resetMe}
			tabIndex='0'
			className='main-div'>
			<div
				className='pages-div'
				id={activePage}
				style={{
					backgroundColor: pageBC,
					width: `${width}px`,
					minHeight: `${height}px`,
					minWidth: '300px',
					transform: `scale(${scale}) translate(${tX}px, ${tY}px)`,
					marginLeft: width < 720 ? '15%' : width < 1000 ? '10%' : width < 1500 ? '5%' : '0%',
				}}>
				<div style={{ paddingTop: '0.1px' }}></div>
				{showElements(pages[activePage])}
			</div>
		</div>
	)
}

export default Page
