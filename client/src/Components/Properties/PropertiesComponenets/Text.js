import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const Text = () => {
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors } = useContext(TemplateContext)

	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [lineHeight, setLineHeight] = useState('')
	const [letterSpace, setLetterSpace] = useState('')
	const [wordSpace, setWordSpace] = useState('')
	const [textTransform, setTextTransform] = useState('')

	//For default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const textColorInput = document.getElementById('btn-textcolor')
			const textColorSelect = document.getElementById('btn-colorselect')
			const letterInput = document.getElementById('text-letterinput')
			const wordInput = document.getElementById('text-wordinput')
			const lineHeightInput = document.getElementById('text-lineheightinput')

			textColorInput.value = large.color ? large.color : '#000000'
			textColorSelect.value = large.color ? large.color : 'custom'
			letterInput.value = large.letterSpacing ? large.letterSpacing.split('p')[0] : 0
			wordInput.value = large.wordSpacing ? large.wordSpacing.split('p')[0] : 0
			lineHeightInput.value = large.lineHeight ? large.lineHeight.split('p')[0] : 18
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
			setProperties(small, setSmall, 'lineHeight', lineHeight)
			setProperties(medium, setMedium, 'lineHeight', lineHeight)
			setProperties(large, setLarge, 'lineHeight', lineHeight)
			setProperties(xlarge, setXlarge, 'lineHeight', lineHeight)
		}
	}, [lineHeight])

	//For changing Letter space
	useEffect(() => {
		if (small && medium && large && xlarge && letterSpace !== '') {
			setProperties(small, setSmall, 'letterSpacing', letterSpace)
			setProperties(medium, setMedium, 'letterSpacing', letterSpace)
			setProperties(large, setLarge, 'letterSpacing', letterSpace)
			setProperties(xlarge, setXlarge, 'letterSpacing', letterSpace)
		}
	}, [letterSpace])

	//For word spacing
	useEffect(() => {
		if (small && medium && large && xlarge && wordSpace !== '') {
			setProperties(small, setSmall, 'wordSpacing', wordSpace)
			setProperties(medium, setMedium, 'wordSpacing', wordSpace)
			setProperties(large, setLarge, 'wordSpacing', wordSpace)
			setProperties(xlarge, setXlarge, 'wordSpacing', wordSpace)
		}
	}, [wordSpace])

	//For Text Transform
	useEffect(() => {
		if (small && medium && large && xlarge && textTransform !== '') {
			setProperties(small, setSmall, 'textTransform', textTransform)
			setProperties(medium, setMedium, 'textTransform', textTransform)
			setProperties(large, setLarge, 'textTransform', textTransform)
			setProperties(xlarge, setXlarge, 'textTransform', textTransform)
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
		<div className='borders btn-specific font-specific'>
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
					<input
						id='text-letterinput'
						onChange={e => setLetterSpace(`${e.target.value}px`)}
						type='number'
						min='0'
						defaultValue='0'
					/>
				</div>
				<div className='t-two'>
					<label>W</label>
					<input
						id='text-wordinput'
						onChange={e => setWordSpace(`${e.target.value}px`)}
						type='number'
						min='0'
						defaultValue='0'
					/>
				</div>
				<div className='t-two'>
					<label>H</label>
					<input id='text-lineheightinput' onChange={e => setLineHeight(`${e.target.value}px`)} type='number' min='0' />
				</div>
			</div>
			<div style={{ width: '80%', marginLeft: '34px' }} className='t-three'>
				<button
					onClick={() => setTextTransform('lowercase')}
					className={textTransform === 'lowercase' ? 'btn-active' : ''}>
					tt
				</button>
				<button
					onClick={() => setTextTransform('capitalize')}
					className={textTransform === 'capitalize' ? 'btn-active' : ''}>
					Tt
				</button>
				<button
					onClick={() => setTextTransform('uppercase')}
					className={textTransform === 'uppercase' ? 'btn-active' : ''}>
					TT
				</button>
			</div>
		</div>
	)
}

export default Text
