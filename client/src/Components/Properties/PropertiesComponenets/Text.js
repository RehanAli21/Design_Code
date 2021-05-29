import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'
import Tip from './Tip'

const Text = () => {
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge, showTextProperties, setShowTextProperties } =
		useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors } = useContext(TemplateContext)

	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [lineHeight, setLineHeight] = useState('')
	const [letterSpace, setLetterSpace] = useState('')
	const [wordSpace, setWordSpace] = useState('')
	const [textTransform, setTextTransform] = useState('')
	const [textShadow, setTextShadow] = useState(false)
	const [textX, setTextX] = useState('')
	const [textY, setTextY] = useState('')
	const [textBlur, setTextBlur] = useState('')
	const [textSColor, setTextSColor] = useState('')

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

	//For Text Shadow
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const tS = `${textX} ${textY} ${textBlur} ${textSColor}`

			setProperties(small, setSmall, 'textShadow', textShadow ? tS : '')
			setProperties(medium, setMedium, 'textShadow', textShadow ? tS : '')
			setProperties(large, setLarge, 'textShadow', textShadow ? tS : '')
			setProperties(xlarge, setXlarge, 'textShadow', textShadow ? tS : '')
		}
	}, [textX, textY, textBlur, textSColor, textShadow])

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
			<p className='second-heading' onClick={() => setShowTextProperties(!showTextProperties)}>
				<Tip
					msg={[
						'text color for applying color on text',
						<hr className='tipHr' />,
						'L for letter spacing',
						<hr className='tipHr' />,
						'W for word spacing',
						<hr className='tipHr' />,
						'H for line height',
						<hr className='tipHr' />,
						'Text Shadow for applying shadow on text',
					]}
				/>
				TEXT <span style={{ display: showTextProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showTextProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showTextProperties ? 'grid' : 'none' }} className='three'>
				<label style={{ marginTop: '5px' }}>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='btn-textcolor'
				/>
			</div>
			<div style={{ display: showTextProperties ? 'grid' : 'none' }} className='t-three'>
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
			<div style={{ width: '80%', marginLeft: '34px', display: showTextProperties ? 'grid' : 'none' }} className='t-three'>
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
			<div
				style={{ marginTop: '20px', marginBottom: '20px', display: showTextProperties ? 'grid' : 'none' }}
				className='shadow'>
				<div>
					<input
						style={{ marginRight: '15px' }}
						id='t-ts-active'
						type='checkbox'
						onChange={e => setTextShadow(e.target.checked)}
					/>
					<span>Text Shadow</span>
				</div>
				<div style={{ display: textShadow ? 'grid' : 'none' }} className='four'>
					<input onChange={e => setTextX(`${e.target.value}px`)} id='t-ts-x' type='number' placeholder='X' />
					<input onChange={e => setTextY(`${e.target.value}px`)} id='t-ts-y' type='number' placeholder='Y' />
					<input
						onChange={e => setTextBlur(`${e.target.value}px`)}
						id='t-ts-blur'
						type='number'
						min='0'
						placeholder='B'
					/>
					<input onChange={e => setTextSColor(e.target.value)} id='t-ts-color' type='color' defaultValue='#464646' />
				</div>
			</div>
		</div>
	)
}

export default Text
