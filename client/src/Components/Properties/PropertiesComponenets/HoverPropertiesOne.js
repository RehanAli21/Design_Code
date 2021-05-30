import React, { useContext, useState, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'
import Tip from './Tip'

const HoverPropertiesOne = () => {
	const {
		hover,
		setHover,
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		showHoverPropertiesOne,
		setShowHoverPropertiesOne,
	} = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)

	const [duration, setDuration] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//for setting default values
	useEffect(() => {
		if (small && medium && large && xlarge && hover) {
			const textColorInput = document.getElementById('hover-textcolor')
			const textColorSelect = document.getElementById('hover-colorselect')
			const fontSizeInput = document.getElementById('hover-fontsize')
			const fontSizeSelect = document.getElementById('hover-fontsizeselect')
			const durationInput = document.getElementById('hover-duration-input')

			durationInput.value = large.transitionDuration ? large.transitionDuration.split('m')[0] : 0
			textColorInput.value = hover.color ? hover.color : '#000000'
			textColorSelect.value = hover.color ? hover.color : 'custom'
			fontSizeInput.value = hover.fontSize ? hover.fontSize.split('p')[0] : 16
			fontSizeSelect.value = hover.fontSize ? hover.fontSize : 'custom'
		}
	}, [width, activeElement, small, medium, large, xlarge, hover])

	//for setting TextColor
	useEffect(() => {
		if (hover && textColor !== '') {
			setProperties(hover, setHover, 'color', textColor)
		}
	}, [textColor])

	//For changing fontsize
	useEffect(() => {
		if (hover && fontSize !== '') {
			setProperties(hover, setHover, 'fontSize', fontSize)
		}
	}, [fontSize])

	//For changing hover animation duration
	useEffect(() => {
		if (small && medium && large && xlarge && duration !== '') {
			setProperties(small, setSmall, 'transitionDuration', duration)
			setProperties(medium, setMedium, 'transitionDuration', duration)
			setProperties(large, setLarge, 'transitionDuration', duration)
			setProperties(xlarge, setXlarge, 'transitionDuration', duration)
		}
	}, [duration])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//For reseting all hover styles
	const resetAll = () => {
		if (hover) setHover({})
		if (small && medium && large && xlarge) {
			setProperties(small, setSmall, 'transitionDuration', '')
			setProperties(medium, setMedium, 'transitionDuration', '')
			setProperties(large, setLarge, 'transitionDuration', '')
			setProperties(xlarge, setXlarge, 'transitionDuration', '')
		}
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
			<p className='second-heading' onClick={() => setShowHoverPropertiesOne(!showHoverPropertiesOne)}>
				<Tip msg={['These properties will applied, when mouse is on the element']} />
				HOVER PROPERTIES <span style={{ display: showHoverPropertiesOne ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showHoverPropertiesOne ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='btn-specific' style={{ display: showHoverPropertiesOne ? 'block' : 'none' }}>
				<button
					onClick={resetAll}
					style={{
						display: showHoverPropertiesOne ? 'block' : 'none',
						position: 'absolute',
						top: '0px',
						right: '10px',
						padding: '5px 10px',
					}}>
					Reset All
				</button>
				<div className='two'>
					<label>Duration: </label>
					<input
						type='number'
						className='numberinput'
						min='0'
						step='100'
						max='5000'
						id='hover-duration-input'
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
						id='hover-textcolor'
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
						id='hover-fontsize'
					/>
				</div>
			</div>
		</div>
	)
}

export default HoverPropertiesOne
