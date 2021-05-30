import React, { useContext, useState, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ClickAdvOne = () => {
	const { clickadv, setClickadv, showCAP, setShowCAP } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)

	const [duration, setDuration] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//for setting default values
	useEffect(() => {
		if (clickadv) {
			const textColorInput = document.getElementById('clickadv-textcolor')
			const textColorSelect = document.getElementById('clickadv-colorselect')
			const fontSizeInput = document.getElementById('clickadv-fontsize')
			const fontSizeSelect = document.getElementById('clickadv-fontsizeselect')
			const durationInput = document.getElementById('clickadv-duration-input')

			durationInput.value = clickadv.transitionDuration ? clickadv.transitionDuration.split('m')[0] : 0
			textColorInput.value = clickadv.color ? clickadv.color : '#000000'
			textColorSelect.value = clickadv.color ? clickadv.color : 'custom'
			fontSizeInput.value = clickadv.fontSize ? clickadv.fontSize.split('p')[0] : 16
			fontSizeSelect.value = clickadv.fontSize ? clickadv.fontSize : 'custom'
		}
	}, [width, activeElement, clickadv])

	//for setting TextColor
	useEffect(() => {
		if (clickadv && textColor !== '') {
			setProperties(clickadv, setClickadv, 'color', textColor)
		}
	}, [textColor])

	//For changing fontsize
	useEffect(() => {
		if (clickadv && fontSize !== '') {
			setProperties(clickadv, setClickadv, 'fontSize', fontSize)
		}
	}, [fontSize])

	//For changing click(adv) animation duration
	useEffect(() => {
		if (clickadv && duration !== '') {
			setProperties(clickadv, setClickadv, 'transitionDuration', duration)
		}
	}, [duration])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//For reseting all click(adv) styles
	const resetAll = () => {
		if (clickadv) setClickadv({})
	}

	////////////////////////////////////////////////
	///UI section
	////////////////////////////////////////////////

	//For setting template color options
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
				id='clickadv-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
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
				id='clickadv-fontsizeselect'
				onChange={e => {
					setFontSize(e.target.value === 'custom' ? `16px` : e.target.value)
					setShowCustomFontSize(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	return (
		<div className='borders' style={{ position: 'relative' }}>
			<p className='second-heading' onClick={() => setShowCAP(!showCAP)}>
				PROPERTIES <span style={{ display: showCAP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showCAP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<button
				onClick={resetAll}
				style={{
					position: 'absolute',
					top: '0px',
					right: '10px',
					padding: '5px 10px',
				}}>
				Reset All
			</button>
			<div className='btn-specific' style={{ display: showCAP ? 'block' : 'none' }}>
				<div className='two'>
					<label>Duration: </label>
					<input
						type='number'
						className='numberinput'
						min='0'
						step='100'
						max='5000'
						id='clickadv-duration-input'
						onChange={e => setDuration(`${e.target.value}ms`)}
					/>
				</div>
				<div className='three'>
					<label style={{ marginTop: '5px' }}>Text color: </label>
					{showTemplateColors()}
					<input
						disabled={!showCustomTextColor}
						onChange={e => setTextColor(e.target.value)}
						type='color'
						id='clickadv-textcolor'
					/>
				</div>
				<div className='three'>
					<label>Font size: </label>
					{showTemplateFontSizes()}
					<input
						disabled={!showCustomFontSize}
						onChange={e => setFontSize(`${e.target.value}px`)}
						type='number'
						min='0'
						id='clickadv-fontsize'
					/>
				</div>
			</div>
		</div>
	)
}

export default ClickAdvOne
