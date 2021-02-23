import React, { useContext, useState } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	const {
		pages,
		setPages,
		activePage,
		activeElement,
		setActiveElement,
		setHistory
	} = useContext(PageContext)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const changeActiveElement = e => setActiveElement(e)

	const levelUp = id => {
		setHistory()

		const temp = Object.assign({}, pages)
		temp[activePage] = levelUpHelper(temp[activePage], id)

		setPages(temp)
	}
	const levelUpHelper = (arr, id) => {
		const e = []

		if (arr.length > 1) {
			for (let i = 0; i < arr.length - 1; i++) {
				if (arr[i + 1][1].id === id) {
					let t = arr[i]
					arr[i] = arr[i + 1]
					arr[i + 1] = t
				}
				e.push(arr[i])
			}
			e.push(arr[arr.length - 1])

			e.forEach(ele => {
				if (ele[2].length > 0) {
					ele[2] = levelUpHelper(ele[2], id)
				}
			})
		} else {
			arr.forEach(a => e.push(a))
			e.forEach(ele => {
				if (ele[2].length > 0) {
					ele[2] = levelUpHelper(ele[2], id)
				}
			})
		}

		return e
	}

	const deleteMe = id => {
		setHistory()

		const temp = Object.assign({}, pages)

		temp[activePage] = deleteHelper(temp[activePage], id)
		setPages(temp)

		if (id === activeElement) setActiveElement('')
	}
	const deleteHelper = (arr, id) => {
		const e = []

		arr.forEach(a => {
			if (a[1].id !== id) {
				if (a[2].length > 0) {
					a[2] = deleteHelper(a[2], id)
				}
				e.push(a)
			}
		})

		return e
	}

	const showLayers = data => {
		return (
			<ul>
				{data.map(e => {
					return (
						<li key={uuid()}>
							<p
								className={
									e[1].id === activeElement ? 'bg-blue ' : ''
								}
								onClick={() =>
									changeActiveElement(`${e[1].id}`)
								}>
								{e[0]}
							</p>
							<button
								onClick={() => levelUp(`${e[1].id}`)}
								className='layer-delete'>
								^
							</button>
							<button
								onClick={() => deleteMe(`${e[1].id}`)}
								className='layer-delete'>
								X
							</button>
							{showLayers(e[2])}
						</li>
					)
				})}
			</ul>
		)
	}

	const undoFunc = () => {}
	const redoFunc = () => {}

	return (
		<div className='layers'>
			<div>
				<p
					className={activePage === activeElement ? 'bg-blue ' : ''}
					onClick={() => setActiveElement(activePage)}>
					{toCapitalize(activePage)}
				</p>
				<button onClick={undoFunc}>U</button>
				<button onClick={redoFunc}>R</button>
			</div>
			{showLayers(pages[activePage])}
		</div>
	)
}

export default Layers
