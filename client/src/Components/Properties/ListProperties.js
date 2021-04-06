import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'

const ListProperties = () => {
	const { activeElement, activePage, pages, setPages } = useContext(PageContext)

	const [listType, setListType] = useState('')

	//For default value of list type
	useEffect(() => {
		const typeSelect = document.getElementById('list-type-select')

		const ele = document.getElementById(activeElement)

		if (ele) {
			if (ele.tagName === 'UL') typeSelect.value = 'ul'
			else if (ele.tagName === 'OL') typeSelect.value = 'ol'
		}
	})

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

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>List Properties</p>
			<div className='two'>
				<label>Type: </label>
				<select id='list-type-select' onChange={e => setListType(e.target.value)}>
					<option value='ul'>Unorder List</option>
					<option value='ol'>Ordered List</option>
				</select>
			</div>
		</div>
	)
}

export default ListProperties
