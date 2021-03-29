import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const Font = ({ type }) => {
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
	const { fontSizes, fonts } = useContext(TemplateContext)

	const [lineHeight, setLineHeight] = useState('')
	const [letterSpace, setLetterSpace] = useState('')
	const [font, setFont] = useState('')
	const [fontSize, setFontSize] = useState('')
	const [fontWeight, setFontWeight] = useState('')
	const [fontStyle, setFontStyle] = useState('')

	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//For font, fontSize default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const fontSelect = document.getElementById('btn-fontselect')
			const fontSizeInput = document.getElementById('btn-fontsize')
			const fontSizeSelect = document.getElementById('btn-fontsizeselect')
			const fontWeightSelect = document.getElementById('btn-fontWeight')
			const fontStyleSelect = document.getElementById('btn-fontStyle')
			const lineHeight = document.getElementById('btn-lineHeight')

			if (width < 540) {
				lineHeight.value = small.lineHeight ? small.lineHeight.split('p')[0] : 0
				fontSelect.value = small.fontFamily ? small.fontFamily : 'default'
				fontSizeInput.value = small.fontSize ? small.fontSize.split('p')[0] : 0
				fontSizeSelect.value = small.fontSize ? small.fontSize : 'custom'
				fontWeightSelect.value = small.fontWeight ? small.fontWeight : 'normal'
				fontStyleSelect.value = small.fontStyle ? small.fontStyle : 'normal'
			} else if (width < 720) {
				lineHeight.value = medium.lineHeight ? medium.lineHeight.split('p')[0] : 0
				fontSelect.value = medium.fontFamily ? medium.fontFamily : 'default'
				fontSizeInput.value = medium.fontSize ? medium.fontSize.split('p')[0] : 0
				fontSizeSelect.value = medium.fontSize ? medium.fontSize : 'custom'
				fontWeightSelect.value = medium.fontWeight ? medium.fontWeight : 'normal'
				fontStyleSelect.value = medium.fontStyle ? medium.fontStyle : 'normal'
			} else if (width < 970) {
				lineHeight.value = large.lineHeight ? large.lineHeight.split('p')[0] : 0
				fontSelect.value = large.fontFamily ? large.fontFamily : 'default'
				fontSizeInput.value = large.fontSize ? large.fontSize.split('p')[0] : 0
				fontSizeSelect.value = large.fontSize ? large.fontSize : 'custom'
				fontWeightSelect.value = large.fontWeight ? large.fontWeight : 'normal'
				fontStyleSelect.value = large.fontStyle ? large.fontStyle : 'normal'
			} else {
				lineHeight.value = xlarge.lineHeight ? xlarge.lineHeight.split('p')[0] : 0
				fontSelect.value = xlarge.fontFamily ? xlarge.fontFamily : 'default'
				fontSizeInput.value = xlarge.fontSize ? xlarge.fontSize.split('p')[0] : 0
				fontSizeSelect.value = xlarge.fontSize ? xlarge.fontSize : 'custom'
				fontWeightSelect.value = xlarge.fontWeight ? xlarge.fontWeight : 'normal'
				fontStyleSelect.value = xlarge.fontStyle ? xlarge.fontStyle : 'normal'
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

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

	//For changing lineHeight
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

	//For changing font
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'fontFamily', font)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'fontFamily', font)
				if (!changedLarge) setProperties(large, setLarge, 'fontFamily', font)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontFamily', font)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'fontFamily', font)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontFamily', font)
				if (!changedLarge) setProperties(large, setLarge, 'fontFamily', font)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontFamily', font)
			} else if (width < 970) {
				setProperties(large, setLarge, 'fontFamily', font)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontFamily', font)
				if (!changedMedium) setProperties(medium, setMedium, 'fontFamily', font)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontFamily', font)
			} else {
				setProperties(xlarge, setXlarge, 'fontFamily', font)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontFamily', font)
				if (!changedMedium) setProperties(medium, setMedium, 'fontFamily', font)
				if (!changedLarge) setProperties(large, setLarge, 'fontFamily', font)
			}
		}
	}, [font])

	//For changing fontsize
	useEffect(() => {
		if (small && medium && large && xlarge && fontSize !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'fontSize', fontSize)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'fontSize', fontSize)
				if (!changedLarge) setProperties(large, setLarge, 'fontSize', fontSize)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontSize', fontSize)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'fontSize', fontSize)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontSize', fontSize)
				if (!changedLarge) setProperties(large, setLarge, 'fontSize', fontSize)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontSize', fontSize)
			} else if (width < 970) {
				setProperties(large, setLarge, 'fontSize', fontSize)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontSize', fontSize)
				if (!changedMedium) setProperties(medium, setMedium, 'fontSize', fontSize)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontSize', fontSize)
			} else {
				setProperties(xlarge, setXlarge, 'fontSize', fontSize)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontSize', fontSize)
				if (!changedMedium) setProperties(medium, setMedium, 'fontSize', fontSize)
				if (!changedLarge) setProperties(large, setLarge, 'fontSize', fontSize)
			}
		}
	}, [fontSize])

	//For changing fontWeight
	useEffect(() => {
		if (small && medium && large && xlarge && fontWeight !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'fontWeight', fontWeight)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'fontWeight', fontWeight)
				if (!changedLarge) setProperties(large, setLarge, 'fontWeight', fontWeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontWeight', fontWeight)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'fontWeight', fontWeight)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontWeight', fontWeight)
				if (!changedLarge) setProperties(large, setLarge, 'fontWeight', fontWeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontWeight', fontWeight)
			} else if (width < 970) {
				setProperties(large, setLarge, 'fontWeight', fontWeight)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontWeight', fontWeight)
				if (!changedMedium) setProperties(medium, setMedium, 'fontWeight', fontWeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontWeight', fontWeight)
			} else {
				setProperties(xlarge, setXlarge, 'fontWeight', fontWeight)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontWeight', fontWeight)
				if (!changedMedium) setProperties(medium, setMedium, 'fontWeight', fontWeight)
				if (!changedLarge) setProperties(large, setLarge, 'fontWeight', fontWeight)
			}
		}
	}, [fontWeight])

	//For changing fontStyle
	useEffect(() => {
		if (small && medium && large && xlarge && fontStyle !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'fontStyle', fontStyle)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'fontStyle', fontStyle)
				if (!changedLarge) setProperties(large, setLarge, 'fontStyle', fontStyle)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontStyle', fontStyle)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'fontStyle', fontStyle)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontStyle', fontStyle)
				if (!changedLarge) setProperties(large, setLarge, 'fontStyle', fontStyle)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontStyle', fontStyle)
			} else if (width < 970) {
				setProperties(large, setLarge, 'fontStyle', fontStyle)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontStyle', fontStyle)
				if (!changedMedium) setProperties(medium, setMedium, 'fontStyle', fontStyle)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'fontStyle', fontStyle)
			} else {
				setProperties(xlarge, setXlarge, 'fontStyle', fontStyle)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'fontStyle', fontStyle)
				if (!changedMedium) setProperties(medium, setMedium, 'fontStyle', fontStyle)
				if (!changedLarge) setProperties(large, setLarge, 'fontStyle', fontStyle)
			}
		}
	}, [fontStyle])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const showTemplateFontSizes = () => {
		const temp = []
		temp.push(
			<option key='custom' value='custom'>
				Custom
			</option>
		)
		for (const key in fontSizes) {
			temp.push(
				<option key={key} value={fontSizes[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				defaultValue='custom'
				id='btn-fontsizeselect'
				onChange={e => {
					setFontSize(e.target.value)
					setShowCustomFontSize(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	const showTemplateFonts = () => {
		const temp = []
		temp.push(
			<option key={'default'} value='default'>
				Default
			</option>
		)
		for (const key in fonts) {
			temp.push(
				<option key={key} value={fonts[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				id='btn-fontselect'
				defaultValue='default'
				onChange={e => setFont(e.target.value === 'default' ? '' : e.target.value)}>
				{temp}
			</select>
		)
	}

	return (
		<React.Fragment>
			<div style={{ display: type === 'text' ? 'grid' : 'none' }} className='two'>
				<label>Line Height: </label>
				<input
					id='btn-lineHeight'
					type='number'
					defaultValue='0'
					min='0'
					onChange={e => setLineHeight(`${e.target.value}px`)}
				/>
			</div>
			<div className='two'>
				<label>Fonts: </label>
				{showTemplateFonts()}
			</div>
			<div className='three'>
				<label>Font size: </label>
				{showTemplateFontSizes()}
				<input
					disabled={!showCustomFontSize}
					onChange={e => setFontSize(`${e.target.value}px`)}
					type='number'
					min='0'
					id='btn-fontsize'
				/>
			</div>
			<div className='two'>
				<label>Font Weight: </label>
				<select onChange={e => setFontWeight(e.target.value)} id='btn-fontWeight'>
					<option value='normal'>Regular</option>
					<option value='lighter'>Light</option>
					<option value='bold'>Bold</option>
				</select>
			</div>
			<div className='two'>
				<label>Font Style: </label>
				<select onChange={e => setFontStyle(e.target.value)} id='btn-fontStyle'>
					<option value='normal'>Normal</option>
					<option value='italic'>Italic</option>
				</select>
			</div>
			<div className='two'>
				<label>Letter spacing: </label>
				<input
					id='text-letterspace'
					type='number'
					defaultValue='0'
					min='0'
					onChange={e => setLetterSpace(`${e.target.value}px`)}
				/>
			</div>
		</React.Fragment>
	)
}

export default Font
