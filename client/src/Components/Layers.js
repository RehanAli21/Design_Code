import React, { useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	const { pages, setPages, activePage, activeElement, setActiveElement, setHistory, undoFunc } = useContext(PageContext)

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
			}
			//increamenting index after every child
			index++
		})
		//when all children iterated, then reseting index
		index = 0

		return e
	}

	//For hiding feature of elements list
	const showAndHideList = e => {
		//targeting four times nextSibling, because fourth sibling
		//is responsible for showing children list
		if (e.target.nextSibling.nextSibling.nextSibling.nextSibling.className === 'show-ul') {
			e.target.nextSibling.nextSibling.nextSibling.nextSibling.className = 'hide-ul'
		} else {
			e.target.nextSibling.nextSibling.nextSibling.nextSibling.className = 'show-ul'
		}
	}

	//For making list of elements, and showing the list
	const showLayers = data => {
		return (
			<ul className='show-ul'>
				{data.map(e => {
					return (
						<li key={uuid()}>
							{e[0] === 'div' || e[0] === 'select' || e[0] === 'list' ? (
								<button onClick={e => showAndHideList(e)} className='layer-show'>
									&#10148;
								</button>
							) : (
								<button className='no-layer'></button>
							)}
							<p
								className={e[1].id === activeElement ? 'bg-blue ' : ''}
								onClick={() => changeActiveElement(`${e[1].id}`)}>
								{e[0]}
							</p>
							<button onClick={() => levelUp(`${e[1].id}`)} className='btn'>
								^
							</button>
							<button onClick={() => deleteMe(`${e[1].id}`)} className='btn'>
								X
							</button>
							{e[2] ? showLayers(e[2]) : null}
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
