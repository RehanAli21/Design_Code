import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Cursor from './PropertiesComponenets/Cursor'
import Display from './PropertiesComponenets/Display'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

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

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip
					msg={[
						'Same Line: if you want list on same row as other element then activate it.',
						'Name is an unique identity for this element',
						'Bullets for changing list bullet type',
						'Cursor for changing mouse icon/poiniter',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				List Properties
			</p>
			<Name />
			<div className='two'>
				<label>Bullets: </label>
				<select id='list-style-select' onChange={e => setListStyle(e.target.value)}>
					<option value='circle'>Circle</option>
					<option value='upper-alpha'>A</option>
					<option value='upper-roman'>I</option>
					<option value='lower-alpha'>a</option>
					<option value='lower-roman'>i</option>
					<option value='square'>Square</option>
					<option value='disc'>Disc</option>
					<option value='none'>None</option>
				</select>
			</div>
			<Display type={'sameLine'} />
			<Cursor />
			<GridColumn />
		</div>
	)
}

export default ListProperties
