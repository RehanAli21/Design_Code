import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const GridColumn = () => {
	// const {
	// 	small,
	// 	setSmall,
	// 	medium,
	// 	setMedium,
	// 	large,
	// 	setLarge,
	// 	xlarge,
	// 	setXlarge,
	// 	changedSmall,
	// 	setChangedSmall,
	// 	changedMedium,
	// 	setChangedMedium,
	// 	changedLarge,
	// 	setChangedLarge,
	// 	changedXlarge,
	// 	setChangedXlarge,
	// } = useContext(PropertiesContext)
	// const { width, activeElement } = useContext(PageContext)

	const [colNum, setColNum] = useState('')
	let cols = 0

	// useEffect(() => {
	// 	if (small && medium && large && xlarge && cols !== 0) {
	// 		const gCol = colNum === 0 ? '' : `${colNum}/${colNum}`
	// 		if (width < 540) {
	// 			setProperties(small, setSmall, 'gridColumn', gCol)
	// 			setChangedSmall(true)
	// 			if (!changedMedium) setProperties(medium, setMedium, 'gridColumn', gCol)
	// 			if (!changedLarge) setProperties(large, setLarge, 'gridColumn', gCol)
	// 			if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridColumn', gCol)
	// 		} else if (width < 720) {
	// 			setProperties(medium, setMedium, 'gridColumn', gCol)
	// 			setChangedMedium(true)
	// 			if (!changedSmall) setProperties(small, setSmall, 'gridColumn', gCol)
	// 			if (!changedLarge) setProperties(large, setLarge, 'gridColumn', gCol)
	// 			if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridColumn', gCol)
	// 		} else if (width < 970) {
	// 			setProperties(large, setLarge, 'gridColumn', gCol)
	// 			setChangedLarge(true)
	// 			if (!changedSmall) setProperties(small, setSmall, 'gridColumn', gCol)
	// 			if (!changedMedium) setProperties(medium, setMedium, 'gridColumn', gCol)
	// 			if (!changedXlarge) setProperties(xlarge, setXlarge, 'gridColumn', gCol)
	// 		} else {
	// 			setProperties(xlarge, setXlarge, 'gridColumn', gCol)
	// 			setChangedXlarge(true)
	// 			if (!changedSmall) setProperties(small, setSmall, 'gridColumn', gCol)
	// 			if (!changedMedium) setProperties(medium, setMedium, 'gridColumn', gCol)
	// 			if (!changedLarge) setProperties(large, setLarge, 'gridColumn', gCol)
	// 		}
	// 	}
	// }, [colNum])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const ele = document.getElementById(activeElement)
	const show = ele && ele.parentElement && ele.parentElement.style.display === 'grid'

	if (ele && ele.parentElement && ele.parentElement.style.gridTemplateColumns) {
		cols = ele.parentElement.style.gridTemplateColumns.split(' ').length
	}

	return (
		<div className='two' style={{ display: show ? 'grid' : 'none' }}>
			<label>Col No: </label>
			<input
				onChange={e => setColNum(e.target.value)}
				className='numberinput'
				type='number'
				placeholder='col number'
				id='gridcol-input'
				max={cols}
				min='0'
			/>
		</div>
	)
}

export default GridColumn
