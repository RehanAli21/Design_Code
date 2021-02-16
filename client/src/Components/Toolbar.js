import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'
import { PagesDataContext } from './Contexts/PagesDataContext'
import { divStyle } from './StylesTypes/DivStyles'
import { LayersContext } from './Contexts/LayersContext'

const Toolbar = () => {
	const { data, setData, setElements } = useContext(PagesDataContext)
	const { activePage } = useContext(PagesContext)
	const { show, setShow } = useContext(LayersContext)

	const addDiv = () => {
		const temp = {}
		for (let e in data) temp[e] = data[e]

		const div_num = temp[activePage].length
		temp[activePage].push({
			tag: 'div',
			style: divStyle,
			className: `main-div-${div_num}`,
			id: `main-div-${div_num}`,
			children: []
		})
		setData(temp)

		setElements(setElementFunc(temp[activePage]))
	}

	const setElementFunc = i => {
		if (i.length <= 0) return

		const b = []
		i.forEach(element => {
			if (element['tag'] === 'div') {
				b.push(
					<div
						key={element['id']}
						className={element['className']}
						style={element['style']}
						id={element['id']}>
						{setElementFunc(element['children'])}
					</div>
				)
			} else if (element['tag'] === 'input') {
				b.push(
					<input
						key={element['id']}
						className={element['className']}
						style={element['style']}
					/>
				)
			}
			console.log(element)
		})

		return b
	}

	return (
		<div className='toolbar'>
			<div className='tools'>
				<p onClick={addDiv}>Div</p>
			</div>
			<div>
				<p onClick={() => setShow(!show)}>Layers</p>
			</div>
		</div>
	)
}

export default Toolbar
