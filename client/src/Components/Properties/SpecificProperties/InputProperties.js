import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const InputProperties = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)
	const { colors, fontSizes, fonts } = useContext(TemplateContext)

	const [type, setType] = useState('')
	const [placeholder, setPlaceholder] = useState('')
	const [maxLength, setMaxLength] = useState(0)
	const [textColor, setTextColor] = useState('')
	const [font, setFont] = useState('')
	const [fontSize, setFontSize] = useState('')

	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//For setting default values of type select and placeholder
	useEffect(() => {
		const typeSelect = document.getElementById('i-s-typeSelect')
		const placeholderInput = document.getElementById('i-s-placeholderinput')
		const maxLengthInput = document.getElementById('i-s-maxLengthInput')
		const values = findAndReturnAttribues(pages[activePage])

		if (values && typeSelect && placeholderInput) {
			typeSelect.value = values[0]
			placeholderInput.value = values[1]
			maxLengthInput.value = values[2] === 0 ? '' : values[2]
		}
	})
	//for find element and return attributes values
	const findAndReturnAttribues = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return [arr[i][1].type, arr[i][1].placeholder, arr[i][1].maxLength]
			} else if (arr[i][2]) {
				findAndReturnAttribues(arr[i][2])
			}
		}
	}

	//For type change of input
	useEffect(() => {
		if (type !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', type)
			setPages(temp)
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

	const showTemplateFonts = () => {
		const temp = []
		temp.push(<option value='default'>Default</option>)
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
		</div>
	)
}

export default InputProperties
