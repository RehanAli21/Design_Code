import React, { useContext, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

let move = false
let zoom = false
let oldx = 0
let oldy = 0
//This compoenent controls page.
const Page = () => {
	const { pages, activePage, width, height, pageBC } = useContext(PageContext)

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
	const onHoverStyle = (id, style) => {
		const ele = document.getElementById(id)

		if (ele) {
			for (const e in style) {
				ele.style[e] = style[e]
			}
		}
	}
	//For reseting applied hover style on elements
	const onHoverLeaveStyle = (id, hoverStyle, normalStyle) => {
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

	const onClickStyle = () => console.log('clicked')
	const onClickLeaveStyle = () => console.log('not clicked')

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
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
							maxLength: e[1].maxLength === 0 ? 1000 : e[1].maxLength,
							min: e[1].min,
							max: e[1].max,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'text' && e[1].type !== 'a') {
				temp.push(
					React.createElement(
						e[1].type,
						{
							key: uuid(),
							id: e[1].id,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'text' && e[1].type === 'a') {
				temp.push(
					React.createElement(
						e[1].type,
						{
							key: uuid(),
							id: e[1].id,
							href: '#',
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'img') {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							src: e[1].src,
							alt: e[1].alt,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'select') {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'option') {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'list') {
				temp.push(
					React.createElement(
						e[1].type,
						{
							key: uuid(),
							id: e[1].id,
							className: e[1].class,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			} else if (e[0] === 'list Item') {
				temp.push(
					React.createElement(
						e[1].type,
						{
							key: uuid(),
							id: e[1].id,
							onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle),
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
										: e[1].styles.xlarge
								),
							onMouseDown: onClickStyle,
							onMouseUp: onClickLeaveStyle,
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
			}
		})

		return temp
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
					height: `${height}px`,
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
