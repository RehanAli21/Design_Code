import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Display = ({ type }) => {
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
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)
	const [display, setDisplay] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge && display !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', display === 'normal' ? '' : display)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display === 'normal' ? '' : display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display === 'normal' ? '' : display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display === 'normal' ? '' : display)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', display === 'normal' ? '' : display)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display === 'normal' ? '' : display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display === 'normal' ? '' : display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display === 'normal' ? '' : display)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'display', display === 'normal' ? '' : display)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display === 'normal' ? '' : display)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display === 'normal' ? '' : display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display === 'normal' ? '' : display)
			} else {
				setProperties(xlarge, setXlarge, 'display', display === 'normal' ? '' : display)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display === 'normal' ? '' : display)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display === 'normal' ? '' : display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display === 'normal' ? '' : display)
			}
		}
	}, [display])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='two'>
			<label>Display:</label>
			{type === 'separateLine' ? (
				<select id='display-show-select' onChange={e => setDisplay(e.target.value)}>
					<option value='normal'>Normal</option>
					<option value='block'>Separate Line</option>
					<option value='none'>Hide</option>
				</select>
			) : type === 'sameLine' ? (
				<select id='display-show-select' onChange={e => setDisplay(e.target.value)}>
					<option value='normal'>Normal</option>
					<option value='inline-block'>Same Line</option>
					<option value='none'>Hide</option>
				</select>
			) : (
				<select id='display-show-select' onChange={e => setDisplay(e.target.value)}>
					<option value='normal'>Show</option>
					<option value='none'>Hide</option>
				</select>
			)}
		</div>
	)
}

export default Display
