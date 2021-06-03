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
			if (arr[i][1].id === id) {
				arr[i][1][attribute] = !arr[i][1][attribute]
				return true
			} else if (arr[i][2]) {
				if (findAndChange(arr[i][2], attribute, id)) {
					return true
				}
			}
		}
	}

	document.addEventListener('dragstart', e => {
		const id = e.target.id
		if (id && id.search('---li')) {
			const temp = id.split('---')
			if (oldDragElement !== temp[0]) {
				dragedElement = temp[0]
				oldDragElement = temp[0]
			}
		}
	})

	document.addEventListener('dragover', e => {
		const id = e.target.id
		if (id && id.search('---')) {
			const temp = id.split('---')
			document.getElementById(temp[0] + '---li').style.backgroundColor = 'red'
			document.getElementById(temp[0] + '---p').style.backgroundColor = 'red'
			document.getElementById(temp[0] + '---arrow').style.backgroundColor = 'red'
			document.getElementById(temp[0] + '---x').style.backgroundColor = 'red'
			if (temp[0] !== oldDragOverElement) {
				overDragElement = temp[0]
				oldDragOverElement = temp[0]
			}
		}
	})
	document.addEventListener('dragleave', e => {
		const id = e.target.id
		if (id && id.search('---')) {
			const temp = id.split('---')
			document.getElementById(temp[0] + '---li').style.backgroundColor = ''
			document.getElementById(temp[0] + '---p').style.backgroundColor = ''
			document.getElementById(temp[0] + '---arrow').style.backgroundColor = ''
			document.getElementById(temp[0] + '---x').style.backgroundColor = ''
		}
	})

	const makeParentChild = () => {
		if (dragedElement !== '' && overDragElement !== '' && dragedElement !== overDragElement) {
			const temp = Object.assign({}, pages)

			findChild(temp[activePage], dragedElement)

			if (ele.length > 0) {
				temp[activePage] = removeChild(temp[activePage], dragedElement)

				temp[activePage] = findAndInsert(temp[activePage], overDragElement, ele)

				ele = []

				setPages(temp)
				dragedElement = ''
				overDragElement = ''
			}
		}
	}

	const findChild = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				ele = e
				return true
			} else if (e[2]) {
				const ele = findChild(e[2], id)
				if (ele) return ele
			}
		})
		return false
	}

	const removeChild = (arr, id) => {
		const data = []

		arr.forEach(e => {
			if (e[1].id !== id && e[2]) {
				removeChild(e[2], id)
				data.push(e)
			}
		})

		return data
	}

	const findAndInsert = (children, id, element) => {
		//Iterating each child in children array
		children.forEach(child => {
			//if parent found by id, then insert element into children
			if (child[2] && child[1].id === id) {
				child[2].push(element)
				return children
			}
			//else if there is children, then find into children recusively
			else if (child[2] && child[2].length > 0) {
				findAndInsert(child[2], id, element)
			}
		})

		return children
	}

	//For making list of elements, and showing the list
	const showLayers = data => {
		return (
			<ul className='show-ul'>
				{data.map(e => {
					return (
						<li
							draggable={true}
							// onDragOver={() => overMe(e[1].id)}
							// onDragStart={() => dragged(e[1].id)}
							onDragEnd={makeParentChild}
							id={e[1].id + '---li'}
							key={uuid()}>
							{e[0] === 'div' || e[0] === 'select' || e[0] === 'list' || e[0] === 'list Item' ? (
								<button onClick={() => showAndHideList(e[1].id)} className='layer-show'>
									{e[2] && e[1].showChildren ? '▼' : '▶'}
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
				<p className={activePage === activeElement ? 'bg-blue ' : ''} onClick={() => setActiveElement(activePage)}>
					{toCapitalize(activePage)}
				</p>
				<button onClick={undoFunc}>U</button>
			</div>
			{showLayers(pages[activePage])}
		</div>
	)
}

export default Layers
