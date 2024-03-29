import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'
import {
	goLeftEffect1,
	goLeftEffect1NoLoop,
	goLeftEffect2,
	goLeftEffect2NoLoop,
	goLeftEffect3,
	goLeftEffect3NoLoop,
	goLeftEffect4,
	goLeftEffect4NoLoop,
	goLeftEffect5,
	goLeftEffect5NoLoop,
	goLeftEffect6,
	goLeftEffect6NoLoop,
	goRightEffect1,
	goRightEffect1NoLoop,
	goRightEffect2,
	goRightEffect2NoLoop,
	goRightEffect3,
	goRightEffect3NoLoop,
	goRightEffect4,
	goRightEffect4NoLoop,
	goRightEffect5,
	goRightEffect5NoLoop,
	goRightEffect6,
	goRightEffect6NoLoop,
} from './SliderFunctions'

let move = false
let zoom = false
let oldx = 0
let oldy = 0
let slidersData = {}
//This compoenent controls page.
const Page = () => {
	const {
		pages,
		activePage,
		sBreakPoint,
		mBreakPoint,
		lBreakPoint,
		setActiveElement,
		width,
		height,
		pageBC,
		inPageActiveElement,
		showFullScreen,
		setShowFullScreen,
		setMsgBoxMsg,
		setShowMsgBox,
	} = useContext(PageContext)

	//for show / hide fullscreen
	document.addEventListener('keypress', e => {
		if (showFullScreen && (e.key === 'f' || e.key === 'F')) {
			setShowFullScreen(!showFullScreen)
		}
	})

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
	const onHoverStyle = (id, style, hoverTargets) => {
		setStyle(id, style) //for own hover style
		//for target hover style
		for (const e in hoverTargets) {
			setStyle(hoverTargets[e].id, hoverTargets[e].style)
		}
	}
	//For applying click styles on elements
	const onClickStyle = (id, style, clickTargets) => {
		setStyle(id, style) //for own click style

		for (const e in clickTargets) {
			if (clickTargets[e].evenClickStyleRemover === 'yes') {
				const ele = document.getElementById(clickTargets[e].id)

				if (ele) {
					const classes = ele.classList
					let isApplied = ''

					classes.forEach(e => {
						if (e === 'clickTargetNotApplied') isApplied = 'notApplied'
						else if (e === 'clickTargetApplied') isApplied = 'applied'
					})

					if (isApplied === 'applied') {
						ele.classList.remove('clickTargetApplied')
						ele.classList.add('clickTargetNotApplied')
					} else if (isApplied === 'notApplied') {
						ele.classList.remove('clickTargetNotApplied')
						ele.classList.add('clickTargetApplied')
					}

					if (isApplied === 'applied') {
						for (const s in clickTargets[e].style) {
							if (s !== 'transitionDuration') ele.style[s] = ''
						}
					} else if (isApplied === 'notApplied') {
						setStyle(clickTargets[e].id, clickTargets[e].style)
					}
				}
			} else if (clickTargets[e].evenClickStyleRemover === 'no') {
				setStyle(clickTargets[e].id, clickTargets[e].style) //for target click style
			}
		}

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
	const onHoverLeaveStyle = (id, hoverStyle, normalStyle, hoverTargets) => {
		hoverLeaveStyle(id, hoverStyle, normalStyle) //for own hoverLeave
		//For Target element hoverleave
		for (const e in hoverTargets) {
			const returnArr = findTargetStyle(pages[activePage], hoverTargets[e].id)
			if (returnArr[0] === true) hoverLeaveStyle(hoverTargets[e].id, hoverTargets[e].style, returnArr[1])
		}
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
					width < sBreakPoint
						? arr[i][1].styles.small
						: width < mBreakPoint
						? arr[i][1].styles.medium
						: width < lBreakPoint
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

	useEffect(() => {
		findSliders(pages[activePage])
	}, [pages, activePage])

	const findSliders = arr => {
		arr.forEach(e => {
			if (e[0] === 'section' && e[1].type === 'main') {
				slidersData[e[1].id] = e[1].activeSlide
			} else if (e[2] && e[2].length > 0) {
				findSliders(e[2])
			}
		})
	}

	const sliderButton = (type, id) => {
		if (!inPageActiveElement) {
			const details = sliderDetails(pages[activePage], id)
			if (details) {
				if (type === 'sliderRightButton') {
					if (details[2] === 'effect1') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect1(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect1(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect1(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect1NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect2') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect2(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect2(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect2(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect2NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect3') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect3(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect3(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect3(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect3NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect4') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect4(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect4(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect4(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect4NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect5') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect5(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect5(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect5(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect5NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect6') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goRightEffect6(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goRightEffect6(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goRightEffect6(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goRightEffect6NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					}
				} else if (type === 'sliderLeftButton') {
					if (details[2] === 'effect1') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect1(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect1(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect1(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect1NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect2') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect2(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect2(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect2(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect2NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect3') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect3(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect3(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect3(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect3NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect4') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect4(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect4(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect4(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect4NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect5') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect5(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect5(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect5(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect5NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					} else if (details[2] === 'effect6') {
						if (details[3] === 'yes') {
							if (details[4] === 'yes') {
								goLeftEffect6(slidersData[details[6]], details[1], details[6], slidersData)
								let interval = setInterval(
									() => goLeftEffect6(slidersData[details[6]], details[1], details[6], slidersData),
									parseInt(details[5])
								)
								setTimeout(() => clearInterval(interval), parseInt(details[5]) * (details[1].length * 2))
							} else if (details[4] === 'no') {
								goLeftEffect6(slidersData[details[6]], details[1], details[6], slidersData)
							}
						} else if (details[3] === 'no') {
							goLeftEffect6NoLoop(slidersData[details[6]], details[1], details[6], slidersData)
						}
					}
				}
			}
		} else {
			setMsgBoxMsg('Slider button would not work, if inPageSelection is on')
			setShowMsgBox(true)
		}
	}

	const sliderDetails = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][2] && arr[i][2].length > 0) {
				for (let j = 0; j < arr[i][2].length; j++) {
					if (arr[i][2][j][1].id === id) {
						const slidesId = []
						for (let k = 0; k < arr[i][2].length; k++) {
							if (arr[i][2][k][0] === 'section') {
								slidesId.push(arr[i][2][k][1].id)
							}
						}
						return [
							arr[i][1].activeSlide,
							slidesId,
							arr[i][1].effect,
							arr[i][1].loop,
							arr[i][1].autoplay,
							arr[i][1].autoplayTiming,
							arr[i][1].id,
						]
					}
				}
				const found = sliderDetails(arr[i][2], id)
				if (found) return found
			}
		}
		return false
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
					temp.push(showElementsHelper(e, 'noType', 'children'))
				} else if (e[0] === 'section') {
					temp.push(showElementsHelper(e, 'noType', 'children'))
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
								onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle, e[1].hoverTargets),
								onMouseLeave: () =>
									onHoverLeaveStyle(
										e[1].id,
										e[1].hoverStyle,
										width < sBreakPoint
											? e[1].styles.small
											: width < mBreakPoint
											? e[1].styles.medium
											: width < lBreakPoint
											? e[1].styles.large
											: e[1].styles.xlarge,
										e[1].hoverTargets
									),
								onMouseDown: () => onClickStyle(e[1].id, e[1].clickStyle, e[1].clickTargets),
								onMouseUp: () =>
									onClickLeaveStyle(
										e[1].id,
										e[1].clickStyle,
										width < sBreakPoint
											? e[1].styles.small
											: width < mBreakPoint
											? e[1].styles.medium
											: width < lBreakPoint
											? e[1].styles.large
											: e[1].styles.xlarge
									),
								style:
									width < sBreakPoint
										? e[1].styles.small
										: width < mBreakPoint
										? e[1].styles.medium
										: width < lBreakPoint
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

					temp.push(
						newElement[1].type === 'sliderRightButton' || newElement[1].type === 'sliderLeftButton'
							? React.createElement(
									newElement[0],
									{
										key: uuid(),
										id: newElement[1].id,
										className: newElement[1].class,
										onClick: () => sliderButton(newElement[1].type, newElement[1].id),
										onMouseOver: () =>
											onHoverStyle(newElement[1].id, newElement[1].hoverStyle, newElement[1].hoverTargets),
										onMouseLeave: () =>
											onHoverLeaveStyle(
												newElement[1].id,
												newElement[1].hoverStyle,
												width < sBreakPoint
													? newElement[1].styles.small
													: width < mBreakPoint
													? newElement[1].styles.medium
													: width < lBreakPoint
													? newElement[1].styles.large
													: newElement[1].styles.xlarge,
												newElement[1].hoverTargets
											),
										onMouseDown: () =>
											onClickStyle(newElement[1].id, newElement[1].clickStyle, newElement[1].clickTargets),
										onMouseUp: () =>
											onClickLeaveStyle(
												newElement[1].id,
												newElement[1].clickStyle,
												width < sBreakPoint
													? newElement[1].styles.small
													: width < mBreakPoint
													? newElement[1].styles.medium
													: width < lBreakPoint
													? newElement[1].styles.large
													: newElement[1].styles.xlarge
											),
										style:
											width < sBreakPoint
												? newElement[1].styles.small
												: width < mBreakPoint
												? newElement[1].styles.medium
												: width < lBreakPoint
												? newElement[1].styles.large
												: newElement[1].styles.xlarge,
									},
									newElement[2] && newElement[2].length > 0 ? showElements(newElement[2]) : null
							  )
							: showElementsHelper(newElement, 'noType', 'children')
					)
				} else if (e[0] === 'text' && e[1].type !== 'a') {
					temp.push(showElementsHelper(e, 'type', 'text'))
				} else if (e[0] === 'text' && e[1].type === 'a') {
					temp.push(
						React.createElement(
							e[1].type,
							{
								key: uuid(),
								id: e[1].id,
								className: e[1].class,
								href: e[1].target,
								onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle, e[1].hoverTargets),
								onMouseLeave: () =>
									onHoverLeaveStyle(
										e[1].id,
										e[1].hoverStyle,
										width < sBreakPoint
											? e[1].styles.small
											: width < mBreakPoint
											? e[1].styles.medium
											: width < lBreakPoint
											? e[1].styles.large
											: e[1].styles.xlarge,
										e[1].hoverTargets
									),
								onMouseDown: () => onClickStyle(e[1].id, e[1].clickStyle, e[1].clickTargets),
								onMouseUp: () =>
									onClickLeaveStyle(
										e[1].id,
										e[1].clickStyle,
										width < sBreakPoint
											? e[1].styles.small
											: width < mBreakPoint
											? e[1].styles.medium
											: width < lBreakPoint
											? e[1].styles.large
											: e[1].styles.xlarge
									),
								style:
									width < sBreakPoint
										? e[1].styles.small
										: width < mBreakPoint
										? e[1].styles.medium
										: width < lBreakPoint
										? e[1].styles.large
										: e[1].styles.xlarge,
							},
							e[1].text
						)
					)
				} else if (e[0] === 'img') {
					temp.push(showElementsHelper(e, 'noType', 'noChildren'))
				} else if (e[0] === 'select') {
					temp.push(showElementsHelper(e, 'noType', 'children'))
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
									width < sBreakPoint
										? e[1].styles.small
										: width < mBreakPoint
										? e[1].styles.medium
										: width < lBreakPoint
										? e[1].styles.large
										: e[1].styles.xlarge,
							},
							e[1].text
						)
					)
				} else if (e[0] === 'i') {
					temp.push(showElementsHelper(e, 'noType', 'noChildren'))
				} else if (e[0] === 'list') {
					temp.push(showElementsHelper(e, 'type', 'children'))
				} else if (e[0] === 'list Item') {
					temp.push(showElementsHelper(e, 'type', 'children'))
				}
			}
		})

		return temp
	}
	//This function used for reducing code
	const showElementsHelper = (e, type, choice) => {
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
				className: e[1].class,
				onMouseOver: () => onHoverStyle(e[1].id, e[1].hoverStyle, e[1].hoverTargets),
				onMouseLeave: () =>
					onHoverLeaveStyle(
						e[1].id,
						e[1].hoverStyle,
						width < sBreakPoint
							? e[1].styles.small
							: width < mBreakPoint
							? e[1].styles.medium
							: width < lBreakPoint
							? e[1].styles.large
							: e[1].styles.xlarge,
						e[1].hoverTargets
					),
				onMouseDown: () => onClickStyle(e[1].id, e[1].clickStyle, e[1].clickTargets),
				onMouseUp: () =>
					onClickLeaveStyle(
						e[1].id,
						e[1].clickStyle,
						width < sBreakPoint
							? e[1].styles.small
							: width < mBreakPoint
							? e[1].styles.medium
							: width < lBreakPoint
							? e[1].styles.large
							: e[1].styles.xlarge
					),
				style:
					width < sBreakPoint
						? e[1].styles.small
						: width < mBreakPoint
						? e[1].styles.medium
						: width < lBreakPoint
						? e[1].styles.large
						: e[1].styles.xlarge,
			},
			choice === 'children' && e[2].length > 0 ? showElements(e[2]) : choice === 'text' ? e[1].text : null
		)
	}

	//////////////////////////////////////////////////
	//For controlling fullscreen
	document.addEventListener('keydown', e => {
		if (e.key === 'F' || e.key === 'f') {
			setShowFullScreen(false)
		}
	})

	const hideFullScreenTeller = () => {
		const ele = document.getElementById('fullscreen-teller')

		if (ele) {
			ele.style.display = 'none'
		}
	}
	setTimeout(hideFullScreenTeller, 2000)
	///////////////////////////////////////////////

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
			{showFullScreen ? (
				<div
					className='pages-div'
					id={activePage}
					onMouseLeave={hideFullScreenTeller}
					style={{
						backgroundColor: pageBC,
						width: `100vw`,
						Height: `100vh`,
						minHeight: '100vh',
						position: 'absolute',
						zIndex: '99999999',
						marginLeft: '0px',
						marginTop: '0px',
						top: '0px',
						left: '0px',
					}}>
					<div style={{ paddingTop: '0.1px' }}></div>
					{showElements(pages[activePage])}
					<div
						id='fullscreen-teller'
						style={{
							width: `300px`,
							padding: '15px 5px',
							position: 'absolute',
							zIndex: '999999991',
							marginLeft: '-150px',
							marginTop: '0px',
							top: '0px',
							left: '50%',
							boxShadow: '1px 3px 5px grey',
							textAlign: 'center',
							fontSize: '18px',
							fontWeight: 'bold',
							color: 'rgb(32, 144, 220)',
						}}>
						<p>Press (F) for to Full Screen</p>
					</div>
				</div>
			) : (
				<div
					className='pages-div'
					id={activePage}
					style={{
						backgroundColor: pageBC,
						width: `${width}px`,
						minHeight: `${height}px`,
						minWidth: '300px',
						transform: `scale(${scale}) translate(${tX}px, ${tY}px)`,
						marginLeft: width < mBreakPoint ? '15%' : width < 1000 ? '10%' : width < 1500 ? '5%' : '0%',
					}}>
					<div style={{ paddingTop: '0.1px' }}></div>
					{showElements(pages[activePage])}
				</div>
			)}
		</div>
	)
}

export default Page
