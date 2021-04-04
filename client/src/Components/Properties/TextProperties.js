import React, { useEffect, useState, useContext } from 'react'
import TextChange from './PropertiesComponenets/TextChange'
import Font from './PropertiesComponenets/Font'
import Text from './PropertiesComponenets/Text'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const TextProperties = () => {
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

	const [textType, setTextType] = useState('')
	const [sameLine, setSameLine] = useState(false)

	//For default value of text type
	useEffect(() => {
		const typeSelect = document.getElementById('text-type-select')

		const ele = document.getElementById(activeElement)

		if (ele) {
			if (ele.tagName === 'P') typeSelect.value = 'p'
			else if (ele.tagName === 'H1') typeSelect.value = 'h1'
			else if (ele.tagName === 'H3') typeSelect.value = 'h3'
			else if (ele.tagName === 'H5') typeSelect.value = 'h5'
		}
	})

	//For Same line(display) default value
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const sl = document.getElementById('text-sameline-checkbox')

			if (width < 540) {
				sl.checked = small && small.display === 'inline'
				setSameLine(small && small.display === 'inline')
			} else if (width < 720) {
				sl.checked = medium && medium.display === 'inline'
				setSameLine(medium && medium.display === 'inline')
			} else if (width < 970) {
				sl.checked = large && large.display === 'inline'
				setSameLine(large && large.display === 'inline')
			} else {
				sl.checked = xlarge && xlarge.display === 'inline'
				setSameLine(xlarge && xlarge.display === 'inline')
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	useEffect(() => {
		if (textType !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', textType)
			setPages(temp)
		}
	}, [textType])

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

	//For changing display for same line
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'display', sameLine ? 'inline' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline' : '')
			} else if (width < 720) {
				setProperties(medium, setMedium, 'display', sameLine ? 'inline' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline' : '')
			} else if (width < 970) {
				setProperties(large, setLarge, 'display', sameLine ? 'inline' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline' : '')
			}
		}
	}, [sameLine])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>TEXT PROPERTIES</p>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '20px 130px auto',
						marginLeft: '25px',
						marginTop: '20px',
						textAlign: 'center',
					}}>
					<input
						id='text-sameline-checkbox'
						style={{ marginTop: '5px', marginLeft: '5px' }}
						type='checkbox'
						onChange={e => setSameLine(e.target.checked)}
					/>
					<label>On Same Line</label>
				</div>
				<div className='two'>
					<label>Type: </label>
					<select id='text-type-select' onChange={e => setTextType(e.target.value)}>
						<option value='p'>Paragraph</option>
						<option value='h1'>Heading 1</option>
						<option value='h3'>Heading 2</option>
						<option value='h5'>Heading 3</option>
					</select>
				</div>
				<TextChange type='text' />
			</div>
			<Text />
			<Font type='text' />
		</React.Fragment>
	)
}

export default TextProperties
