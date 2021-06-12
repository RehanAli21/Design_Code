import React, { useContext, useState, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ClickAdvOne = () => {
	const { clickTargets, setClickTargets, showCAP, setShowCAP } = useContext(PropertiesContext)
	const { setShowMsgBox, setMsgBoxMsg } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)

	const [duration, setDuration] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//for setting default values
	useEffect(() => {
		const textColorInput = document.getElementById('clickadv-textcolor')
		const textColorSelect = document.getElementById('clickadv-colorselect')
		const fontSizeInput = document.getElementById('clickadv-fontsize')
		const fontSizeSelect = document.getElementById('clickadv-fontsizeselect')
		const durationInput = document.getElementById('clickadv-duration-input')

		for (const e in clickTargets) {
			if (clickTargets[e].selected) {
				durationInput.value = clickTargets[e].style.transitionDuration
					? clickTargets[e].style.transitionDuration.split('m')[0]
					: 0
				textColorInput.value = clickTargets[e].style.color ? clickTargets[e].style.color : '#000000'
				textColorSelect.value = clickTargets[e].style.color ? clickTargets[e].style.color : 'custom'
				fontSizeInput.value = clickTargets[e].style.fontSize ? clickTargets[e].style.fontSize.split('p')[0] : 16
				fontSizeSelect.value = clickTargets[e].style.fontSize ? clickTargets[e].style.fontSize : 'custom'
			}
		}
	}, [clickTargets])

	//for setting TextColor
	useEffect(() => {
		if (textColor !== '') {
			setProperties('color', textColor)
		}
	}, [textColor])

	//For changing fontsize
	useEffect(() => {
		if (fontSize !== '') {
			setProperties('fontSize', fontSize)
		}
	}, [fontSize])

	//For changing click(adv) animation duration
	useEffect(() => {
		if (duration !== '') {
			setProperties('transitionDuration', duration)
		}
	}, [duration])

	const setProperties = (propertyName, property) => {
		const temp = Object.assign({}, clickTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style[propertyName] = property
			}
		}
		setClickTargets(temp)
	}

	//For reseting all click(adv) styles
	const resetAll = () => {
		const temp = Object.assign({}, clickTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style = {}
			}
		}
		setClickTargets(temp)
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
					<label>
						<span className='bi-stopwatch icon-n-s'></span> Duration:
					</label>
					<input
						type='number'
						className='numberinput'
						min='0'
						step='100'
						max='5000'
						id='clickadv-duration-input'
						onChange={e => {
							if (e.target.value < 0 || e.target.value > 5000) {
								setMsgBoxMsg('Duration can only be set from 0 to 5000')
								setShowMsgBox(true)
							} else if (e.target.value >= 0) setDuration(`${e.target.value}ms`)
						}}
					/>
				</div>
				<div className='three'>
					<label style={{ marginTop: '5px' }}>
						<span className='bi-paint-bucket icon-n-s'></span> Text:
					</label>
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
						onChange={e => {
							if (e.target.value < 0) {
								setMsgBoxMsg('Font Size can not be Negative')
								setShowMsgBox(true)
							} else if (e.target.value >= 0) setFontSize(`${e.target.value}px`)
						}}
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
