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
		setActiveElement(e.target.id)
	}

	const deleteMe = e => {
		const id = e.target.id.split('_')[0]

		const temp = Object.assign({}, pages)

		temp[activePage] = deleteIt(temp[activePage], id)
		setPages(temp)
	}

	const deleteIt = (arr, id) => {
		const e = []
		console.log(arr)
		arr.forEach(a => {
			if (a[1].id === id) return

			if (a[2].length > 0) deleteIt(a)

			e.push(a)
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
								id={e[1].id}
								className={
									e[1].id === activeElement ? 'bg-blue ' : ''
								}
								onClick={changeActiveElement}>
								{e[0]}
							</p>
							<button
								id={e[1].id + '_btn'}
								onClick={deleteMe}
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
			<p>{toCapitalize(activePage)}</p>
			{showLayers(pages[activePage])}
		</div>
	)
}

export default Layers
