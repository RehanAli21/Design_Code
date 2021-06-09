import React, { useContext, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	let oldDragOverElement = ''
	let oldDragElement = ''
	const { pages, setPages, activePage, activeElement, setActiveElement, setHistory, undoFunc } = useContext(PageContext)
	let dragedElement = ''
	let overDragElement = ''
	let ele = []

	//For making first character capital of string
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	//For changing Active Element
	const changeActiveElement = e => setActiveElement(e)

	//For moving elements up in siblings
	const levelUp = id => {
		//Assigning pages data into new variable
		const temp = Object.assign({}, pages)
		//calling function to move element up
		temp[activePage] = levelUpHelper(temp[activePage], id)
		//Assigning new data to pages data after moving element
		setPages(temp)
	}

	//Helper Function For moving elements up, using recursion
	const levelUpHelper = (arr, id) => {
		//For assigning data into varible
		const e = []
		//Array length > 1, then element can move up
		if (arr.length > 1) {
			//Iterating each element
			for (let i = 0; i < arr.length - 1; i++) {
				//if element found, then swape with the element
				//which is above the element.
				if (arr[i + 1][1].id === id) {
					let t = arr[i]
					arr[i] = arr[i + 1]
					arr[i + 1] = t
				}
				//inserting data into array
				e.push(arr[i])
			}
			//above code does'nt insert last element,
			//so inserting last element.
			e.push(arr[arr.length - 1])
		} else {
			//if Array length < 1, then insert that element
			arr.forEach(a => e.push(a))
		}

		//Doing recursion on each child on array
		e.forEach(ele => {
			//Checking if there is a child by child arr length
			if (ele[2] && ele[2].length > 0) {
				ele[2] = levelUpHelper(ele[2], id)
			}
		})

		return e
	}

	//For deleting elements
	const deleteMe = id => {
		//Assigning pages data into new variable
		const temp = Object.assign({}, pages)
		//calling function to delete element
		temp[activePage] = deleteHelper(temp[activePage], id, activePage)
		//Assigning new data to pages data after deleting element
		setPages(temp)

		if (id === activeElement) setActiveElement('')
	}
	//Helper Function For deleting elements, using recursion
	const deleteHelper = (arr, id, parentId) => {
		//For assigning data into varible
		const e = []
		//For undo functinality,
		//it track the index of deleted element
		let index = 0
		//Iterating each element of array
		arr.forEach(a => {
			//if element not found, find it into children
			//and insert data into array
			if (a[1].id !== id) {
				//Checks if there are children by length
				if (a[2] && a[2].length > 0) {
					a[2] = deleteHelper(a[2], id, a[1].id)
				}
				//inserting data into variable
				e.push(a)
			}
			//If element found seting History, for undo feature
			if (a[1].id === id) {
				setHistory(parentId, a, index)
				setActiveElement('')
			}
			//increamenting index after every child
			index++
		})
		//when all children iterated, then reseting index
		index = 0

		return e
	}

	//For hiding feature of elements list
	const showAndHideList = id => {
		const temp = Object.assign({}, pages)
		findAndChange(temp[activePage], 'showChildren', id)
		setPages(temp)
	}
	//For finding element and changing attribute value
	const findAndChange = (arr, attribute, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id && arr[i][2] && arr[i][2].length > 0) {
				arr[i][1][attribute] = !arr[i][1][attribute]
				return true
			} else if (arr[i][2]) {
				if (findAndChange(arr[i][2], attribute, id)) {
					return true
				}
			}
		}
	}

	//Adding event listeners for drag and makechild funtionality
	//This event trigger when user drag an element
	document.addEventListener('dragstart', e => {
		const id = e.target.id
		//checking if this element is the element which uses drag and makeChild funtionality
		//by special identifier which is putting in the elemnt's id
		if (id && id.search('---li')) {
			const temp = id.split('---')
			if (oldDragElement !== temp[0]) {
				dragedElement = temp[0]
				oldDragElement = temp[0]
			}
		}
	})
	//This event trigger when an element is over another element
	document.addEventListener('dragover', e => {
		const id = e.target.id

		//checking if this element is the element which uses drag and makeChild funtionality
		//by special identifier which is putting in the elemnt's id
		if (id && id.search('---')) {
			const temp = id.split('---')
			//for indicating the hovered element
			if (temp[0] !== activePage) {
				document.getElementById(temp[0] + '---li').style.backgroundColor = 'red'
				document.getElementById(temp[0] + '---p').style.backgroundColor = 'red'
				document.getElementById(temp[0] + '---arrow').style.backgroundColor = 'red'
				document.getElementById(temp[0] + '---x').style.backgroundColor = 'red'
				document.getElementById(temp[0] + '---li').style.color = 'white'
				document.getElementById(temp[0] + '---p').style.color = 'white'
				document.getElementById(temp[0] + '---arrow').style.color = 'white'
				document.getElementById(temp[0] + '---x').style.color = 'white'
			} else if (temp[0] === activePage) {
				document.getElementById(temp[0] + '---').style.backgroundColor = 'red'
				document.getElementById(temp[0] + '---').style.color = 'white'
			}
			//for setting dragedElement
			//checking if this element is not already active with the help of oldDragOverElement
			if (temp[0] !== oldDragOverElement) {
				overDragElement = temp[0]
				oldDragOverElement = temp[0]
			}
		}
	})
	//This event triggers when an element leave the hovering
	document.addEventListener('dragleave', e => {
		const id = e.target.id
		//checking if this element is the element which uses drag and makeChild funtionality
		//by special identifier which is putting in the elemnt's id
		if (id && id.search('---')) {
			const temp = id.split('---')
			//for normalize the style, which was changed by dragOver Event
			if (temp[0] !== activePage) {
				document.getElementById(temp[0] + '---li').style.backgroundColor = ''
				document.getElementById(temp[0] + '---p').style.backgroundColor = ''
				document.getElementById(temp[0] + '---arrow').style.backgroundColor = ''
				document.getElementById(temp[0] + '---x').style.backgroundColor = ''
				document.getElementById(temp[0] + '---li').style.color = ''
				document.getElementById(temp[0] + '---p').style.color = ''
				document.getElementById(temp[0] + '---arrow').style.color = ''
				document.getElementById(temp[0] + '---x').style.color = ''
			} else if (temp[0] === activePage) {
				document.getElementById(temp[0] + '---').style.backgroundColor = ''
				document.getElementById(temp[0] + '---').style.color = ''
			}
		}
	})

	const makeParentChild = () => {
		//checking dragedElement and overDragElement is not empty and small to each other
		if (dragedElement !== '' && overDragElement !== '' && dragedElement !== overDragElement) {
			const child = document.getElementById(dragedElement)
			const parent = document.getElementById(overDragElement)

			if (parent && child) {
				if (parent.tagName === 'SELECT' && child.tagName !== 'OPTION') return
				if ((parent.tagName === 'OL' || parent.tagName === 'UL') && child.tagName !== 'LI') return
				if (parent.tagName === 'BUTTON' && child.tagName !== 'I') return
			}
			if (parent) {
				if (
					parent.tagName === 'INPUT' ||
					parent.tagName === 'H1' ||
					parent.tagName === 'H2' ||
					parent.tagName === 'H3' ||
					parent.tagName === 'H4' ||
					parent.tagName === 'H5' ||
					parent.tagName === 'A' ||
					parent.tagName === 'P' ||
					parent.tagName === 'IMG' ||
					parent.tagName === 'I'
				) {
					return
				}
			}

			//using function for checking, weather the dragedElement is not parent element
			const found = findIfChildIsParent()
			//if found is false then dragedElement is not parent Element
			if (!found) {
				//storing pages data into temp variable
				const temp = Object.assign({}, pages)
				//using function to find dragedElement in temp
				findChild(temp[activePage], dragedElement)

				//checking if element is found
				if (ele.length > 0) {
					//using function for filtering temp's children
					temp[activePage] = removeChild(temp[activePage], dragedElement)

					//if overDragElement(parent element) is top level element,
					//then simply add it into top level children
					if (overDragElement === activePage) {
						temp[activePage].push(ele)
					} else if (overDragElement !== activePage) {
						//using function for inserting the element to it's position
						findAndInsert(temp[activePage], overDragElement, ele)
					}
					//ele become empty after using element in it
					ele = []
					//now setting pages new data
					setPages(temp)
					//empty the dragedElement and overDrageElement after using them
					dragedElement = ''
					overDragElement = ''
				}
			}
		}
	}

	//for checking if the child is not hover by it's parent
	const findIfChildIsParent = () => {
		//finding element by it's id which is stored in overDragElement
		const ele = document.getElementById(overDragElement)
		//checking if there is a element
		if (ele) {
			//setting parent of the child
			let parent = ele.parentElement
			//iterating over parent and it's parent
			while (parent && parent.id !== activePage && parent.id !== '') {
				//if dragedElement is the parent element then return true
				if (parent.id === dragedElement) return true
				//if parent element has a parent then setting it's parent
				if (parent.parentElement) parent = parent.parentElement
			}
		}
		//returning false if child is not hovered by it's parent
		return false
	}

	//for finding the child
	const findChild = (arr, id) => {
		//iterating over elements
		arr.forEach(e => {
			//if element's id = id, then it's the element we are finding
			if (e[1].id === id) {
				ele = e //storing element into global variable ele
				return true
			} else if (e[2]) {
				const found = findChild(e[2], id)
				if (found) return true
			}
		})
		return false
	}

	//for removing child
	const removeChild = (arr, id) => {
		const data = [] //for storing elements
		//iterating over elements
		arr.forEach(e => {
			//if element's id is not the param id and
			//if there is children of this element
			if (e[1].id !== id && e[2]) {
				//storing children after filtering
				const children = removeChild(e[2], id)
				//storing elmenet
				const temp = e
				//chaning stored element's children to new children
				temp[2] = children
				//storing in main array
				data.push(temp)
			} else if (e[1].id !== id) {
				data.push(e)
			}
		})
		//return the filtered array
		return data
	}

	const findAndInsert = (children, id, element) => {
		//Iterating each child in children array
		children.forEach(child => {
			//if parent found by id, then insert element into children
			if (child[2] && child[1].id === id) {
				child[2].push(element)
				return true
			}
			//else if there is children, then find into children recusively
			else if (child[2] && child[2].length > 0) {
				if (findAndInsert(child[2], id, element)) return true
			}
		})
	}

	//For making list of elements, and showing the list
	const showLayers = data => {
		return (
			<ul className='show-ul'>
				{data.map(e => {
					return (
						<li draggable={true} onDragEnd={makeParentChild} id={e[1].id + '---li'} key={uuid()}>
							{e[0] === 'button' ||
							e[0] === 'div' ||
							e[0] === 'select' ||
							e[0] === 'list' ||
							e[0] === 'list Item' ? (
								<button onClick={() => showAndHideList(e[1].id)} className='layer-show'>
									{e[2] && e[1].showChildren && e[2].length > 0 ? '▼' : '▶'}
								</button>
							) : (
								<button className='no-layer'></button>
							)}
							<p
								id={e[1].id + '---p'}
								className={e[1].id === activeElement ? 'bg-blue ' : ''}
								onClick={() => changeActiveElement(`${e[1].id}`)}>
								{e[1].name}
							</p>
							<button id={e[1].id + '---arrow'} onClick={() => levelUp(`${e[1].id}`)} className='btn'>
								^
							</button>
							<button id={e[1].id + '---x'} onClick={() => deleteMe(`${e[1].id}`)} className='btn'>
								X
							</button>
							{e[2] && e[1].showChildren ? showLayers(e[2]) : null}
						</li>
					)
				})}
			</ul>
		)
	}

	return (
		<div className='layers'>
			<div>
				<p
					draggable={true}
					id={activePage + '---'}
					className={activePage === activeElement ? 'bg-blue ' : ''}
					onClick={() => setActiveElement(activePage)}>
					{toCapitalize(activePage)}
				</p>
				<button onClick={undoFunc}>U</button>
			</div>
			{showLayers(pages[activePage])}
		</div>
	)
}

export default Layers
