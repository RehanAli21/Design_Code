import React, { useState, useContext, useEffect } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'

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
	} = useContext(PropertiesContext)
	const { width, activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [type, setType] = useState('')
	const [placeholder, setPlaceholder] = useState('')
	const [padding, setPadding] = useState('')
	const [maxLength, setMaxLength] = useState(0)

	//For setting default values of type select and placeholder
	useEffect(() => {
		const typeSelect = document.getElementById('i-s-typeSelect')
		const placeholderInput = document.getElementById('i-s-placeholderinput')
		const values = findAndReturnAttribues(pages[activePage])

		if (values && typeSelect && placeholderInput) {
			typeSelect.value = values[0]
			placeholderInput.value = values[1]
		}
	})
	//for find element and return attributes values
	const findAndReturnAttribues = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return [arr[i][1].type, arr[i][1].placeholder]
			} else if (arr[i][2]) {
				findAndReturnAttribues(arr[i][2])
			}
		}
	}

	//For type change of input
	useEffect(() => {
		if (type !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', type)
			setPages(temp)
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

	//For Changing padding of input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setChangedPadding(small, setSmall, padding)
				setChangedSmall(true)
				if (!changedMedium) setChangedPadding(medium, setMedium, padding)
				if (!changedLarge) setChangedPadding(large, setLarge, padding)
				if (!changedXlarge) setChangedPadding(xlarge, setXlarge, padding)
			} else if (width < 720) {
				setChangedPadding(medium, setMedium, padding)
				setChangedMedium(true)
				if (!changedSmall) setChangedPadding(small, setSmall, padding)
				if (!changedLarge) setChangedPadding(large, setLarge, padding)
				if (!changedXlarge) setChangedPadding(xlarge, setXlarge, padding)
			} else if (width < 970) {
				setChangedPadding(large, setLarge, padding)
				setChangedLarge(true)
				if (!changedSmall) setChangedPadding(small, setSmall, padding)
				if (!changedMedium) setChangedPadding(medium, setMedium, padding)
				if (!changedXlarge) setChangedPadding(xlarge, setXlarge, padding)
			} else {
				setChangedPadding(xlarge, setXlarge, padding)
				setChangedXlarge(true)
				if (!changedSmall) setChangedPadding(small, setSmall, padding)
				if (!changedMedium) setChangedPadding(medium, setMedium, padding)
				if (!changedLarge) setChangedPadding(large, setLarge, padding)
			}
		}
	}, [padding])
	//Helper function for changing padding
	const setChangedPadding = (obj, setObj, padding) => {
		const temp = Object.assign({}, obj)
		temp.padding = padding
		setObj(temp)
	}

	return (
		<div className='borders input-specific'>
			<p className='second-heading'>Input Properties</p>
			<div>
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
			<div>
				<label>Placeholder: </label>
				<input id='i-s-placeholderinput' onChange={e => setPlaceholder(e.target.value)} type='text' placeholder='Text' />
			</div>
			<div>
				<label>Inner space: </label>
				<input onChange={e => setPadding(`${e.target.value}px`)} type='number' defaultValue='0' min='0' />
			</div>
			<div>
				<label>Max characters</label>
				<input onChange={e => setMaxLength(e.target.value)} type='number' min='0' />
			</div>
		</div>
	)
}

export default InputProperties
