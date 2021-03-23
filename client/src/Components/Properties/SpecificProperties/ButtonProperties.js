import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ButtonProperties = () => {
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

	const [text, setText] = useState('')
	const [textColor, setTextColor] = useState('')
	const [font, setFont] = useState('')
	const [fontSize, setFontSize] = useState('')

	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//For setting default values of button text
	useEffect(() => {
		const textInput = document.getElementById('btn-textInput')
		const value = findAndReturnText(pages[activePage])
		if (value && textInput) {
			textInput.value = value
		}
	})
	//for find element and return button text
	const findAndReturnText = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return arr[i][1].text
			} else if (arr[i][2]) {
				findAndReturnText(arr[i][2])
			}
		}
	}

	//For textcolor, font, fontSize default value of button
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const fontSelect = document.getElementById('btn-fontselect')
			const fontSizeInput = document.getElementById('btn-fontsize')
			const fontSizeSelect = document.getElementById('btn-fontsizeselect')
			const textColorInput = document.getElementById('btn-textcolor')
			const textColorSelect = document.getElementById('btn-colorselect')

			if (width < 540) {
				fontSelect.value = small.fontFamily ? small.fontFamily : 'default'
				fontSizeInput.value = small.fontSize ? small.fontSize : 0
				fontSizeSelect.value = small.fontSize ? small.fontSize : 'custom'
				textColorInput.value = small.color ? small.color : '#000000'
				textColorSelect.value = small.color ? small.color : 'custom'
			} else if (width < 720) {
				fontSelect.value = medium.fontFamily ? medium.fontFamily : 'default'
				fontSizeInput.value = medium.fontSize ? medium.fontSize : 0
				fontSizeSelect.value = medium.fontSize ? medium.fontSize : 'custom'
				textColorInput.value = medium.color ? medium.color : '#000000'
				textColorSelect.value = medium.color ? medium.color : 'custom'
			} else if (width < 970) {
				fontSelect.value = large.fontFamily ? large.fontFamily : 'default'
				fontSizeInput.value = large.fontSize ? large.fontSize : 0
				fontSizeSelect.value = large.fontSize ? large.fontSize : 'custom'
				textColorInput.value = large.color ? large.color : '#000000'
				textColorSelect.value = large.color ? large.color : 'custom'
			} else {
				fontSelect.value = xlarge.fontFamily ? xlarge.fontFamily : 'default'
				fontSizeInput.value = xlarge.fontSize ? xlarge.fontSize : 0
				fontSizeSelect.value = xlarge.fontSize ? xlarge.fontSize : 'custom'
				textColorInput.value = xlarge.color ? xlarge.color : '#000000'
				textColorSelect.value = xlarge.color ? xlarge.color : 'custom'
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	//For text change of button
	useEffect(() => {
		if (text !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'text', text)
			setPages(temp)
		}
	}, [text])

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

	//For Changing color of button
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

	//For changing font of button
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

	//For changing fontsize of button
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
		<div className='borders btn-specific'>
			<p className='second-heading'>Button Properties</p>
			<div className='two'>
				<label>Text: </label>
				<input id='btn-textInput' onChange={e => setText(e.target.value)} type='text' placeholder='Text' />
			</div>
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
		</div>
	)
}

export default ButtonProperties
