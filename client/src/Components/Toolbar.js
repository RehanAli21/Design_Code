import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'
import { PagesDataContext } from './Contexts/PagesDataContext'
import { divStyle } from './StylesTypes/DivStyles'

const Toolbar = () => {
	const { data, setData, setElements } = useContext(PagesDataContext)
	const { activePage } = useContext(PagesContext)

	const addDiv = () => {
		console.log(data)
		console.log(divStyle)
		const row = data[activePage].length
		const div = {
			tag: 'div',
			style: divStyle,
			className: `main-div-${row}`,
			id: `main-div-${row}`,
			children: []
		}
		const temp = {}
		for (let e in data) temp[e] = data[e]

		temp[activePage].push(div)
		setData(temp)
		console.log(data)
	}

	return (
		<div className='toolbar'>
			<div className='tools'>
				<p onClick={addDiv}>Div</p>
			</div>
			<div>
				<p>Layers</p>
			</div>
		</div>
	)
}

export default Toolbar
