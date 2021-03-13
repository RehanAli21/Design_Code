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

	const showRowsFunc = () => {
		const temp = []

		for (let i = 0; i < rowsNum; i++) {
			temp.push(
				<div className='ínvalue' key={i}>
					<input type='number' onChange={e => setRowsValues(e, i)} />
					<select onChange={e => setRowsValuesType(e, i)}>
						<option>PX</option>
						<option>VH</option>
						<option>EM</option>
						<option>REM</option>
					</select>
				</div>
			)
		}
		return temp
	}

	const showColFunc = () => {
		const temp = []

		for (let i = 0; i < colsNum; i++) {
			temp.push(
				<div className='ínvalue' key={i}>
					<input type='number' onChange={e => setColsValues(e, i)} />
					<select onChange={e => setColsValuesType(e, i)}>
						<option>%</option>
						<option>VW</option>
						<option>FR</option>
						<option>PX</option>
						<option>EM</option>
						<option>REM</option>
					</select>
				</div>
			)
		}
		return temp
	}

	const setRowsValues = (e, index) => {
		const temp = rowValues
		temp[index][0] = parseInt(e.target.value)
		setRowValues(temp)
	}
	const setRowsValuesType = (e, index) => {
		const temp = rowValues
		temp[index][1] = e.target.value.toLowerCase()
		setRowValues(temp)
	}
	const setColsValues = (e, index) => {
		const temp = colValues
		temp[index][0] = parseInt(e.target.value)
		setColValues(temp)
	}
	const setColsValuesType = (e, index) => {
		const temp = colValues
		temp[index][1] = e.target.value.toLowerCase()
		setColValues(temp)
	}

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
					{showRowsFunc()}
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
					{showColFunc()}
				</div>
			</div>
		</div>
	)
}

export default DivProperties
