import React, { useContext } from 'react'
import uuid from 'react-uuid'
// import { LayerContext } from './Contexts/LayerContext'
import { PageContext } from './Contexts/PageContext'

const Layers = () => {
	// const { layers } = useContext(LayerContext)
	const { pages, activePage } = useContext(PageContext)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const showLayers = data => {
		return (
			<ul>
				{data.map(e => {
					return (
						<li>
							<p>{e[0]}</p>
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
