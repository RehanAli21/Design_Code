import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { TemplateContext } from '../Contexts/TemplateContext'
import Cursor from './PropertiesComponenets/Cursor'
import Display from './PropertiesComponenets/Display'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

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
		showInputProperties,
		setShowInputProperties,
	} = useContext(PropertiesContext)
	const {
		width,
		activePage,
		activeElement,
		pages,
		setPages,
		sBreakPoint,
		mBreakPoint,
		lBreakPoint,
		setShowMsgBox,
		setMsgBoxMsg,
	} = useContext(PageContext)
	const { colors } = useContext(TemplateContext)

	const [type, setType] = useState('')
	const [placeholder, setPlaceholder] = useState('')
	const [maxLength, setMaxLength] = useState(0)
	const [min, setMin] = useState('')
	const [max, setMax] = useState('')
	const [showMinMax, setShowMinMax] = useState(false)
	const [textColor, setTextColor] = useState('')

	const [showCustomTextColor, setShowCustomTextColor] = useState(true)

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

	//For textcolor default value
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const textColorInput = document.getElementById('input-textcolor')
			const textColorSelect = document.getElementById('input-colorselect')

			textColorInput.value = large.color ? large.color : '#000000'
			textColorSelect.value = large.color ? large.color : 'custom'
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
			setProperties(small, setSmall, 'color', textColor)
			setProperties(medium, setMedium, 'color', textColor)
			setProperties(large, setLarge, 'color', textColor)
			setProperties(xlarge, setXlarge, 'color', textColor)
		}
	}, [textColor])

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
				id='input-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowInputProperties(!showInputProperties)}>
				<Tip
					msg={[
						'Separete Line will send input on different row',
						'Type sets different type of input',
						'Placeholder is a text user can see and when user type on it the text will be gone',
						'Max Char sets maximum characters allowed to type',
						'Text Color for changing color of text',
						'Cursor for changing mouse icon/poiniter',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				INPUT PROPERTIES <span style={{ display: showInputProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showInputProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name style={showInputProperties ? 'grid' : 'none'} />
			<div style={{ display: showInputProperties ? 'grid' : 'none' }} className='two'>
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
			<div
				className='two'
				onChange={e => setMin(e.target.value)}
				style={{ display: showMinMax && showInputProperties ? 'grid' : 'none' }}>
				<label>Min Value: </label>
				<input className='numberinput' id='i-s-minValueInput' type='number' />
			</div>
			<div
				className='two'
				onChange={e => setMax(e.target.value)}
				style={{ display: showMinMax && showInputProperties ? 'grid' : 'none' }}>
				<label>Max Value: </label>
				<input className='numberinput' id='i-s-maxValueInput' type='number' />
			</div>
			<div style={{ display: showInputProperties ? 'grid' : 'none' }} className='two'>
				<label>Placeholder: </label>
				<input id='i-s-placeholderinput' onChange={e => setPlaceholder(e.target.value)} type='text' placeholder='Text' />
			</div>
			<div style={{ display: showInputProperties ? 'grid' : 'none' }} className='two'>
				<label>Max chars: </label>
				<input
					className='numberinput'
					id='i-s-maxLengthInput'
					onChange={e => {
						if (e.target.value < -1) {
							setMsgBoxMsg('Max Character Length can not be negative')
							setShowMsgBox(true)
						} else if (e.target.value >= -1) setMaxLength(e.target.value)
					}}
					type='number'
					min='-1'
					placeholder='Maximum characters'
				/>
			</div>
			<div className='three' style={{ display: showInputProperties ? 'grid' : 'none' }}>
				<label style={{ marginTop: '5px' }}>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='input-textcolor'
				/>
			</div>
			<Display type={'separateLine'} />
			<Cursor style={showInputProperties ? 'grid' : 'none'} />
			<GridColumn style={showInputProperties ? 'grid' : 'none'} />
		</div>
	)
}

export default InputProperties
