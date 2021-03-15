import React, { useState, useEffect, useContext } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const DivProperties = ({ width }) => {
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

	useEffect(() => {
		if (small && medium && large && xlarge) {
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
		}
	}, [grid, grid1])

	useEffect(() => setGrid1(!grid1), [grid])

	const setDisplayGrid = (obj, setObj, value) => {
		const temp = Object.assign({}, obj)
		temp.display = value
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
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
		if (small && medium && large && xlarge && grid) {
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

	const showRowsFunc = () => {
		const temp = []

		for (let i = 0; i < rowsNum; i++) {
			temp.push(
				<div className='ínvalue' key={i}>
					<input min='0' defaultValue='0' type='number' onChange={e => setRowsValues(e, i)} />
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
					<input min='0' defaultValue='0' type='number' onChange={e => setColsValues(e, i)} />
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
				<input type='checkbox' onChange={() => setGrid(!grid)} />
				<label>Rows / Columns</label>
			</div>
			<div className='row-col-div' style={{ display: grid ? 'grid' : 'none' }}>
				<div className='margins'>
					<input type='number' min='0' max='12' placeholder='No: rows' onChange={e => setRowNum(e.target.value)} />
					<div className='row'>{showRowsFunc()}</div>
				</div>
				<div className='margins left-border'>
					<input type='number' min='0' max='12' placeholder='No: cols' onChange={e => setColsNum(e.target.value)} />
					<div className='çol'>{showColFunc()}</div>
				</div>
			</div>
		</div>
	)
}

export default DivProperties
