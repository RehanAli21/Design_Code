import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const SliderProperties = () => {
	const showBtnProperties = true
	const { pages, setPages, activeElement, activePage } = useContext(PageContext)
	const [effect, setEffect] = useState('')

	useEffect(() => {
		if (effect !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage])
			setPages(temp)
		}
	}, [effect])

	const findAndChange = arr => {
		arr.forEach(e => {
			if (e[1].id === activeElement) {
				e[1].effect = effect
				return true
			} else if (e[2] && e[2].length) {
				if (findAndChange(e[2])) return true
			}
		})
		return false
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Text for text of button',
						'Cursor for changing mouse icon/poiniter',
						'Separete Line will send button on different row',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				SLIDER PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name />
			<div className='two'>
				<label>Effects:</label>
				<select id='slider-effect-select' onChange={e => setEffect(e.target.value)}>
					<option value='effect1'>One</option>
					<option value='effect2'>Two</option>
					<option value='effect3'>Three</option>
					<option value='effect4'>Four</option>
					<option value='effect5'>Five</option>
					<option value='effect6'>Six</option>
				</select>
			</div>
		</div>
	)
}

export default SliderProperties
