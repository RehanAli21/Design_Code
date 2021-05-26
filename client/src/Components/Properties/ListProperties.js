import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Cursor from './PropertiesComponenets/Cursor'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'

const ListProperties = () => {
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
	const { width, activePage, activeElement, pages, setPages, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	const [listType, setListType] = useState('')
	const [listStyle, setListStyle] = useState('')
	const [sameLine, setSameLine] = useState(false)

	//For changing type of list
	useEffect(() => {
		if (listType !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', listType)
			setPages(temp)
		}
	}, [listType])

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

	//For Same line(display) default value
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const sl = document.getElementById('text-sameline-checkbox')

			if (width < sBreakPoint) {
				sl.checked = small && small.display === 'inline-block'
				setSameLine(small && small.display === 'inline-block')
			} else if (width < mBreakPoint) {
				sl.checked = medium && medium.display === 'inline-block'
				setSameLine(medium && medium.display === 'inline-block')
			} else if (width < lBreakPoint) {
				sl.checked = large && large.display === 'inline-block'
				setSameLine(large && large.display === 'inline-block')
			} else {
				sl.checked = xlarge && xlarge.display === 'inline-block'
				setSameLine(xlarge && xlarge.display === 'inline-block')
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	useEffect(() => {
		if (listStyle !== '') {
			const isNumberList =
				listStyle === 'upper-alpha' ||
				listStyle === 'lower-aplha' ||
				listStyle === 'upper-roman' ||
				listStyle === 'lower-aplha'

			if (isNumberList && listType !== 'ol') setListType('ol')
			else if (!isNumberList && listType !== 'ul') setListType('ul')

			setProperties(small, setSmall, 'listStyleType', listStyle)
			setProperties(medium, setMedium, 'listStyleType', listStyle)
			setProperties(large, setLarge, 'listStyleType', listStyle)
			setProperties(xlarge, setXlarge, 'listStyleType', listStyle)
		}
	}, [listStyle])

	//For changing display for same line
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', sameLine ? 'inline-block' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline-block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline-block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline-block' : '')
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', sameLine ? 'inline-block' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline-block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline-block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline-block' : '')
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'display', sameLine ? 'inline-block' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline-block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline-block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline-block' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', sameLine ? 'inline-block' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', sameLine ? 'inline-block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', sameLine ? 'inline-block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', sameLine ? 'inline-block' : '')
			}
		}
	}, [sameLine])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>List Properties</p>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '20px 130px auto',
					marginLeft: '15px',
					marginTop: '20px',
					textAlign: 'center',
				}}>
				<input
					id='text-sameline-checkbox'
					style={{ marginTop: '5px', marginLeft: '12px' }}
					type='checkbox'
					onChange={e => setSameLine(e.target.checked)}
				/>
				<label>On Same Line</label>
			</div>
			<Name />
			<div className='two'>
				<label>Bullets: </label>
				<select id='list-style-select' onChange={e => setListStyle(e.target.value)}>
					<option value='upper-alpha'>A</option>
					<option value='upper-roman'>I</option>
					<option value='lower-alpha'>a</option>
					<option value='lower-roman'>i</option>
					<option value='circle'>Circle</option>
					<option value='square'>Square</option>
					<option value='disc'>Disc</option>
					<option value='none'>None</option>
				</select>
			</div>
			<Cursor />
			<GridColumn />
		</div>
	)
}

export default ListProperties
