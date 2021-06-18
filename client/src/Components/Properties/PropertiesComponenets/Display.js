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
	const [change, setChange] = useState(false)

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const displaySelect = document.getElementById('display-show-select')

			if (displaySelect) {
				if (width < sBreakPoint) {
					displaySelect.value = small.display && small.display !== '' ? small.display : 'normal'
				} else if (width < mBreakPoint) {
					displaySelect.value = medium.display && medium.display !== '' ? medium.display : 'normal'
				} else if (width < lBreakPoint) {
					displaySelect.value = large.display && large.display !== '' ? large.display : 'normal'
				} else {
					displaySelect.value = xlarge.display && xlarge.display !== '' ? xlarge.display : 'normal'
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge && change && display !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', display)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', display)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'display', display)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', display)
			} else {
				setProperties(xlarge, setXlarge, 'display', display)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', display)
				if (!changedMedium) setProperties(medium, setMedium, 'display', display)
				if (!changedLarge) setProperties(large, setLarge, 'display', display)
			}
			setChange(false)
		}
	}, [display, change])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property === 'normal' ? '' : property
		setObj(temp)
	}

	return (
		<div className='two'>
			<label>Display:</label>
			<select
				id='display-show-select'
				onChange={e => {
					setDisplay(e.target.value)
					setChange(true)
				}}>
				<option value='normal'>Normal</option>
				<option style={{ display: type === 'separateLine' ? 'block' : 'none' }} value='block'>
					Separate Line
				</option>
				<option style={{ display: type === 'sameLine' ? 'block' : 'none' }} value='inline-block'>
					Same Line
				</option>
				<option value='none'>Hide</option>
			</select>
		</div>
	)
}

export default Display
