import React, { useContext, useState, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const HoverAdvOne = () => {
	const { hoveradv, setHoveradv, showHAP, setShowHAP } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)

	const [duration, setDuration] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//for setting default values
	useEffect(() => {
		if (hoveradv) {
			const textColorInput = document.getElementById('hoveradv-textcolor')
			const textColorSelect = document.getElementById('hoveradv-colorselect')
			const fontSizeInput = document.getElementById('hoveradv-fontsize')
			const fontSizeSelect = document.getElementById('hoveradv-fontsizeselect')
			const durationInput = document.getElementById('hoveradv-duration-input')

			durationInput.value = hoveradv.transitionDuration ? hoveradv.transitionDuration.split('m')[0] : 0
			textColorInput.value = hoveradv.color ? hoveradv.color : '#000000'
			textColorSelect.value = hoveradv.color ? hoveradv.color : 'custom'
			fontSizeInput.value = hoveradv.fontSize ? hoveradv.fontSize.split('p')[0] : 16
			fontSizeSelect.value = hoveradv.fontSize ? hoveradv.fontSize : 'custom'
		}
	}, [width, activeElement, hoveradv])

	//for setting TextColor
	useEffect(() => {
		if (hoveradv && textColor !== '') {
			setProperties(hoveradv, setHoveradv, 'color', textColor)
		}
	}, [textColor])

	//For changing fontsize
	useEffect(() => {
		if (hoveradv && fontSize !== '') {
			setProperties(hoveradv, setHoveradv, 'fontSize', fontSize)
		}
	}, [fontSize])

	//For changing click(adv) animation duration
	useEffect(() => {
		if (hoveradv && duration !== '') {
			setProperties(hoveradv, setHoveradv, 'transitionDuration', duration)
		}
	}, [duration])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//For reseting all click(adv) styles
	const resetAll = () => {
		if (hoveradv) setHoveradv({})
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
				id='hoveradv-colorselect'
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
				id='hoveradv-fontsizeselect'
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
			<p className='second-heading' onClick={() => setShowHAP(!showHAP)}>
				PROPERTIES <span style={{ display: showHAP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showHAP ? 'none' : 'inline' }}>&#9654;</span>
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
			<div className='btn-specific' style={{ display: showHAP ? 'block' : 'none' }}>
				<div className='two'>
					<label>Duration: </label>
					<input
						type='number'
						className='numberinput'
						min='0'
						step='100'
						max='5000'
						id='hoveradv-duration-input'
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
						id='hoveradv-textcolor'
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
						id='hoveradv-fontsize'
					/>
				</div>
			</div>
		</div>
	)
}

export default HoverAdvOne
