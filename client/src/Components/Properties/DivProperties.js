import React, { useState } from 'react'

const DivProperties = () => {
	const [showRow, setShowRow] = useState(false)
	const [rowNum, setRowNum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [showCol, setShowCol] = useState(false)
	const [colNum, setColNum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='rows-div'>
				<div className='checkin'>
					<input type='checkbox' onChange={() => setShowRow(!showRow)} />
					<label>Rows</label>
					<input
						style={{ transform: `scale(${showRow ? 1 : 0})` }}
						type='number'
						placeholder='No: Rows'
						min='0'
						max='12'
					/>
				</div>
				<div className='rows margins'></div>
			</div>
			<div className='cols-div'>
				<div className='checkin'>
					<input type='checkbox' onChange={() => setShowCol(!showCol)} />
					<label>Columns</label>
					<input
						style={{ transform: `scale(${showCol ? 1 : 0})` }}
						type='number'
						placeholder='No: Cols'
						min='0'
						max='12'
					/>
				</div>
				<div className='cols margins'></div>
			</div>
		</div>
	)
}

export default DivProperties
