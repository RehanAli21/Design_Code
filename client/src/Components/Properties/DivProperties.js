import React, { useState } from 'react'

const DivProperties = () => {
	const [showRow, setShowRow] = useState(false)
	const [rowsNum, setRowNum] = useState(0)
	const [rowValues, setRowValues] = useState([
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
		[0, 'px'],
	])
	const [showCol, setShowCol] = useState(false)
	const [colsNum, setColsNum] = useState(0)
	const [colValues, setColValues] = useState([
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
		[0, '%'],
	])

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='rows-div'>
				<div className='checkin'>
					<input type='checkbox' onChange={() => setShowRow(!showRow)} />
					<label>Rows</label>
					<input
						type='number'
						placeholder='No: Rows'
						min='0'
						max='12'
						style={{ transform: `scale(${showRow ? 1 : 0})` }}
						onChange={e => setRowNum(e.target.value)}
					/>
				</div>
				<div className='rows margins' style={{ display: showRow ? 'block' : 'none' }}>
					<div className='ínvalue'>
						<input type='number' />
						<select>
							<option>PX</option>
							<option>VH</option>
							<option>EM</option>
							<option>REM</option>
						</select>
					</div>
				</div>
			</div>
			<div className='cols-div'>
				<div className='checkin'>
					<input type='checkbox' onChange={() => setShowCol(!showCol)} />
					<label>Columns</label>
					<input
						type='number'
						placeholder='No: Cols'
						min='0'
						max='12'
						style={{ transform: `scale(${showCol ? 1 : 0})` }}
						onChange={e => setColsNum(e.target.value)}
					/>
				</div>
				<div className='cols margins' style={{ display: showCol ? 'block' : 'none' }}>
					<div className='ínvalue'>
						<input type='number' />
						<select>
							<option>%</option>
							<option>VW</option>
							<option>FR</option>
							<option>PX</option>
							<option>EM</option>
							<option>REM</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DivProperties
