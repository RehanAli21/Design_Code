import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const ListProperties = () => {
	const { small, medium, large, xlarge, setSmall, setMedium, setLarge, setXlarge } = useContext(PropertiesContext)
	const { activeElement, activePage, pages, setPages } = useContext(PageContext)

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
			<p className='second-heading'>List Properties</p>
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
		</div>
	)
}

export default ListProperties
