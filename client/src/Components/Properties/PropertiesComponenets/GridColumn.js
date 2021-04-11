import React, { useEffect, useState } from 'react'

const GridColumn = ({ activeElement }) => {
	const [cols, setCols] = useState(0)
	const [colNum, setColNum] = useState('')

	useEffect(() => {}, [colNum])

	const ele = document.getElementById(activeElement)
	const show = ele && ele.parentElement && ele.parentElement.style.display === 'grid'

	if (ele && ele.parentElement && ele.parentElement.style.gridTemplateColumns) {
		setCols(ele.parentElement.style.gridTemplateColumns.split(' ').length)
	}

	return (
		<div className='two' style={{ display: show ? 'grid' : 'none' }}>
			<label>Col No: </label>
			<input
				onChange={e => setColNum(e.target.value)}
				className='numberinput'
				type='number'
				placeholder='col number'
				id='gridcol-input'
				max={cols}
				min='0'
			/>
		</div>
	)
}

export default GridColumn
