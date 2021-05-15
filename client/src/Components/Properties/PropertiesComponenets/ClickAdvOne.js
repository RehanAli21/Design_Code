import React, { useContext } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ClickAdvOne = ({
	setDuration,
	setTextColor,
	showCustomTextColor,
	setShowCustomTextColor,
	setFontSize,
	showCustomFontSize,
	setShowCustomFontSize,
}) => {
	const { colors, fontSizes } = useContext(TemplateContext)
	const { clickAEP, setClickAEP } = useContext(PropertiesContext)

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
				id='hover-colorselect'
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
				id='hover-fontsizeselect'
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
			<p className='second-heading' onClick={() => setClickAEP(!clickAEP)}>
				HOVER PROPERTIES <span style={{ display: clickAEP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: clickAEP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='btn-specific' style={{ display: clickAEP ? 'block' : 'none' }}>
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
