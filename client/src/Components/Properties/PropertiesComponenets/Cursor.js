import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Cursor = () => {
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)

	const [cursor, setCursor] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			setProperties(small, setSmall, 'cursor', cursor)
			setProperties(medium, setMedium, 'cursor', cursor)
			setProperties(large, setLarge, 'cursor', cursor)
			setProperties(xlarge, setXlarge, 'cursor', cursor)
		}
	}, [cursor])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='two'>
			<label>Cursor:</label>
			<select id='cursor-change-select' onChange={e => setCursor(e.target.value)}>
				<option value='default'>default</option>
				<option value='pointer'>pointer</option>
				<option value='none'>none</option>
				<option value='alias'>alias</option>
				<option value='all-scroll'>all-scroll</option>
				<option value='auto'>auto</option>
				<option value='cell'>cell</option>
				<option value='col-resize'>col-resize</option>
				<option value='context-menu'>context-menu</option>
				<option value='copy'>copy</option>
				<option value='crosshair'>crosshair</option>
				<option value='grab'>grab</option>
				<option value='grabbing'>grabbing</option>
				<option value='help'>help</option>
				<option value='move'>move</option>
				<option value='no-drop'>no-drop</option>
				<option value='not-allowed'>not-allowed</option>
				<option value='progress'>progress</option>
				<option value='row-resize'>row-resize</option>
				<option value='text'>text</option>
				<option value='vertical-text'>vertical-text</option>
				<option value='wait'>wait</option>
				<option value='zoom-in'>zoom-in</option>
				<option value='zoom-out'>zoom-out</option>
				<option value='w-resize'>w-resize</option>
				<option value='e-resize'>e-resize</option>
				<option value='n-resize'>n-resize</option>
				<option value='s-resize'>s-resize</option>
				<option value='ew-resize'>ew-resize</option>
				<option value='ne-resize'>ne-resize</option>
				<option value='nesw-resize'>nesw-resize</option>
				<option value='ns-resize'>ns-resize</option>
				<option value='nw-resize'>nw-resize</option>
				<option value='nwse-resize'>nwse-resize</option>
				<option value='se-resize'>se-resize</option>
				<option value='sw-resize'>sw-resize</option>
			</select>
		</div>
	)
}

export default Cursor
