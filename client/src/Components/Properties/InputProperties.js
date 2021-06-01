import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { TemplateContext } from '../Contexts/TemplateContext'
import Animate from './PropertiesComponenets/Animate'
import BackFilter from './PropertiesComponenets/BackFilter'
import Cursor from './PropertiesComponenets/Cursor'
import Font from './PropertiesComponenets/Font'
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
	const [separateLine, setSeparateLine] = useState(false)

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

	//For textcolor and separate line(display) default value
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const textColorInput = document.getElementById('input-textcolor')
			const textColorSelect = document.getElementById('input-colorselect')
			const sl = document.getElementById('input-sl-checkbox')

			if (width < sBreakPoint) {
				textColorInput.value = small.color ? small.color : '#000000'
				textColorSelect.value = small.color ? small.color : 'custom'
				sl.checked = small && small.display === 'block'
				setSeparateLine(small && small.display === 'block')
			} else if (width < mBreakPoint) {
				textColorInput.value = medium.color ? medium.color : '#000000'
				textColorSelect.value = medium.color ? medium.color : 'custom'
				sl.checked = medium && medium.display === 'block'
				setSeparateLine(medium && medium.display === 'block')
			} else if (width < lBreakPoint) {
				textColorInput.value = large.color ? large.color : '#000000'
				textColorSelect.value = large.color ? large.color : 'custom'
				sl.checked = large && large.display === 'block'
				setSeparateLine(large && large.display === 'block')
			} else {
				textColorInput.value = xlarge.color ? xlarge.color : '#000000'
				textColorSelect.value = xlarge.color ? xlarge.color : 'custom'
				sl.checked = xlarge && xlarge.display === 'block'
				setSeparateLine(xlarge && xlarge.display === 'block')
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	//For changing display for separate line
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
			}
		}
	}, [separateLine])

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
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'color', textColor)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'color', textColor)
				if (!changedLarge) setProperties(large, setLarge, 'color', textColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'color', textColor)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'color', textColor)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'color', textColor)
				if (!changedLarge) setProperties(large, setLarge, 'color', textColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'color', textColor)
			} else if (width < lBreakPoint) {
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
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading' onClick={() => setShowInputProperties(!showInputProperties)}>
					<Tip
						msg={[
							'Separete Line will send input on different row',
							<hr className='tipHr' />,
							'Type sets different type of input',
							<hr className='tipHr' />,
							'Placeholder is a text user can see and when user type on it the text will be gone',
							<hr className='tipHr' />,
							'Max Char sets maximum characters allowed to type',
							<hr className='tipHr' />,
							'Text Color for changing color of text',
							<hr className='tipHr' />,
							'Cursor for changing mouse icon/poiniter',
							<hr className='tipHr' />,
							'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
						]}
					/>
					INPUT PROPERTIES <span style={{ display: showInputProperties ? 'inline' : 'none' }}>&#9660;</span>
					<span style={{ display: showInputProperties ? 'none' : 'inline' }}>&#9654;</span>
				</p>
				<div
					style={{
						display: showInputProperties ? 'grid' : 'none',
						gridTemplateColumns: '20px 130px auto',
						marginLeft: '25px',
						marginTop: '20px',
						textAlign: 'center',
					}}>
					<input
						id='input-sl-checkbox'
						onChange={e => setSeparateLine(e.target.checked)}
						style={{ marginTop: '5px' }}
						type='checkbox'
					/>
					<label>On Separate Line</label>
				</div>
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
					<input
						id='i-s-placeholderinput'
						onChange={e => setPlaceholder(e.target.value)}
						type='text'
						placeholder='Text'
					/>
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
				<Cursor style={showInputProperties ? 'grid' : 'none'} />
				<GridColumn style={showInputProperties ? 'grid' : 'none'} />
			</div>
			<Font />
			<BackFilter />
			<Animate />
		</React.Fragment>
	)
}

export default InputProperties
