import React, { useEffect, useState, useContext } from 'react'
import TextChange from './PropertiesComponenets/TextChange'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'
import Cursor from './PropertiesComponenets/Cursor'
import Display from './PropertiesComponenets/Display'

const TextProperties = () => {
	const { showTextCompProperties, setShowTextCompProperties } = useContext(PropertiesContext)
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [textType, setTextType] = useState('')
	const [isAnchor, setIsAnchor] = useState(false)
	const [target, setTarget] = useState('')

	//For default value of text type
	useEffect(() => {
		const typeSelect = document.getElementById('text-type-select')

		const ele = document.getElementById(activeElement)

		if (ele) {
			if (ele.tagName === 'P') typeSelect.value = 'p'
			else if (ele.tagName === 'H1') typeSelect.value = 'h1'
			else if (ele.tagName === 'H2') typeSelect.value = 'h2'
			else if (ele.tagName === 'H3') typeSelect.value = 'h3'
			else if (ele.tagName === 'H4') typeSelect.value = 'h4'
			else if (ele.tagName === 'H5') typeSelect.value = 'h5'
			else if (ele.tagName === 'A') typeSelect.value = 'a'
		}
	})

	useEffect(() => {
		if (textType !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'type', textType)
			setPages(temp)
			setIsAnchor(textType === 'a')
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
			<p className='second-heading' onClick={() => setShowTextCompProperties(!showTextCompProperties)}>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Type sets different type of text',
						'Cursor for changing mouse icon/poiniter',
						'Text for write text',
						'Same Line: if you want text on same row as other element then activate it.',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				TEXT PROPERTIES <span style={{ display: showTextCompProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showTextCompProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name style={showTextCompProperties ? 'grid' : 'none'} />
			<div style={{ display: showTextCompProperties ? 'grid' : 'none' }} className='two'>
				<label>Type: </label>
				<select id='text-type-select' onChange={e => setTextType(e.target.value)}>
					<option value='p'>Paragraph</option>
					<option value='h1'>Heading 1</option>
					<option value='h2'>Heading 2</option>
					<option value='h3'>Heading 3</option>
					<option value='h4'>Heading 4</option>
					<option value='h5'>Heading 5</option>
					<option value='a'>Anchor</option>
				</select>
			</div>
			<Display type={'sameLine'} />
			<Cursor style={showTextCompProperties ? 'grid' : 'none'} />
			<TextChange type='text' display={showTextCompProperties ? 'grid' : 'none'} />
			<div style={{ display: showTextCompProperties && isAnchor ? 'grid' : 'none' }} className='three'>
				<label>Target</label>
				<input
					type='text'
					id='text-target-input'
					placeholder='Element Name...'
					onChange={e => setTarget(e.target.value)}
				/>
				<button style={{ padding: '1px 0px', border: 'none', fontWeight: 'bold' }}>Apply</button>
			</div>
			<GridColumn style={showTextCompProperties ? 'grid' : 'none'} />
		</div>
	)
}

export default TextProperties
