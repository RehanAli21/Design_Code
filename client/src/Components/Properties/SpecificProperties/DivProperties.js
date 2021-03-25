import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const DivProperties = ({ width, activeElement }) => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		changedSmall,
		setChangedSmall,
		changedMedium,
		setChangedMedium,
		changedLarge,
		setChangedLarge,
		changedXlarge,
		setChangedXlarge,
	} = useContext(PropertiesContext)

	const [grid, setGrid] = useState(false)
	const [rowGap, setRowGap] = useState('0px')
	const [columnGap, setColumnGap] = useState('0px')
	const [rowsNum, setRowsNum] = useState(0)
	const [gridRows, setGridRows] = useState([
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
	const [gridCols, setGridCols] = useState([
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

	//For default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const gridCheckbox = document.getElementById('r-c-grid')
			const rowGapInput = document.getElementById('r-c-rowgap')
			const colGapInput = document.getElementById('r-c-colgap')

			if (width < 540) {
				gridCheckbox.checked = small.display === 'grid'
				setGrid(small.display === 'grid' ? true : false)
				rowGapInput.value = small.rowGap ? small.rowGap.split('p')[0] : 0
				colGapInput.value = small.columnGap ? small.columnGap.split('p')[0] : 0
			} else if (width < 720) {
				gridCheckbox.checked = medium.display === 'grid'
				setGrid(medium.display === 'grid' ? true : false)
				rowGapInput.value = medium.rowGap ? medium.rowGap.split('p')[0] : 0
				colGapInput.value = medium.columnGap ? medium.columnGap.split('p')[0] : 0
			} else if (width < 970) {
				gridCheckbox.checked = large.display === 'grid'
				setGrid(large.display === 'grid' ? true : false)
				rowGapInput.value = large.rowGap ? large.rowGap.split('p')[0] : 0
				colGapInput.value = large.columnGap ? large.columnGap.split('p')[0] : 0
			} else {
				gridCheckbox.checked = xlarge.display === 'grid'
				setGrid(xlarge.display === 'grid' ? true : false)
				rowGapInput.value = xlarge.rowGap ? xlarge.rowGap.split('p')[0] : 0
				colGapInput.value = xlarge.columnGap ? xlarge.columnGap.split('p')[0] : 0
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	//For applying grid
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else if (width < 720) {
				setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else if (width < 970) {
				setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
			}
		}
	}, [grid])

	//For Row-Gap
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			if (width < 540) {
				setProperties(small, setSmall, 'rowGap', rowGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'rowGap', rowGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < 970) {
				setProperties(large, setLarge, 'rowGap', rowGap)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else {
				setProperties(xlarge, setXlarge, 'rowGap', rowGap)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
			}
		}
	}, [rowGap])

	//For Col-Gap
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			if (width < 540) {
				setProperties(small, setSmall, 'columnGap', columnGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'columnGap', columnGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else if (width < 970) {
				setProperties(large, setLarge, 'columnGap', columnGap)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else {
				setProperties(xlarge, setXlarge, 'columnGap', columnGap)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
			}
		}
	}, [columnGap])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const setRowsValues = (e, i, j) => {
		const temp = []
		gridRows.forEach(ele => temp.push(ele))
		temp[i][j] = e.target.value
		setGridRows(temp)
	}

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='grid'>
				<input onChange={e => setGrid(e.target.checked)} id='r-c-grid' type='checkbox' />
				<label>Rows / Columns</label>
			</div>
			<div className='row-col-div' style={{ display: grid ? 'grid' : 'none' }}>
				<div className='margins two-rows'>
					<div className='gap'>
						<label>Row Gap: </label>
						<input
							onChange={e => setRowGap(`${e.target.value}px`)}
							type='number'
							defaultValue='0'
							min='0'
							id='r-c-rowgap'
						/>
					</div>
					<div className='gap'>
						<label>Column Gap: </label>
						<input
							onChange={e => setColumnGap(`${e.target.value}px`)}
							type='number'
							defaultValue='0'
							min='0'
							id='r-c-colgap'
						/>
					</div>
				</div>
				<div className='margins'>
					<div>
						<div className='two'>
							<label>No: Rows</label>
							<input
								onChange={e => setRowsNum(e.target.value)}
								type='number'
								min='0'
								max='12'
								placeholder='No: rows'
								id='r-c-row'
							/>
						</div>
						<div className='two'>
							<label>No: Columns</label>
							<input type='number' min='0' max='12' placeholder='No: cols' id='r-c-col' />
						</div>
					</div>
					<div className='two'>
						<div className='rows'>
							<div className='invalue' style={{ display: rowsNum > 0 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput0' onChange={e => setRowsValues(e, 0, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect0' onChange={e => setRowsValues(e, 0, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 1 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput1' onChange={e => setRowsValues(e, 1, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect1' onChange={e => setRowsValues(e, 1, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 2 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput2' onChange={e => setRowsValues(e, 2, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect2' onChange={e => setRowsValues(e, 2, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 3 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput3' onChange={e => setRowsValues(e, 3, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect3' onChange={e => setRowsValues(e, 3, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 4 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput4' onChange={e => setRowsValues(e, 4, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect4' onChange={e => setRowsValues(e, 4, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 5 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput5' onChange={e => setRowsValues(e, 5, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect5' onChange={e => setRowsValues(e, 5, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 6 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput6' onChange={e => setRowsValues(e, 6, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect6' onChange={e => setRowsValues(e, 6, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 7 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput7' onChange={e => setRowsValues(e, 7, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect7' onChange={e => setRowsValues(e, 7, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 8 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput8' onChange={e => setRowsValues(e, 8, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect8' onChange={e => setRowsValues(e, 8, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 9 ? 'grid' : 'none' }}>
								<input id='r-c-rowInput9' onChange={e => setRowsValues(e, 9, 0)} type='number' defaultValue='0' />
								<select id='r-c-rowSelect9' onChange={e => setRowsValues(e, 9, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 10 ? 'grid' : 'none' }}>
								<input
									id='r-c-rowInput10'
									onChange={e => setRowsValues(e, 10, 0)}
									type='number'
									defaultValue='0'
								/>
								<select id='r-c-rowSelect10' onChange={e => setRowsValues(e, 10, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: rowsNum > 11 ? 'grid' : 'none' }}>
								<input
									id='r-c-rowInput11'
									onChange={e => setRowsValues(e, 11, 0)}
									type='number'
									defaultValue='0'
								/>
								<select id='r-c-rowSelect11' onChange={e => setRowsValues(e, 11, 1)}>
									<option value='px'>PX</option>
									<option value='vh'>VH</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
						</div>
						<div className='cols'>
							<div className='invalue'>
								<input type='number' defaultValue='0' />
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
			</div>
		</div>
	)
}

export default DivProperties
