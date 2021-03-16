import React, { useState, useEffect, useContext } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'

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
	const [grid1, setGrid1] = useState(false)
	const [changedGrid, setChangedGrid] = useState(true)
	const [rowsNum, setRowsNum] = useState(0)
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
	const [rowGap, setRowGap] = useState(0)
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
	const [colGap, setColGap] = useState(0)

	//For default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const rowsInput = []
			const rowsSelect = []
			const colsInput = []
			const colsSelect = []
			const gridCheckbox = document.getElementById('r-c-grid')
			const gridRowInput = document.getElementById('r-c-row')
			const gridColInput = document.getElementById('r-c-col')

			for (let i = 0; i < rowsNum; i++) {
				rowsInput.push(document.getElementById(`r-rowinput${i}`))
				rowsSelect.push(document.getElementById(`r-rowselect${i}`))
			}

			for (let i = 0; i < colsNum; i++) {
				colsInput.push(document.getElementById(`c-colinput${i}`))
				colsSelect.push(document.getElementById(`c-colselect${i}`))
			}

			if (width < 540) {
				if (small.display === 'grid') {
					gridCheckbox.checked = true
					setGrid(true)
				} else {
					gridCheckbox.checked = false
					setGrid(false)
				}
				if (small.gridTemplateRows) {
					const rowsValues = small.gridTemplateRows.split(' ')
					setRowsNum(rowsValues.length - 1)
					gridRowInput.value = rowsValues.length - 1
					for (let i = 0; i < rowsValues.length - 1; i++) {
						if (rowsInput[i] && rowsSelect[i]) {
							if (rowsValues[i].search('px') !== -1) {
								rowsInput[i].value = rowsValues[i].split('p')[0]
								rowsSelect[i].selectedIndex = 0
							} else if (rowsValues[i].search('vh') !== -1) {
								rowsInput[i].value = rowsValues[i].split('v')[0]
								rowsSelect[i].selectedIndex = 1
							} else if (rowsValues[i].search('rem') !== -1) {
								rowsInput[i].value = rowsValues[i].split('r')[0]
								rowsSelect[i].selectedIndex = 3
							} else if (rowsValues[i].search('em') !== -1) {
								rowsInput[i].value = rowsValues[i].split('e')[0]
								rowsSelect[i].selectedIndex = 2
							}
						}
					}
				} else {
					setRowsNum(0)
					gridRowInput.value = 0
				}
				if (small.gridTemplateColumns) {
					const colsValues = small.gridTemplateColumns.split(' ')
					setColsNum(colsValues.length - 1)
					gridColInput.value = colsValues.length - 1
					for (let i = 0; i < colsValues.length - 1; i++) {
						if (colsInput[i] && colsSelect[i]) {
							if (colsValues[i].search('%') !== -1) {
								colsInput[i].value = colsValues[i].split('%')[0]
								colsSelect[i].selectedIndex = 0
							} else if (colsValues[i].search('vw') !== -1) {
								colsInput[i].value = colsValues[i].split('v')[0]
								colsSelect[i].selectedIndex = 1
							} else if (colsValues[i].search('fr') !== -1) {
								colsInput[i].value = colsValues[i].split('f')[0]
								colsSelect[i].selectedIndex = 2
							} else if (colsValues[i].search('px') !== -1) {
								colsInput[i].value = colsValues[i].split('p')[0]
								colsSelect[i].selectedIndex = 3
							} else if (colsValues[i].search('rem') !== -1) {
								colsInput[i].value = colsValues[i].split('r')[0]
								colsSelect[i].selectedIndex = 5
							} else if (colsValues[i].search('em') !== -1) {
								colsInput[i].value = colsValues[i].split('e')[0]
								colsSelect[i].selectedIndex = 4
							}
						}
					}
				} else {
					setColsNum(0)
					gridColInput.value = 0
				}
			} else if (width < 720) {
				if (medium.display === 'grid') {
					gridCheckbox.checked = true
					setGrid(true)
				} else {
					gridCheckbox.checked = false
					setGrid(false)
				}
				if (medium.gridTemplateRows) {
					const rowsValues = medium.gridTemplateRows.split(' ')
					setRowsNum(rowsValues.length - 1)
					gridRowInput.value = rowsValues.length - 1
					for (let i = 0; i < rowsValues.length - 1; i++) {
						if (rowsInput[i] && rowsSelect[i]) {
							if (rowsValues[i].search('px') !== -1) {
								rowsInput[i].value = rowsValues[i].split('p')[0]
								rowsSelect[i].selectedIndex = 0
							} else if (rowsValues[i].search('vh') !== -1) {
								rowsInput[i].value = rowsValues[i].split('v')[0]
								rowsSelect[i].selectedIndex = 1
							} else if (rowsValues[i].search('rem') !== -1) {
								rowsInput[i].value = rowsValues[i].split('r')[0]
								rowsSelect[i].selectedIndex = 3
							} else if (rowsValues[i].search('em') !== -1) {
								rowsInput[i].value = rowsValues[i].split('e')[0]
								rowsSelect[i].selectedIndex = 2
							}
						}
					}
				} else {
					setRowsNum(0)
					gridRowInput.value = 0
				}
				if (medium.gridTemplateColumns) {
					const colsValues = medium.gridTemplateColumns.split(' ')
					setColsNum(colsValues.length - 1)
					gridColInput.value = colsValues.length - 1
					for (let i = 0; i < colsValues.length - 1; i++) {
						if (colsInput[i] && colsSelect[i]) {
							if (colsValues[i].search('%') !== -1) {
								colsInput[i].value = colsValues[i].split('%')[0]
								colsSelect[i].selectedIndex = 0
							} else if (colsValues[i].search('vw') !== -1) {
								colsInput[i].value = colsValues[i].split('v')[0]
								colsSelect[i].selectedIndex = 1
							} else if (colsValues[i].search('fr') !== -1) {
								colsInput[i].value = colsValues[i].split('f')[0]
								colsSelect[i].selectedIndex = 2
							} else if (colsValues[i].search('px') !== -1) {
								colsInput[i].value = colsValues[i].split('p')[0]
								colsSelect[i].selectedIndex = 3
							} else if (colsValues[i].search('rem') !== -1) {
								colsInput[i].value = colsValues[i].split('r')[0]
								colsSelect[i].selectedIndex = 5
							} else if (colsValues[i].search('em') !== -1) {
								colsInput[i].value = colsValues[i].split('e')[0]
								colsSelect[i].selectedIndex = 4
							}
						}
					}
				} else {
					setColsNum(0)
					gridColInput.value = 0
				}
			} else if (width < 970) {
				if (large.display === 'grid') {
					gridCheckbox.checked = true
					setGrid(true)
				} else {
					gridCheckbox.checked = false
					setGrid(false)
				}
				if (large.gridTemplateRows) {
					const rowsValues = large.gridTemplateRows.split(' ')
					setRowsNum(rowsValues.length - 1)
					gridRowInput.value = rowsValues.length - 1
					for (let i = 0; i < rowsValues.length - 1; i++) {
						if (rowsInput[i] && rowsSelect[i]) {
							if (rowsValues[i].search('px') !== -1) {
								rowsInput[i].value = rowsValues[i].split('p')[0]
								rowsSelect[i].selectedIndex = 0
							} else if (rowsValues[i].search('vh') !== -1) {
								rowsInput[i].value = rowsValues[i].split('v')[0]
								rowsSelect[i].selectedIndex = 1
							} else if (rowsValues[i].search('rem') !== -1) {
								rowsInput[i].value = rowsValues[i].split('r')[0]
								rowsSelect[i].selectedIndex = 3
							} else if (rowsValues[i].search('em') !== -1) {
								rowsInput[i].value = rowsValues[i].split('e')[0]
								rowsSelect[i].selectedIndex = 2
							}
						}
					}
				} else {
					setRowsNum(0)
					gridRowInput.value = 0
				}
				if (large.gridTemplateColumns) {
					const colsValues = large.gridTemplateColumns.split(' ')
					setColsNum(colsValues.length - 1)
					gridColInput.value = colsValues.length - 1
					for (let i = 0; i < colsValues.length - 1; i++) {
						if (colsInput[i] && colsSelect[i]) {
							if (colsValues[i].search('%') !== -1) {
								colsInput[i].value = colsValues[i].split('%')[0]
								colsSelect[i].selectedIndex = 0
							} else if (colsValues[i].search('vw') !== -1) {
								colsInput[i].value = colsValues[i].split('v')[0]
								colsSelect[i].selectedIndex = 1
							} else if (colsValues[i].search('fr') !== -1) {
								colsInput[i].value = colsValues[i].split('f')[0]
								colsSelect[i].selectedIndex = 2
							} else if (colsValues[i].search('px') !== -1) {
								colsInput[i].value = colsValues[i].split('p')[0]
								colsSelect[i].selectedIndex = 3
							} else if (colsValues[i].search('rem') !== -1) {
								colsInput[i].value = colsValues[i].split('r')[0]
								colsSelect[i].selectedIndex = 5
							} else if (colsValues[i].search('em') !== -1) {
								colsInput[i].value = colsValues[i].split('e')[0]
								colsSelect[i].selectedIndex = 4
							}
						}
					}
				} else {
					setColsNum(0)
					gridColInput.value = 0
				}
			} else {
				if (xlarge.display === 'grid') {
					gridCheckbox.checked = true
					setGrid(true)
				} else {
					gridCheckbox.checked = false
					setGrid(false)
				}
				if (xlarge.gridTemplateRows) {
					const rowsValues = xlarge.gridTemplateRows.split(' ')
					setRowsNum(rowsValues.length - 1)
					gridRowInput.value = rowsValues.length - 1
					for (let i = 0; i < rowsValues.length - 1; i++) {
						if (rowsInput[i] && rowsSelect[i]) {
							if (rowsValues[i].search('px') !== -1) {
								rowsInput[i].value = rowsValues[i].split('p')[0]
								rowsSelect[i].selectedIndex = 0
							} else if (rowsValues[i].search('vh') !== -1) {
								rowsInput[i].value = rowsValues[i].split('v')[0]
								rowsSelect[i].selectedIndex = 1
							} else if (rowsValues[i].search('rem') !== -1) {
								rowsInput[i].value = rowsValues[i].split('r')[0]
								rowsSelect[i].selectedIndex = 3
							} else if (rowsValues[i].search('em') !== -1) {
								rowsInput[i].value = rowsValues[i].split('e')[0]
								rowsSelect[i].selectedIndex = 2
							}
						}
					}
				} else {
					setRowsNum(0)
					gridRowInput.value = 0
				}
				if (xlarge.gridTemplateColumns) {
					const colsValues = xlarge.gridTemplateColumns.split(' ')
					setColsNum(colsValues.length - 1)
					gridColInput.value = colsValues.length - 1
					for (let i = 0; i < colsValues.length - 1; i++) {
						if (colsInput[i] && colsSelect[i]) {
							if (colsValues[i].search('%') !== -1) {
								colsInput[i].value = colsValues[i].split('%')[0]
								colsSelect[i].selectedIndex = 0
							} else if (colsValues[i].search('vw') !== -1) {
								colsInput[i].value = colsValues[i].split('v')[0]
								colsSelect[i].selectedIndex = 1
							} else if (colsValues[i].search('fr') !== -1) {
								colsInput[i].value = colsValues[i].split('f')[0]
								colsSelect[i].selectedIndex = 2
							} else if (colsValues[i].search('px') !== -1) {
								colsInput[i].value = colsValues[i].split('p')[0]
								colsSelect[i].selectedIndex = 3
							} else if (colsValues[i].search('rem') !== -1) {
								colsInput[i].value = colsValues[i].split('r')[0]
								colsSelect[i].selectedIndex = 5
							} else if (colsValues[i].search('em') !== -1) {
								colsInput[i].value = colsValues[i].split('e')[0]
								colsSelect[i].selectedIndex = 4
							}
						}
					}
				} else {
					setColsNum(0)
					gridColInput.value = 0
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge && changedGrid) {
			if (grid) {
				if (width < 540) {
					setDisplayGrid(small, setSmall, 'grid')
					setChangedSmall(true)
					if (!changedMedium) setDisplayGrid(medium, setMedium, 'grid')
					if (!changedLarge) setDisplayGrid(large, setLarge, 'grid')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, 'grid')
				} else if (width < 720) {
					setDisplayGrid(medium, setMedium, 'grid')
					setChangedMedium(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, 'grid')
					if (!changedLarge) setDisplayGrid(large, setLarge, 'grid')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, 'grid')
				} else if (width < 970) {
					setDisplayGrid(large, setLarge, 'grid')
					setChangedLarge(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, 'grid')
					if (!changedMedium) setDisplayGrid(medium, setMedium, 'grid')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, 'grid')
				} else {
					setDisplayGrid(xlarge, setXlarge, 'grid')
					setChangedSmall(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, 'grid')
					if (!changedMedium) setDisplayGrid(medium, setMedium, 'grid')
					if (!changedLarge) setDisplayGrid(large, setLarge, 'grid')
				}
			} else {
				if (width < 540) {
					setDisplayGrid(small, setSmall, '')
					setChangedSmall(true)
					if (!changedMedium) setDisplayGrid(medium, setMedium, '')
					if (!changedLarge) setDisplayGrid(large, setLarge, '')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, '')
				} else if (width < 720) {
					setDisplayGrid(medium, setMedium, '')
					setChangedMedium(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, '')
					if (!changedLarge) setDisplayGrid(large, setLarge, '')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, '')
				} else if (width < 970) {
					setDisplayGrid(large, setLarge, '')
					setChangedLarge(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, '')
					if (!changedMedium) setDisplayGrid(medium, setMedium, '')
					if (!changedXlarge) setDisplayGrid(xlarge, setXlarge, '')
				} else {
					setDisplayGrid(xlarge, setXlarge, '')
					setChangedXlarge(true)
					if (!changedSmall) setDisplayGrid(small, setSmall, '')
					if (!changedMedium) setDisplayGrid(medium, setMedium, '')
					if (!changedLarge) setDisplayGrid(large, setLarge, '')
				}
			}
			setChangedGrid(false)
		}
	}, [grid, grid1])

	useEffect(() => setGrid1(!grid1), [grid])

	const setDisplayGrid = (obj, setObj, value) => {
		const temp = Object.assign({}, obj)
		temp.display = value
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && grid && changedGrid) {
			if (width < 540) {
				setGridRow(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setGridRow(medium, setMedium)
				if (!changedLarge) setGridRow(large, setLarge)
				if (!changedXlarge) setGridRow(xlarge, setXlarge)
			} else if (width < 720) {
				setGridRow(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setGridRow(small, setSmall)
				if (!changedLarge) setGridRow(large, setLarge)
				if (!changedXlarge) setGridRow(xlarge, setXlarge)
			} else if (width < 970) {
				setGridRow(large, setLarge)
				setChangedLarge(true)
				if (!changedSmall) setGridRow(small, setSmall)
				if (!changedMedium) setGridRow(medium, setMedium)
				if (!changedXlarge) setGridRow(xlarge, setXlarge)
			} else {
				setGridRow(xlarge, setXlarge)
				setChangedSmall(true)
				if (!changedSmall) setGridRow(small, setSmall)
				if (!changedMedium) setGridRow(medium, setMedium)
				if (!changedLarge) setGridRow(large, setLarge)
			}

			setChangedGrid(false)
		}
	}, [grid, rowsNum, rowValues])

	const setGridRow = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		let gridRow = ''

		if (rowsNum > 0) {
			for (let i = 0; i < rowsNum; i++) gridRow += `${rowValues[i][0]}${rowValues[i][1]} `
		}

		temp.gridTemplateRows = gridRow

		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && grid && changedGrid) {
			if (width < 540) {
				setGridCol(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setGridCol(medium, setMedium)
				if (!changedLarge) setGridCol(large, setLarge)
				if (!changedXlarge) setGridCol(xlarge, setXlarge)
			} else if (width < 720) {
				setGridCol(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setGridCol(small, setSmall)
				if (!changedLarge) setGridCol(large, setLarge)
				if (!changedXlarge) setGridCol(xlarge, setXlarge)
			} else if (width < 970) {
				setGridCol(large, setLarge)
				setChangedLarge(true)
				if (!changedSmall) setGridCol(small, setSmall)
				if (!changedMedium) setGridCol(medium, setMedium)
				if (!changedXlarge) setGridCol(xlarge, setXlarge)
			} else {
				setGridCol(xlarge, setXlarge)
				setChangedSmall(true)
				if (!changedSmall) setGridCol(small, setSmall)
				if (!changedMedium) setGridCol(medium, setMedium)
				if (!changedLarge) setGridCol(large, setLarge)
			}

			setChangedGrid(true)
		}
	}, [grid, colsNum, colValues])

	const setGridCol = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		let gridCol = ''

		if (colsNum > 0) {
			for (let i = 0; i < colsNum; i++) gridCol += `${colValues[i][0]}${colValues[i][1]} `
		}

		temp.gridTemplateColumns = gridCol

		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && grid && changedGrid) {
			if (width < 540) {
				setRowGapValue(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setRowGapValue(medium, setMedium)
				if (!changedLarge) setRowGapValue(large, setLarge)
				if (!changedXlarge) setRowGapValue(xlarge, setXlarge)
			} else if (width < 720) {
				setRowGapValue(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setRowGapValue(small, setSmall)
				if (!changedLarge) setRowGapValue(large, setLarge)
				if (!changedXlarge) setRowGapValue(xlarge, setXlarge)
			} else if (width < 970) {
				setRowGapValue(large, setLarge)
				setChangedLarge(true)
				if (!changedSmall) setRowGapValue(small, setSmall)
				if (!changedMedium) setRowGapValue(medium, setMedium)
				if (!changedXlarge) setRowGapValue(xlarge, setXlarge)
			} else {
				setRowGapValue(xlarge, setXlarge)
				setChangedSmall(true)
				if (!changedSmall) setRowGapValue(small, setSmall)
				if (!changedMedium) setRowGapValue(medium, setMedium)
				if (!changedLarge) setRowGapValue(large, setLarge)
			}

			setChangedGrid(true)
		}
	}, [grid, rowGap])

	const setRowGapValue = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		temp.rowGap = `${rowGap}px`
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && grid && changedGrid) {
			if (width < 540) {
				setColGapValue(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setColGapValue(medium, setMedium)
				if (!changedLarge) setColGapValue(large, setLarge)
				if (!changedXlarge) setColGapValue(xlarge, setXlarge)
			} else if (width < 720) {
				setColGapValue(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setColGapValue(small, setSmall)
				if (!changedLarge) setColGapValue(large, setLarge)
				if (!changedXlarge) setColGapValue(xlarge, setXlarge)
			} else if (width < 970) {
				setColGapValue(large, setLarge)
				setChangedLarge(true)
				if (!changedSmall) setColGapValue(small, setSmall)
				if (!changedMedium) setColGapValue(medium, setMedium)
				if (!changedXlarge) setColGapValue(xlarge, setXlarge)
			} else {
				setColGapValue(xlarge, setXlarge)
				setChangedSmall(true)
				if (!changedSmall) setColGapValue(small, setSmall)
				if (!changedMedium) setColGapValue(medium, setMedium)
				if (!changedLarge) setColGapValue(large, setLarge)
			}

			setChangedGrid(true)
		}
	}, [grid, colGap])

	const setColGapValue = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		temp.columnGap = `${colGap}px`
		setObj(temp)
	}

	const showRowsFunc = () => {
		const temp = []

		for (let i = 0; i < rowsNum; i++) {
			temp.push(
				<div className='ínvalue' key={i}>
					<input
						min='0'
						id={`r-rowinput${i}`}
						defaultValue='0'
						type='number'
						onChange={e => {
							setChangedGrid(true)
							setRowsValues(e, i)
						}}
					/>
					<select
						id={`r-rowselect${i}`}
						onChange={e => {
							setChangedGrid(true)
							setRowsValuesType(e, i)
						}}>
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
					<input
						min='0'
						id={`c-colinput${i}`}
						defaultValue='0'
						type='number'
						onChange={e => {
							setChangedGrid(true)
							setColsValues(e, i)
						}}
					/>
					<select
						id={`c-colselect${i}`}
						onChange={e => {
							setChangedGrid(true)
							setColsValuesType(e, i)
						}}>
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
		const temp = []
		rowValues.forEach(e => temp.push(e))
		temp[index][0] = parseInt(e.target.value)
		setRowValues(temp)
	}
	const setRowsValuesType = (e, index) => {
		const temp = []
		rowValues.forEach(e => temp.push(e))
		temp[index][1] = e.target.value.toLowerCase()
		setRowValues(temp)
	}
	const setColsValues = (e, index) => {
		const temp = []
		colValues.forEach(e => temp.push(e))
		temp[index][0] = parseInt(e.target.value)
		setColValues(temp)
	}
	const setColsValuesType = (e, index) => {
		const temp = []
		colValues.forEach(e => temp.push(e))
		temp[index][1] = e.target.value.toLowerCase()
		setColValues(temp)
	}

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='grid'>
				<input
					id='r-c-grid'
					type='checkbox'
					onChange={e => {
						setChangedGrid(true)
						setGrid(e.target.checked)
					}}
				/>
				<label>Rows / Columns</label>
			</div>
			<div className='row-col-div' style={{ display: grid ? 'grid' : 'none' }}>
				<div className='margins two-rows'>
					<div className='gap'>
						<label>R-G:</label>
						<input
							type='number'
							min='0'
							id='r-c-rowgap'
							onChange={e => {
								setChangedGrid(true)
								setRowGap(e.target.value)
							}}
						/>
					</div>
					<div>
						<label>No: Rows</label>
						<input
							type='number'
							min='0'
							max='12'
							placeholder='No: rows'
							id='r-c-row'
							onChange={e => {
								setChangedGrid(true)
								setRowsNum(e.target.value)
							}}
						/>

						<div className='row'>{showRowsFunc()}</div>
					</div>
				</div>
				<div className='margins left-border'>
					<div className='gap'>
						<label>C-G:</label>
						<input
							type='number'
							min='0'
							id='r-c-colgap'
							onChange={e => {
								setChangedGrid(true)
								setColGap(e.target.value)
							}}
						/>
					</div>
					<div>
						<label>No: Columns</label>
						<input
							type='number'
							min='0'
							max='12'
							placeholder='No: cols'
							id='r-c-col'
							onChange={e => {
								setChangedGrid(true)
								setColsNum(e.target.value)
							}}
						/>
						<div className='çol'>{showColFunc()}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DivProperties
