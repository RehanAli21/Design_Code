import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import BGImage from './PropertiesComponenets/BGImage'
import Display from './PropertiesComponenets/Display'
import Cursor from './PropertiesComponenets/Cursor'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const DivProperties = () => {
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
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)

	const [overflow, setOverflow] = useState('')
	const [grid, setGrid] = useState('')
	const [showGridComps, setShowGridComps] = useState('')
	const [rowGap, setRowGap] = useState('')
	const [colGap, setColGap] = useState('')
	const [rowNum, setRowNum] = useState(0)
	const [colNum, setColNum] = useState(0)

	//For default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const overflowSelect = document.getElementById('div-overflow-select')
			const gridCheckBox = document.getElementById('r-c-checkbox')
			const gridRowGapInput = document.getElementById('r-c-rowGap-input')
			const gridColGapInput = document.getElementById('r-c-colGap-input')
			const gridRowNumInput = document.getElementById('r-c-rowNum-input')
			const gridColNumInput = document.getElementById('r-c-colNum-input')

			if (width < sBreakPoint) {
				overflowSelect.value = small.overflow ? small.overflow : 'visible'
				if (small.display && small.display === 'grid') {
					gridCheckBox.checked = true
					setShowGridComps('yes')
				} else {
					gridCheckBox.checked = false
					setShowGridComps('no')
					setGrid('')
				}

				gridRowGapInput.value = small.rowGap ? small.rowGap.split('p')[0] : 0
				gridColGapInput.value = small.columnGap ? small.columnGap.split('p')[0] : 0

				if (small.gridTemplateRows) {
					const rows = small.gridTemplateRows.split(' ')
					setRowNum(rows.length - 1)
					gridRowNumInput.value = rows.length - 1

					for (let i = 0; i < rows.length - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							const values = UnitFinder(rows[i])

							rowInput.value = values[0]
							rowSelect.value = values[1]
						}
					}
				} else {
					setRowNum(0)
					gridRowNumInput.value = 0

					for (let i = 0; i < 12 - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				}

				if (small.gridTemplateColumns) {
					const cols = small.gridTemplateColumns.split(' ')
					setColNum(cols.length - 1)
					gridColNumInput.value = cols.length - 1

					for (let i = 0; i < cols.length - 1; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							const values = UnitFinder(cols[i])

							colInput.value = values[0]
							colSelect.value = values[1]
						}
					}
				} else {
					setColNum(0)
					gridColNumInput.value = 0
					for (let i = 0; i < 12; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							colInput.value = 0
							colSelect.value = 'px'
						}
					}
				}
			} else if (width < mBreakPoint) {
				overflowSelect.value = medium.overflow ? medium.overflow : 'visible'
				if (medium.display && medium.display === 'grid') {
					gridCheckBox.checked = true
					setShowGridComps('yes')
				} else {
					gridCheckBox.checked = false
					setShowGridComps('no')
					setGrid('')
				}

				gridRowGapInput.value = medium.rowGap ? medium.rowGap.split('p')[0] : 0
				gridColGapInput.value = medium.columnGap ? medium.columnGap.split('p')[0] : 0

				if (medium.gridTemplateRows) {
					const rows = medium.gridTemplateRows.split(' ')
					setRowNum(rows.length - 1)
					gridRowNumInput.value = rows.length - 1

					for (let i = 0; i < rows.length - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							const values = UnitFinder(rows[i])

							rowInput.value = values[0]
							rowSelect.value = values[1]
						}
					}
				} else {
					setRowNum(0)
					gridRowNumInput.value = 0

					for (let i = 0; i < 12 - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				}

				if (medium.gridTemplateColumns) {
					const cols = medium.gridTemplateColumns.split(' ')
					setColNum(cols.length - 1)
					gridColNumInput.value = cols.length - 1

					for (let i = 0; i < cols.length - 1; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							const values = UnitFinder(cols[i])

							colInput.value = values[0]
							colSelect.value = values[1]
						}
					}
				} else {
					setColNum(0)
					gridColNumInput.value = 0
					for (let i = 0; i < 12; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							colInput.value = 0
							colSelect.value = 'px'
						}
					}
				}
			} else if (width < lBreakPoint) {
				overflowSelect.value = large.overflow ? large.overflow : 'visible'
				if (large.display && large.display === 'grid') {
					gridCheckBox.checked = true
					setShowGridComps('yes')
				} else {
					gridCheckBox.checked = false
					setShowGridComps('no')
					setGrid('')
				}

				gridRowGapInput.value = large.rowGap ? large.rowGap.split('p')[0] : 0
				gridColGapInput.value = large.columnGap ? large.columnGap.split('p')[0] : 0

				if (large.gridTemplateRows) {
					const rows = large.gridTemplateRows.split(' ')
					setRowNum(rows.length - 1)
					gridRowNumInput.value = rows.length - 1

					for (let i = 0; i < rows.length - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							const values = UnitFinder(rows[i])

							rowInput.value = values[0]
							rowSelect.value = values[1]
						}
					}
				} else {
					setRowNum(0)
					gridRowNumInput.value = 0

					for (let i = 0; i < 12 - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				}

				if (large.gridTemplateColumns) {
					const cols = large.gridTemplateColumns.split(' ')
					setColNum(cols.length - 1)
					gridColNumInput.value = cols.length - 1

					for (let i = 0; i < cols.length - 1; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							const values = UnitFinder(cols[i])

							colInput.value = values[0]
							colSelect.value = values[1]
						}
					}
				} else {
					setColNum(0)
					gridColNumInput.value = 0
					for (let i = 0; i < 12; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							colInput.value = 0
							colSelect.value = 'px'
						}
					}
				}
			} else {
				overflowSelect.value = xlarge.overflow ? xlarge.overflow : 'visible'
				if (xlarge.display && xlarge.display === 'grid') {
					gridCheckBox.checked = true
					setShowGridComps('yes')
				} else {
					gridCheckBox.checked = false
					setShowGridComps('no')
					setGrid('')
				}

				gridRowGapInput.value = xlarge.rowGap ? xlarge.rowGap.split('p')[0] : 0
				gridColGapInput.value = xlarge.columnGap ? xlarge.columnGap.split('p')[0] : 0

				if (xlarge.gridTemplateRows) {
					const rows = xlarge.gridTemplateRows.split(' ')
					setRowNum(rows.length - 1)
					gridRowNumInput.value = rows.length - 1

					for (let i = 0; i < rows.length - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							const values = UnitFinder(rows[i])

							rowInput.value = values[0]
							rowSelect.value = values[1]
						}
					}
				} else {
					setRowNum(0)
					gridRowNumInput.value = 0

					for (let i = 0; i < 12 - 1; i++) {
						const rowInput = document.getElementById('r-c-row' + i)
						const rowSelect = document.getElementById('r-c-rowU' + i)

						if (rowInput && rowSelect) {
							rowInput.value = 0
							rowSelect.value = 'px'
						}
					}
				}

				if (xlarge.gridTemplateColumns) {
					const cols = xlarge.gridTemplateColumns.split(' ')
					setColNum(cols.length - 1)
					gridColNumInput.value = cols.length - 1

					for (let i = 0; i < cols.length - 1; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							const values = UnitFinder(cols[i])

							colInput.value = values[0]
							colSelect.value = values[1]
						}
					}
				} else {
					setColNum(0)
					gridColNumInput.value = 0
					for (let i = 0; i < 12; i++) {
						const colInput = document.getElementById('r-c-col' + i)
						const colSelect = document.getElementById('r-c-colU' + i)

						if (colInput && colSelect) {
							colInput.value = 0
							colSelect.value = 'px'
						}
					}
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const UnitFinder = s =>
		s.search('px') !== -1
			? [s.split('p')[0], 'px']
			: s.search('%') !== -1
			? [s.split('%')[0], '%']
			: s.search('vh') !== -1
			? [s.split('v')[0], 'vh']
			: s.search('vw') !== -1
			? [s.split('v')[0], 'vw']
			: s.search('em') !== -1
			? [s.split('e')[0], 'em']
			: ['0', 'px']

	//for setting overflow properties
	useEffect(() => {
		if (small && medium && large && xlarge && overflow !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'overflow', overflow)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'overflow', overflow)
				if (!changedLarge) setProperties(large, setLarge, 'overflow', overflow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'overflow', overflow)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'overflow', overflow)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'overflow', overflow)
				if (!changedLarge) setProperties(large, setLarge, 'overflow', overflow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'overflow', overflow)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'overflow', overflow)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'overflow', overflow)
				if (!changedMedium) setProperties(medium, setMedium, 'overflow', overflow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'overflow', overflow)
			} else {
				setProperties(xlarge, setXlarge, 'overflow', overflow)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'overflow', overflow)
				if (!changedMedium) setProperties(medium, setMedium, 'overflow', overflow)
				if (!changedLarge) setProperties(large, setLarge, 'overflow', overflow)
			}
		}
	}, [overflow])

	useEffect(() => {
		if (small && medium && large && xlarge && grid !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', grid === 'yes' ? 'grid' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid === 'yes' ? 'grid' : '')
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', grid === 'yes' ? 'grid' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid === 'yes' ? 'grid' : '')
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'display', grid === 'yes' ? 'grid' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid === 'yes' ? 'grid' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', grid === 'yes' ? 'grid' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid === 'yes' ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid === 'yes' ? 'grid' : '')
			}
		}
	}, [grid])

	useEffect(() => {
		if (small && medium && large && xlarge && rowGap !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'rowGap', rowGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'rowGap', rowGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < lBreakPoint) {
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

	useEffect(() => {
		if (small && medium && large && xlarge && colGap !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'columnGap', colGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', colGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', colGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', colGap)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'columnGap', colGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', colGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', colGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', colGap)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'columnGap', colGap)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', colGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', colGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', colGap)
			} else {
				setProperties(xlarge, setXlarge, 'columnGap', colGap)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', colGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', colGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', colGap)
			}
		}
	}, [colGap])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const showRows = () => {
		const temp = []
		for (let i = 0; i < 12; i++) {
			temp.push(
				<div style={{ display: rowNum > i ? 'grid' : 'none' }} key={`row${i}`} className='invalue'>
					<input id={`r-c-row${i}`} type='number' onChange={() => applyRows(100)} defaultValue='0' min='0' />
					<select id={`r-c-rowU${i}`} onChange={() => applyRows(100)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
			)
		}
		return temp
	}

	const showCols = () => {
		const temp = []
		for (let i = 0; i < 12; i++) {
			temp.push(
				<div style={{ display: colNum > i ? 'grid' : 'none' }} key={`col${i}`} className='invalue'>
					<input id={`r-c-col${i}`} type='number' onChange={() => applyCols(100)} defaultValue='0' min='0' />
					<select id={`r-c-colU${i}`} onChange={() => applyCols(100)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
			)
		}
		return temp
	}

	const applyRows = e => {
		const rows = []
		for (let i = 0; i < (e === 100 ? rowNum : e); i++) {
			const rowInput = document.getElementById(`r-c-row${i}`)
			const rowUnitSelect = document.getElementById(`r-c-rowU${i}`)

			if (rowInput && rowUnitSelect) {
				rows.push(`${rowInput.value}${rowUnitSelect.value}`)
			}
		}

		let gridRow = ''
		rows.forEach(e => (gridRow += `${e} `))

		if (small && medium && large && xlarge && gridRow !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'gridTemplateRows', gridRow)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridRow)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridRow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridRow)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'gridTemplateRows', gridRow)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridRow)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridRow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridRow)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'gridTemplateRows', gridRow)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridRow)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridRow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateRows', gridRow)
			} else {
				setProperties(xlarge, setXlarge, 'gridTemplateRows', gridRow)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateRows', gridRow)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateRows', gridRow)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateRows', gridRow)
			}
		}
	}

	const applyCols = e => {
		const cols = []
		for (let i = 0; i < (e === 100 ? colNum : e); i++) {
			const colInput = document.getElementById(`r-c-col${i}`)
			const colUnitSelect = document.getElementById(`r-c-colU${i}`)

			if (colInput && colUnitSelect) {
				cols.push(`${colInput.value}${colUnitSelect.value}`)
			}
		}

		let gridCol = ''
		cols.forEach(e => (gridCol += `${e} `))

		if (small && medium && large && xlarge && gridCol !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'gridTemplateColumns', gridCol)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridCol)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridCol)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridCol)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'gridTemplateColumns', gridCol)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridCol)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridCol)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridCol)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'gridTemplateColumns', gridCol)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridCol)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridCol)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridCol)
			} else {
				setProperties(xlarge, setXlarge, 'gridTemplateColumns', gridCol)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'gridTemplateColumns', gridCol)
				if (!changedMedium) setProperties(medium, setMedium, 'gridTemplateColumns', gridCol)
				if (!changedLarge) setProperties(large, setLarge, 'gridTemplateColumns', gridCol)
			}
		}
	}

	return (
		<div className='borders r-c btn-specific'>
			<p className='second-heading' onClick={() => setShowDivProperties(!showDivProperties)}>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Overflow for showing or hiding elements which are going out of div boundries',
						'Cursor for changing mouse icon/poiniter',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
						'Background Img is for applying image on background',
						'Rows/Columns for applying layout by adding rows and columns',
					]}
				/>
				DIV PROPERTIES <span style={{ display: showDivProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showDivProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name style={showDivProperties ? 'grid' : 'none'} />
			<div style={{ display: showDivProperties ? 'grid' : 'none' }} className='two'>
				<label>Overflow</label>
				<select id='div-overflow-select' onChange={e => setOverflow(e.target.value)}>
					<option value='visible'>Visible</option>
					<option value='scroll'>Scroll</option>
					<option value='hidden'>Hidden</option>
				</select>
			</div>
			<Display type='sameLine' />
			<Cursor style={showDivProperties ? 'grid' : 'none'} />
			<GridColumn style={showDivProperties ? 'grid' : 'none'} />
			<BGImage display={showDivProperties ? 'grid' : 'none'} width={width} activeElement={activeElement} />
			<div className='grid'>
				<input
					type='checkbox'
					id='r-c-checkbox'
					onChange={e => {
						setGrid(e.target.checked === true ? 'yes' : 'no')
						setShowGridComps(e.target.checked === true ? 'yes' : 'no')
					}}
				/>
				<label>
					<i className='bi-columns'></i> Rows/Columns
				</label>
			</div>
			<div style={{ display: showGridComps === 'yes' ? 'grid' : 'none' }} className='btn-specific row-col-div'>
				<div className='two'>
					<label>Row Gap: </label>
					<input
						type='number'
						min='0'
						className='numberinput'
						id='r-c-rowGap-input'
						onChange={e => setRowGap(`${e.target.value}px`)}
					/>
				</div>
				<div className='two'>
					<label>Col Gap: </label>
					<input
						type='number'
						min='0'
						className='numberinput'
						id='r-c-colGap-input'
						onChange={e => setColGap(`${e.target.value}px`)}
					/>
				</div>
				<div className='half' style={{ marginTop: '20px' }}>
					<div>
						<div className='half'>
							<label>Rows:</label>
							<input
								type='number'
								id='r-c-rowNum-input'
								min='0'
								max='12'
								onChange={e => {
									setRowNum(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)
									applyRows(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)
								}}
							/>
						</div>
						{showRows()}
					</div>
					<div>
						<div className='half'>
							<label>Cols:</label>
							<input
								type='number'
								id='r-c-colNum-input'
								min='0'
								max='12'
								onChange={e => {
									setColNum(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)
									applyCols(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)
								}}
							/>
						</div>
						{showCols()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DivProperties
