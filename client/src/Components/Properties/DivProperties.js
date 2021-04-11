import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import BGImage from './PropertiesComponenets/BGImage'
import GridColumn from './PropertiesComponenets/GridColumn'

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
		showDivProperties,
		setShowDivProperties,
	} = useContext(PropertiesContext)

	const [grid, setGrid] = useState(false)
	const [rowGap, setRowGap] = useState('0px')
	const [columnGap, setColumnGap] = useState('0px')
	const [rowsNum, setRowsNum] = useState(0)
	const [colsNum, setColsNum] = useState(0)
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
			const rowInput = document.getElementById('r-c-row')
			const colInput = document.getElementById('r-c-col')

			if (width < 540) {
				gridCheckbox.checked = small.display === 'grid'
				setGrid(small.display === 'grid' ? true : false)
				rowGapInput.value = small.rowGap ? small.rowGap.split('p')[0] : 0
				colGapInput.value = small.columnGap ? small.columnGap.split('p')[0] : 0

				if (small.gridTemplateRows) {
					const rows = small.gridTemplateRows.split(' ')
					rows.pop()
					rowInput.value = rows.length
					setRowsNum(rows.length)
					for (let i = 0; i < rows.length; i++) {
						const rowInput = document.getElementById('r-c-rowInput' + i)
						const rowSelect = document.getElementById('r-c-rowSelect' + i)
						if (rows[i].search('px') !== -1) {
							rowInput.value = rows[i].split('p')[0]
							rowSelect.value = 'px'
						} else if (rows[i].search('vh') !== -1) {
							rowInput.value = rows[i].split('v')[0]
							rowSelect.value = 'vh'
						} else if (rows[i].search('rem') !== -1) {
							rowInput.value = rows[i].split('r')[0]
							rowSelect.value = 'rem'
						} else if (rows[i].search('em') !== -1) {
							rowInput.value = rows[i].split('e')[0]
							rowSelect.value = 'em'
						} else {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				} else {
					rowInput.value = 0
					setRowsNum(0)
				}
				if (small.gridTemplateColumns) {
					const cols = small.gridTemplateColumns.split(' ')
					cols.pop()
					colInput.value = cols.length
					setColsNum(cols.length)
					for (let i = 0; i < cols.length; i++) {
						const colInput = document.getElementById('r-c-colInput' + i)
						const colSelect = document.getElementById('r-c-colSelect' + i)
						if (cols[i].search('%') !== -1) {
							colInput.value = cols[i].split('%')[0]
							colSelect.value = '%'
						} else if (cols[i].search('fr') !== -1) {
							colInput.value = cols[i].split('f')[0]
							colSelect.value = 'fr'
						} else if (cols[i].search('px') !== -1) {
							colInput.value = cols[i].split('p')[0]
							colSelect.value = 'px'
						} else if (cols[i].search('vw') !== -1) {
							colInput.value = cols[i].split('v')[0]
							colSelect.value = 'vw'
						} else if (cols[i].search('rem') !== -1) {
							colInput.value = cols[i].split('r')[0]
							colSelect.value = 'rem'
						} else if (cols[i].search('em') !== -1) {
							colInput.value = cols[i].split('e')[0]
							colSelect.value = 'em'
						} else {
							colInput.value = 0
							colSelect.value = '%'
						}
					}
				} else {
					colInput.value = 0
					setColsNum(0)
				}
			} else if (width < 720) {
				gridCheckbox.checked = medium.display === 'grid'
				setGrid(medium.display === 'grid' ? true : false)
				rowGapInput.value = medium.rowGap ? medium.rowGap.split('p')[0] : 0
				colGapInput.value = medium.columnGap ? medium.columnGap.split('p')[0] : 0

				if (medium.gridTemplateRows) {
					const rows = medium.gridTemplateRows.split(' ')
					rows.pop()
					rowInput.value = rows.length
					setRowsNum(rows.length)
					for (let i = 0; i < rows.length; i++) {
						const rowInput = document.getElementById('r-c-rowInput' + i)
						const rowSelect = document.getElementById('r-c-rowSelect' + i)
						if (rows[i].search('px') !== -1) {
							rowInput.value = rows[i].split('p')[0]
							rowSelect.value = 'px'
						} else if (rows[i].search('vh') !== -1) {
							rowInput.value = rows[i].split('v')[0]
							rowSelect.value = 'vh'
						} else if (rows[i].search('rem') !== -1) {
							rowInput.value = rows[i].split('r')[0]
							rowSelect.value = 'rem'
						} else if (rows[i].search('em') !== -1) {
							rowInput.value = rows[i].split('e')[0]
							rowSelect.value = 'em'
						} else {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				} else {
					rowInput.value = 0
					setRowsNum(0)
				}
				if (medium.gridTemplateColumns) {
					const cols = medium.gridTemplateColumns.split(' ')
					cols.pop()
					colInput.value = cols.length
					setColsNum(cols.length)
					for (let i = 0; i < cols.length; i++) {
						const colInput = document.getElementById('r-c-colInput' + i)
						const colSelect = document.getElementById('r-c-colSelect' + i)
						if (cols[i].search('%') !== -1) {
							colInput.value = cols[i].split('%')[0]
							colSelect.value = '%'
						} else if (cols[i].search('fr') !== -1) {
							colInput.value = cols[i].split('f')[0]
							colSelect.value = 'fr'
						} else if (cols[i].search('px') !== -1) {
							colInput.value = cols[i].split('p')[0]
							colSelect.value = 'px'
						} else if (cols[i].search('vw') !== -1) {
							colInput.value = cols[i].split('v')[0]
							colSelect.value = 'vw'
						} else if (cols[i].search('rem') !== -1) {
							colInput.value = cols[i].split('r')[0]
							colSelect.value = 'rem'
						} else if (cols[i].search('em') !== -1) {
							colInput.value = cols[i].split('e')[0]
							colSelect.value = 'em'
						} else {
							colInput.value = 0
							colSelect.value = '%'
						}
					}
				} else {
					colInput.value = 0
					setColsNum(0)
				}
			} else if (width < 970) {
				gridCheckbox.checked = large.display === 'grid'
				setGrid(large.display === 'grid' ? true : false)
				rowGapInput.value = large.rowGap ? large.rowGap.split('p')[0] : 0
				colGapInput.value = large.columnGap ? large.columnGap.split('p')[0] : 0

				if (large.gridTemplateRows) {
					const rows = large.gridTemplateRows.split(' ')
					rows.pop()
					rowInput.value = rows.length
					setRowsNum(rows.length)
					for (let i = 0; i < rows.length; i++) {
						const rowInput = document.getElementById('r-c-rowInput' + i)
						const rowSelect = document.getElementById('r-c-rowSelect' + i)
						if (rows[i].search('px') !== -1) {
							rowInput.value = rows[i].split('p')[0]
							rowSelect.value = 'px'
						} else if (rows[i].search('vh') !== -1) {
							rowInput.value = rows[i].split('v')[0]
							rowSelect.value = 'vh'
						} else if (rows[i].search('rem') !== -1) {
							rowInput.value = rows[i].split('r')[0]
							rowSelect.value = 'rem'
						} else if (rows[i].search('em') !== -1) {
							rowInput.value = rows[i].split('e')[0]
							rowSelect.value = 'em'
						} else {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				} else {
					rowInput.value = 0
					setRowsNum(0)
				}
				if (large.gridTemplateColumns) {
					const cols = large.gridTemplateColumns.split(' ')
					cols.pop()
					colInput.value = cols.length
					setColsNum(cols.length)
					for (let i = 0; i < cols.length; i++) {
						const colInput = document.getElementById('r-c-colInput' + i)
						const colSelect = document.getElementById('r-c-colSelect' + i)
						if (cols[i].search('%') !== -1) {
							colInput.value = cols[i].split('%')[0]
							colSelect.value = '%'
						} else if (cols[i].search('fr') !== -1) {
							colInput.value = cols[i].split('f')[0]
							colSelect.value = 'fr'
						} else if (cols[i].search('px') !== -1) {
							colInput.value = cols[i].split('p')[0]
							colSelect.value = 'px'
						} else if (cols[i].search('vw') !== -1) {
							colInput.value = cols[i].split('v')[0]
							colSelect.value = 'vw'
						} else if (cols[i].search('rem') !== -1) {
							colInput.value = cols[i].split('r')[0]
							colSelect.value = 'rem'
						} else if (cols[i].search('em') !== -1) {
							colInput.value = cols[i].split('e')[0]
							colSelect.value = 'em'
						} else {
							colInput.value = 0
							colSelect.value = '%'
						}
					}
				} else {
					colInput.value = 0
					setColsNum(0)
				}
			} else {
				gridCheckbox.checked = xlarge.display === 'grid'
				setGrid(xlarge.display === 'grid' ? true : false)
				rowGapInput.value = xlarge.rowGap ? xlarge.rowGap.split('p')[0] : 0
				colGapInput.value = xlarge.columnGap ? xlarge.columnGap.split('p')[0] : 0

				if (xlarge.gridTemplateRows) {
					const rows = xlarge.gridTemplateRows.split(' ')
					rows.pop()
					rowInput.value = rows.length
					setRowsNum(rows.length)
					for (let i = 0; i < rows.length; i++) {
						const rowInput = document.getElementById('r-c-rowInput' + i)
						const rowSelect = document.getElementById('r-c-rowSelect' + i)
						if (rows[i].search('px') !== -1) {
							rowInput.value = rows[i].split('p')[0]
							rowSelect.value = 'px'
						} else if (rows[i].search('vh') !== -1) {
							rowInput.value = rows[i].split('v')[0]
							rowSelect.value = 'vh'
						} else if (rows[i].search('rem') !== -1) {
							rowInput.value = rows[i].split('r')[0]
							rowSelect.value = 'rem'
						} else if (rows[i].search('em') !== -1) {
							rowInput.value = rows[i].split('e')[0]
							rowSelect.value = 'em'
						} else {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				} else {
					rowInput.value = 0
					setRowsNum(0)
				}
				if (xlarge.gridTemplateColumns) {
					const cols = xlarge.gridTemplateColumns.split(' ')
					cols.pop()
					colInput.value = cols.length
					setColsNum(cols.length)
					for (let i = 0; i < cols.length; i++) {
						const colInput = document.getElementById('r-c-colInput' + i)
						const colSelect = document.getElementById('r-c-colSelect' + i)
						if (cols[i].search('%') !== -1) {
							colInput.value = cols[i].split('%')[0]
							colSelect.value = '%'
						} else if (cols[i].search('fr') !== -1) {
							colInput.value = cols[i].split('f')[0]
							colSelect.value = 'fr'
						} else if (cols[i].search('px') !== -1) {
							colInput.value = cols[i].split('p')[0]
							colSelect.value = 'px'
						} else if (cols[i].search('vw') !== -1) {
							colInput.value = cols[i].split('v')[0]
							colSelect.value = 'vw'
						} else if (cols[i].search('rem') !== -1) {
							colInput.value = cols[i].split('r')[0]
							colSelect.value = 'rem'
						} else if (cols[i].search('em') !== -1) {
							colInput.value = cols[i].split('e')[0]
							colSelect.value = 'em'
						} else {
							colInput.value = 0
							colSelect.value = '%'
						}
					}
				} else {
					colInput.value = 0
					setColsNum(0)
				}
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

	//For gridTemplateRows
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			let gridTemplateRows = ''
			for (let i = 0; i < rowsNum; i++) {
				gridTemplateRows += `${gridRows[i][0]}${gridRows[i][1]} `
			}
			if (width < 540) {
				setProperties(small, setSmall, 'gridTemplateRows', gridTemplateRows)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridTemplateRows)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridTemplateRows)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridTemplateRows)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'gridTemplateRows', gridTemplateRows)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridTemplateRows)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridTemplateRows)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridTemplateRows)
			} else if (width < 970) {
				setProperties(large, setLarge, 'gridTemplateRows', gridTemplateRows)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridTemplateRows)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridTemplateRows)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridTemplateRows)
			} else {
				setProperties(xlarge, setXlarge, 'gridTemplateRows', gridTemplateRows)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridTemplateRows)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridTemplateRows)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridTemplateRows)
			}
		}
	}, [gridRows, rowsNum])

	//For gridTemplateColumns
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			let gridTemplateColumns = ''
			for (let i = 0; i < colsNum; i++) {
				gridTemplateColumns += `${gridCols[i][0]}${gridCols[i][1]} `
			}
			if (width < 540) {
				setProperties(small, setSmall, 'gridTemplateColumns', gridTemplateColumns)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridTemplateColumns)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'gridTemplateColumns', gridTemplateColumns)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridTemplateColumns)
			} else if (width < 970) {
				setProperties(large, setLarge, 'gridTemplateColumns', gridTemplateColumns)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridTemplateColumns)
			} else {
				setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridTemplateColumns)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridTemplateColumns)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridTemplateColumns)
			}
		}
	}, [gridCols, colsNum])

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

	const setColsValues = (e, i, j) => {
		const temp = []
		gridCols.forEach(ele => temp.push(ele))
		temp[i][j] = e.target.value
		setGridCols(temp)
	}

	return (
		<div className='borders r-c btn-specific'>
			<p className='second-heading' onClick={() => setShowDivProperties(!showDivProperties)}>
				DIV PROPERTIES <span style={{ display: showDivProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showDivProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<GridColumn />
			<BGImage display={showDivProperties ? 'grid' : 'none'} width={width} activeElement={activeElement} />
			<div style={{ display: showDivProperties ? 'grid' : 'none' }} className='grid'>
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
							<input
								onChange={e => setColsNum(e.target.value)}
								type='number'
								min='0'
								max='12'
								placeholder='No: cols'
								id='r-c-col'
							/>
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
							<div className='invalue' style={{ display: colsNum > 0 ? 'grid' : 'none' }}>
								<input id='r-c-colInput0' onChange={e => setColsValues(e, 0, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect0' onChange={e => setColsValues(e, 0, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 1 ? 'grid' : 'none' }}>
								<input id='r-c-colInput1' onChange={e => setColsValues(e, 1, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect1' onChange={e => setColsValues(e, 1, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 2 ? 'grid' : 'none' }}>
								<input id='r-c-colInput2' onChange={e => setColsValues(e, 2, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect2' onChange={e => setColsValues(e, 2, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 3 ? 'grid' : 'none' }}>
								<input id='r-c-colInput3' onChange={e => setColsValues(e, 3, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect3' onChange={e => setColsValues(e, 3, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 4 ? 'grid' : 'none' }}>
								<input id='r-c-colInput4' onChange={e => setColsValues(e, 4, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect4' onChange={e => setColsValues(e, 4, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 5 ? 'grid' : 'none' }}>
								<input id='r-c-colInput5' onChange={e => setColsValues(e, 5, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect5' onChange={e => setColsValues(e, 5, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 6 ? 'grid' : 'none' }}>
								<input id='r-c-colInput6' onChange={e => setColsValues(e, 6, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect6' onChange={e => setColsValues(e, 6, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 7 ? 'grid' : 'none' }}>
								<input id='r-c-colInput7' onChange={e => setColsValues(e, 7, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect7' onChange={e => setColsValues(e, 7, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 8 ? 'grid' : 'none' }}>
								<input id='r-c-colInput8' onChange={e => setColsValues(e, 8, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect8' onChange={e => setColsValues(e, 8, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 9 ? 'grid' : 'none' }}>
								<input id='r-c-colInput9' onChange={e => setColsValues(e, 9, 0)} type='number' defaultValue='0' />
								<select id='r-c-colSelect9' onChange={e => setColsValues(e, 9, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 10 ? 'grid' : 'none' }}>
								<input
									id='r-c-colInput10'
									onChange={e => setColsValues(e, 10, 0)}
									type='number'
									defaultValue='0'
								/>
								<select id='r-c-colSelect10' onChange={e => setColsValues(e, 10, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
								</select>
							</div>
							<div className='invalue' style={{ display: colsNum > 11 ? 'grid' : 'none' }}>
								<input
									id='r-c-colInput11'
									onChange={e => setColsValues(e, 11, 0)}
									type='number'
									defaultValue='0'
								/>
								<select id='r-c-colSelect11' onChange={e => setColsValues(e, 11, 1)}>
									<option value='%'>%</option>
									<option value='vw'>VW</option>
									<option value='fr'>FR</option>
									<option value='px'>PX</option>
									<option value='em'>EM</option>
									<option value='rem'>REM</option>
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
