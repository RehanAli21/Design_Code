import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const Text = () => {
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
	const { width, activeElement } = useContext(PageContext)
	const { colors } = useContext(TemplateContext)

	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [lineHeight, setLineHeight] = useState('')
	const [letterSpace, setLetterSpace] = useState('')
	const [wordSpace, setWordSpace] = useState('')
	const [textTransform, setTextTransform] = useState('')

	//For textcolor default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const textColorInput = document.getElementById('btn-textcolor')
			const textColorSelect = document.getElementById('btn-colorselect')

			textColorInput.value = large.color ? large.color : '#000000'
			textColorSelect.value = large.color ? large.color : 'custom'
		}
	}, [width, activeElement, small, large, medium, xlarge])

	//For Changing color of button
	useEffect(() => {
		if (small && medium && large && xlarge && textColor !== '') {
			setProperties(small, setSmall, 'color', textColor)
			setProperties(medium, setMedium, 'color', textColor)
			setProperties(large, setLarge, 'color', textColor)
			setProperties(xlarge, setXlarge, 'color', textColor)
		}
	}, [textColor])

	//For changing lineHeight
	useEffect(() => {
		if (small && medium && large && xlarge && lineHeight !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'lineHeight', lineHeight)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'lineHeight', lineHeight)
				if (!changedLarge) setProperties(large, setLarge, 'lineHeight', lineHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'lineHeight', lineHeight)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'lineHeight', lineHeight)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'lineHeight', lineHeight)
				if (!changedLarge) setProperties(large, setLarge, 'lineHeight', lineHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'lineHeight', lineHeight)
			} else if (width < 970) {
				setProperties(large, setLarge, 'lineHeight', lineHeight)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'lineHeight', lineHeight)
				if (!changedMedium) setProperties(medium, setMedium, 'lineHeight', lineHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'lineHeight', lineHeight)
			} else {
				setProperties(xlarge, setXlarge, 'lineHeight', lineHeight)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'lineHeight', lineHeight)
				if (!changedMedium) setProperties(medium, setMedium, 'lineHeight', lineHeight)
				if (!changedLarge) setProperties(large, setLarge, 'lineHeight', lineHeight)
			}
		}
	}, [lineHeight])

	//For changing Letter space
	useEffect(() => {
		if (small && medium && large && xlarge && letterSpace !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'letterSpacing', letterSpace)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'letterSpacing', letterSpace)
				if (!changedLarge) setProperties(large, setLarge, 'letterSpacing', letterSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'letterSpacing', letterSpace)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'letterSpacing', letterSpace)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'letterSpacing', letterSpace)
				if (!changedLarge) setProperties(large, setLarge, 'letterSpacing', letterSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'letterSpacing', letterSpace)
			} else if (width < 970) {
				setProperties(large, setLarge, 'letterSpacing', letterSpace)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'letterSpacing', letterSpace)
				if (!changedMedium) setProperties(medium, setMedium, 'letterSpacing', letterSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'letterSpacing', letterSpace)
			} else {
				setProperties(xlarge, setXlarge, 'letterSpacing', letterSpace)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'letterSpacing', letterSpace)
				if (!changedMedium) setProperties(medium, setMedium, 'letterSpacing', letterSpace)
				if (!changedLarge) setProperties(large, setLarge, 'letterSpacing', letterSpace)
			}
		}
	}, [letterSpace])

	//For word spacing
	useEffect(() => {
		if (small && medium && large && xlarge && wordSpace !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'wordSpacing', wordSpace)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'wordSpacing', wordSpace)
				if (!changedLarge) setProperties(large, setLarge, 'wordSpacing', wordSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'wordSpacing', wordSpace)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'wordSpacing', wordSpace)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'wordSpacing', wordSpace)
				if (!changedLarge) setProperties(large, setLarge, 'wordSpacing', wordSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'wordSpacing', wordSpace)
			} else if (width < 970) {
				setProperties(large, setLarge, 'wordSpacing', wordSpace)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'wordSpacing', wordSpace)
				if (!changedMedium) setProperties(medium, setMedium, 'wordSpacing', wordSpace)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'wordSpacing', wordSpace)
			} else {
				setProperties(xlarge, setXlarge, 'wordSpacing', wordSpace)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'wordSpacing', wordSpace)
				if (!changedMedium) setProperties(medium, setMedium, 'wordSpacing', wordSpace)
				if (!changedLarge) setProperties(large, setLarge, 'wordSpacing', wordSpace)
			}
		}
	}, [wordSpace])

	//For Text Transform
	useEffect(() => {
		if (small && medium && large && xlarge && textTransform !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'textTransform', textTransform)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'textTransform', textTransform)
				if (!changedLarge) setProperties(large, setLarge, 'textTransform', textTransform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'textTransform', textTransform)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'textTransform', textTransform)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'textTransform', textTransform)
				if (!changedLarge) setProperties(large, setLarge, 'textTransform', textTransform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'textTransform', textTransform)
			} else if (width < 970) {
				setProperties(large, setLarge, 'textTransform', textTransform)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'textTransform', textTransform)
				if (!changedMedium) setProperties(medium, setMedium, 'textTransform', textTransform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'textTransform', textTransform)
			} else {
				setProperties(xlarge, setXlarge, 'textTransform', textTransform)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'textTransform', textTransform)
				if (!changedMedium) setProperties(medium, setMedium, 'textTransform', textTransform)
				if (!changedLarge) setProperties(large, setLarge, 'textTransform', textTransform)
			}
		}
	}, [textTransform])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const showTemplateColors = () => {
		const temp = []
		temp.push(
			<option key='custom' value='custom'>
				Custom
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
				defaultValue='custom'
				id='btn-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>TEXT</p>
			<div className='three'>
				<label>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='btn-textcolor'
				/>
			</div>
			<div className='t-three'>
				<div className='t-two'>
					<label>L</label>
					<input onChange={e => setLetterSpace(`${e.target.value}px`)} type='number' min='0' defaultValue='0' />
				</div>
				<div className='t-two'>
					<label>W</label>
					<input onChange={e => setWordSpace(`${e.target.value}px`)} type='number' min='0' defaultValue='0' />
				</div>
				<div className='t-two'>
					<label>H</label>
					<input onChange={e => setLineHeight(`${e.target.value}px`)} type='number' min='0' />
				</div>
			</div>
		</div>
	)
}

export default Text
