import React, { useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	const {
		pages,
		setPages,
		activePage,
		activeElement,
		setActiveElement
	} = useContext(PageContext)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const changeActiveElement = e => {
		setActiveElement(e)
	}

	const levelUp = id => {
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

			for (let i = 0; i < arr.length; i++) {
				if (arr[i][2].length > 0) {
					arr[i][2] = levelUpHelper(arr[i][2], id)
				}
			}
		} else {
			arr.forEach(a => e.push(a))
		}

		console.log(e)
		return e
	}

	const deleteMe = id => {
		const temp = Object.assign({}, pages)

		temp[activePage] = deleteIt(temp[activePage], id)
		setPages(temp)

		if (id === activeElement) setActiveElement('')
	}

	const deleteIt = (arr, id) => {
		const e = []

		arr.forEach(a => {
			if (a[1].id !== id) {
				if (a[2].length > 0) {
					a[2] = deleteIt(a[2], id)
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

	return (
		<div className='layers'>
			<div>
				<p
					className={activePage === activeElement ? 'bg-blue ' : ''}
					onClick={() => setActiveElement(activePage)}>
					{toCapitalize(activePage)}
				</p>
				<button>U</button>
			</div>
			{showLayers(pages[activePage])}
		</div>
	)
}

export default Layers
