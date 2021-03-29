import React, { useEffect, useState, useContext } from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import TextColor from './PropertiesComponenets/TextColor'
import { PageContext } from '../Contexts/PageContext'

const TextProperties = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [textType, setTextType] = useState('')

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

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Text Properties</p>
			<div className='two'>
				<label>Type: </label>
				<select onChange={e => setTextType(e.target.value)}>
					<option value='p'>Paragraph</option>
					<option value='h1'>Heading 1</option>
					<option value='h3'>Heading 2</option>
					<option value='h5'>Heading 3</option>
				</select>
			</div>
			<Text type='text' />
			<TextColor />
			<Font type='text' />
		</div>
	)
}

export default TextProperties
