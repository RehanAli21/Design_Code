import React, { useState, useContext, useEffect } from 'react'
import TextChange from './PropertiesComponenets/TextChange'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { TemplateContext } from '../Contexts/TemplateContext'
import Name from './PropertiesComponenets/Name'

const OptionProperties = () => {
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
	const { colors } = useContext(TemplateContext)

	const [bgColor, setBgColor] = useState(`#ffffff`)
	const [customBgColor, setCustomBgColor] = useState(true)

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const bgColorInput = document.getElementById('a-bgcolor')

			const bgColorSelect = document.getElementById('bg-color-select')

			if (width < sBreakPoint) {
				bgColorInput.value = small.backgroundColor ? small.backgroundColor : '#ffffff'
				bgColorSelect.value = small.backgroundColor ? small.backgroundColor : 'custom'
			} else if (width < mBreakPoint) {
				bgColorInput.value = medium.backgroundColor ? medium.backgroundColor : '#ffffff'
				bgColorSelect.value = medium.backgroundColor ? medium.backgroundColor : 'custom'
			} else if (width < lBreakPoint) {
				bgColorInput.value = large.backgroundColor ? large.backgroundColor : '#ffffff'
				bgColorSelect.value = large.backgroundColor ? large.backgroundColor : 'custom'
			} else {
				bgColorInput.value = xlarge.backgroundColor ? xlarge.backgroundColor : '#ffffff'
				bgColorSelect.value = xlarge.backgroundColor ? xlarge.backgroundColor : 'custom'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	//FOr background color and opacity
	useEffect(() => {
		if (small && medium && large && xlarge) {
			let changedBgColor = ''
			if (bgColor !== 'custom') changedBgColor = bgColor

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else {
				setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
			}
		}
	}, [bgColor])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const showCustomBgColorOptions = () => {
		const temp = []

		temp.push(
			<option key='çustom' value='custom'>
				Custom
			</option>
		)
		temp.push(
			<option key='transparent' value='rgba(0,0,0,0)'>
				Transparent
			</option>
		)
		for (const key in colors) {
			temp.push(
				<option key={key} value={colors[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				id='bg-color-select'
				onChange={e => {
					setBgColor(e.target.value)
					setCustomBgColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>OPTION PROPERTIES</p>
			<Name />
			<div className='three'>
				<label style={{ marginTop: '10px' }}>Color: </label>
				{showCustomBgColorOptions()}
				<input
					disabled={!customBgColor}
					id='a-bgcolor'
					onChange={e => setBgColor(e.target.value)}
					type='color'
					defaultValue='#ffffff'
				/>
			</div>
			<TextChange type='text' display='grid' />
		</div>
	)
}

export default OptionProperties
