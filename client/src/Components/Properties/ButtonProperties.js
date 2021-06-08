import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import GridColumn from './PropertiesComponenets/GridColumn'
import TextChange from './PropertiesComponenets/TextChange'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'
import Tip from './PropertiesComponenets/Tip'
import Display from './PropertiesComponenets/Display'

const ButtonProperties = () => {
	const { showBtnProperties, setShowBtnProperties } = useContext(PropertiesContext)
	const { activeElement, pages, setPages, activePage, setShowMsgBox, setMsgBoxMsg } = useContext(PageContext)

	const [indexOfText, setIndexOfText] = useState(0)
	const [maxTextIndex, setMaxTextIndex] = useState(1)

	useEffect(() => {
		FindProperties(pages[activePage], activeElement)
	})

	//For finding IndexOfText and Children length
	const FindProperties = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				setMaxTextIndex(arr[i][2].length + 1)
				const ele = document.getElementById('button-textIndex-input')
				if (ele) {
					//for setting max in input by button children length
					ele.max = arr[i][2].length + 1
					//for setting value by button indexOfText
					ele.value = arr[i][1].indexOfText + 1
				}
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (FindProperties(arr[i][2], id)) return true
			}
		}
		return false
	}

	useEffect(() => {
		if (indexOfText !== 0) {
			const temp = Object.assign({}, pages)
			changeTextIndex(temp[activePage], activeElement)
			setPages(temp)
		}
	}, [indexOfText])

	//for changing text index
	const changeTextIndex = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				arr[i][1].indexOfText = indexOfText - 1
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (changeTextIndex(arr[1][2], id)) return true
			}
		}
		return false
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowBtnProperties(!showBtnProperties)}>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Text for text of button',
						'Cursor for changing mouse icon/poiniter',
						'Separete Line will send button on different row',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				BUTTON PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name style={showBtnProperties ? 'grid' : 'none'} />
			<TextChange type='button' display={showBtnProperties ? 'grid' : 'none'} />
			<div className='two'>
				<label>Text Index:</label>
				<input
					type='number'
					id='button-textIndex-input'
					className='numberinput'
					min='1'
					onChange={e => {
						if (e.target.value <= maxTextIndex && e.target.value >= 1) {
							setIndexOfText(e.target.value)
						} else if (e.target.value > maxTextIndex || e.target.value < 1) {
							setMsgBoxMsg(`Text Tndex Can Only Sets Between 1 To ${maxTextIndex}`)
							setShowMsgBox(true)
						}
					}}
				/>
			</div>
			<Display type={'separateLine'} />
			<Cursor style={showBtnProperties ? 'grid' : 'none'} />
			<GridColumn style={showBtnProperties ? 'grid' : 'none'} />
		</div>
	)
}

export default ButtonProperties
