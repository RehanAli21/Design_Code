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

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
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
		</div>
	)
}

export default DivProperties
