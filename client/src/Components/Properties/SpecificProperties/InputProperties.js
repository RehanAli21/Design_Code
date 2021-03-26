import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const InputProperties = () => {
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
	const { width, activePage, activeElement, pages, setPages } = useContext(PageContext)
	const { colors, fontSizes, fonts } = useContext(TemplateContext)

	const [type, setType] = useState('')
	const [placeholder, setPlaceholder] = useState('')
	const [maxLength, setMaxLength] = useState(0)
	const [min, setMin] = useState('')
	const [max, setMax] = useState('')
	const [showMinMax, setShowMinMax] = useState(false)
	const [textColor, setTextColor] = useState('')
	const [font, setFont] = useState('')
	const [fontSize, setFontSize] = useState('')
	const [fontWeight, setFontWeight] = useState('')

	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//For setting default values of type select and placeholder
	useEffect(() => {
		const typeSelect = document.getElementById('i-s-typeSelect')
		const placeholderInput = document.getElementById('i-s-placeholderinput')
		const maxLengthInput = document.getElementById('i-s-maxLengthInput')
		const minInput = document.getElementById('i-s-minValueInput')
		const maxInput = document.getElementById('i-s-maxValueInput')
		const values = findAndReturnAttribues(pages[activePage])

		if (values && typeSelect && placeholderInput) {
			typeSelect.value = values[0]
			setShowMinMax(values[0] === 'number' || values[0] === 'range')
			placeholderInput.value = values[1]
			maxLengthInput.value = values[2] === 0 ? '' : values[2]
			minInput.value = values[3]
			maxInput.value = values[4]
		}
	})
	//for find element and return attributes values
	const findAndReturnAttribues = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return [arr[i][1].type, arr[i][1].placeholder, arr[i][1].maxLength, arr[i][1].min, arr[i][1].max]
			} else if (arr[i][2]) {
				findAndReturnAttribues(arr[i][2])
			}
		}
	}

	//For textcolor, font, fontSize default value of input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const fontSelect = document.getElementById('input-fontselect')
			const fontSizeInput = document.getElementById('input-fontsize')
			const fontSizeSelect = document.getElementById('input-fontsizeselect')
			const textColorInput = document.getElementById('input-textcolor')
			const textColorSelect = document.getElementById('input-colorselect')
			const fontWeightSelect = document.getElementById('input-fontWeight')

			if (width < 540) {
				fontSelect.value = small.fontFamily ? small.fontFamily : 'default'
				fontSizeInput.value = small.fontSize ? small.fontSize.split('p')[0] : 0
				fontSizeSelect.value = small.fontSize ? small.fontSize : 'custom'
				textColorInput.value = small.color ? small.color : '#000000'
				textColorSelect.value = small.color ? small.color : 'custom'
				fontWeightSelect.value = small.fontWeight ? small.fontWeight : 'normal'
			} else if (width < 720) {
				fontSelect.value = medium.fontFamily ? medium.fontFamily : 'default'
				fontSizeInput.value = medium.fontSize ? medium.fontSize.split('p')[0] : 0
				fontSizeSelect.value = medium.fontSize ? medium.fontSize : 'custom'
				textColorInput.value = medium.color ? medium.color : '#000000'
				textColorSelect.value = medium.color ? medium.color : 'custom'
				fontWeightSelect.value = medium.fontWeight ? medium.fontWeight : 'normal'
			} else if (width < 970) {
				fontSelect.value = large.fontFamily ? large.fontFamily : 'default'
				fontSizeInput.value = large.fontSize ? large.fontSize.split('p')[0] : 0
				fontSizeSelect.value = large.fontSize ? large.fontSize : 'custom'
				textColorInput.value = large.color ? large.color : '#000000'
				textColorSelect.value = large.color ? large.color : 'custom'
				fontWeightSelect.value = large.fontWeight ? large.fontWeight : 'normal'
			} else {
				fontSelect.value = xlarge.fontFamily ? xlarge.fontFamily : 'default'
				fontSizeInput.value = xlarge.fontSize ? xlarge.fontSize.split('p')[0] : 0
				fontSizeSelect.value = xlarge.fontSize ? xlarge.fontSize : 'custom'
				textColorInput.value = xlarge.color ? xlarge.color : '#000000'
				textColorSelect.value = xlarge.color ? xlarge.color : 'custom'
				fontWeightSelect.value = xlarge.fontWeight ? xlarge.fontWeight : 'normal'
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	//For type change of input
	useEffect(() => {
		if (type !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', type)
			setPages(temp)
			setShowMinMax(type === 'number' || type === 'range')
		}
	}, [type])

	//For Placeholder change of input
	useEffect(() => {
		if (placeholder !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'placeholder', placeholder)
			setPages(temp)
		}
	}, [placeholder])

	//For MaxLength change of input
	useEffect(() => {
		if (maxLength !== 0) {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'maxLength', maxLength)
			setPages(temp)
		}
	}, [maxLength])

	//For Min change of Input
	useEffect(() => {
		if (min !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'min', min)
			setPages(temp)
		}
	}, [min])

	//For Max change of Input
	useEffect(() => {
		if (max !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'max', max)
			setPages(temp)
		}
	}, [max])

	//For finding element and changing attribute value
	const findAndChange = (arr, attribute, changedValue) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				arr[i][1][attribute] = changedValue
				return true
			} else if (arr[i][2]) {
				if (findAndChange(arr[i][2], attribute, changedValue)) {
					return true
				}
			}
		}
	}

	//For changing textColor of input
	useEffect(() => {
		if (small && medium && large && xlarge && textColor !== '') {
			if (width < 540) {
				setProperties(small, setSmall, 'color', textColor)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'color', textColor)
				if (!changedLarge) setProperties(large, setLarge, 'color', textColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'color', textColor)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'color', textColor)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'color', textColor)
				if (!changedLarge) setProperties(large, setLarge, 'color', textColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'color', textColor)
			} else if (width < 970) {
				setProperties(large, setLarge, 'color', textColor)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'color', textColor)
				if (!changedMedium) setProperties(medium, setMedium, 'color', textColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'color', textColor)
			} else {
				setProperties(xlarge, setXlarge, 'color', textColor)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'color', textColor)
				if (!changedMedium) setProperties(medium, setMedium, 'color', textColor)
				if (!changedLarge) setProperties(large, setLarge, 'color', textColor)
			}
		}
	}, [textColor])

	//For changing font of input
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

	//For changing fontSize of input
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

	//For changing fontWeight of input
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
				id='input-fontsizeselect'
				onChange={e => {
					setFontSize(e.target.value)
					setShowCustomFontSize(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
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
				id='input-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	const showTemplateFonts = () => {
		const temp = []
		temp.push(
			<option key='default' value='default'>
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
				id='input-fontselect'
				defaultValue='default'
				onChange={e => setFont(e.target.value === 'default' ? '' : e.target.value)}>
				{temp}
			</select>
		)
	}

	return (
		<div className='borders input-specific'>
			<p className='second-heading'>Input Properties</p>
			<div>
				<label>Type: </label>
				<select id='i-s-typeSelect' onChange={e => setType(e.target.value)}>
					<option value='text'>Text</option>
					<option value='number'>Number</option>
					<option value='email'>Email</option>
					<option value='password'>Password</option>
					<option value='button'>Button</option>
					<option value='checkbox'>Checkbox</option>
					<option value='radio'>Radio</option>
					<option value='date'>Date</option>
					<option value='datetime-local'>Date Time local</option>
					<option value='time'>Time</option>
					<option value='week'>Week</option>
					<option value='month'>Month</option>
					<option value='color'>Color</option>
					<option value='range'>Range</option>
					<option value='file'>File</option>
				</select>
			</div>
			<div onChange={e => setMin(e.target.value)} style={{ display: showMinMax ? 'grid' : 'none' }}>
				<label>Min Value: </label>
				<input id='i-s-minValueInput' type='number' />
			</div>
			<div onChange={e => setMax(e.target.value)} style={{ display: showMinMax ? 'grid' : 'none' }}>
				<label>Max Value: </label>
				<input id='i-s-maxValueInput' type='number' />
			</div>
			<div>
				<label>Placeholder: </label>
				<input id='i-s-placeholderinput' onChange={e => setPlaceholder(e.target.value)} type='text' placeholder='Text' />
			</div>
			<div>
				<label>Max chars: </label>
				<input id='i-s-maxLengthInput' onChange={e => setMaxLength(e.target.value)} type='number' min='0' />
			</div>
			<div className='three'>
				<label>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='input-textcolor'
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
					id='input-fontsize'
				/>
			</div>
			<div>
				<label>Font Weight: </label>
				<select onChange={e => setFontWeight(e.target.value)} id='input-fontWeight'>
					<option value='normal'>Regular</option>
					<option value='lighter'>Light</option>
					<option value='bold'>Bold</option>
				</select>
			</div>
		</div>
	)
}

export default InputProperties
