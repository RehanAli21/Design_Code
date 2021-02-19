import React, { useContext } from 'react'
import uuid from 'react-uuid'
// import { LayerContext } from './Contexts/LayerContext'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	// const { layers } = useContext(LayerContext)
	const { pages, activePage, activeElement, setActiveElement } = useContext(
		PageContext
	)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const changeActiveElement = e => {
		setActiveElement(e.target.id)
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
