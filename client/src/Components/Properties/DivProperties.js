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

			if (width < sBreakPoint) {
				overflowSelect.value = small.overflow ? small.overflow : 'visible'
			} else if (width < mBreakPoint) {
				overflowSelect.value = medium.overflow ? medium.overflow : 'visible'
			} else if (width < lBreakPoint) {
				overflowSelect.value = large.overflow ? large.overflow : 'visible'
			} else {
				overflowSelect.value = xlarge.overflow ? xlarge.overflow : 'visible'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

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
		for (let i = 0; i < rowNum; i++) {
			temp.push(
				<div key={`row${i}`} className='invalue'>
					<input id={`r-c-row${i}`} type='number' onChange={applyRows} defaultValue='0' />
					<select id={`r-c-rowU${i}`} onChange={applyRows}>
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
		for (let i = 0; i < colNum; i++) {
			temp.push(
				<div key={`col${i}`} className='invalue'>
					<input id={`r-c-col${i}`} type='number' />
					<select id={`r-c-colU${i}`}>
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

	const applyRows = () => {
		const rows = []
		for (let i = 0; i < rowNum; i++) {
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
			<Display />
			<Cursor style={showDivProperties ? 'grid' : 'none'} />
			<GridColumn style={showDivProperties ? 'grid' : 'none'} />
			<BGImage display={showDivProperties ? 'grid' : 'none'} width={width} activeElement={activeElement} />
			<div className='grid'>
				<input
					type='checkbox'
					id='r-c-checkbox'
					onChange={e => {
						setGrid(e.target.checked ? 'yes' : 'no')
						setShowGridComps(e.target.checked ? 'yes' : 'no')
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
								onChange={e => setRowNum(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)}
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
								onChange={e => setColNum(e.target.value > 12 ? 12 : e.target.value < 0 ? 0 : e.target.value)}
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
