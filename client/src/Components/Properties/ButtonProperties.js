import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import GridColumn from './PropertiesComponenets/GridColumn'
import TextChange from './PropertiesComponenets/TextChange'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'
import Tip from './PropertiesComponenets/Tip'

const ButtonProperties = () => {
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
		showBtnProperties,
		setShowBtnProperties,
	} = useContext(PropertiesContext)
	const {
		width,
		activeElement,
		pages,
		setPages,
		activePage,
		sBreakPoint,
		mBreakPoint,
		lBreakPoint,
		setShowMsgBox,
		setMsgBoxMsg,
	} = useContext(PageContext)
	const [separateLine, setSeparateLine] = useState(false)
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

	//For default values of display(separated line)
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const sl = document.getElementById('button-sl-checkbox')

			if (width < sBreakPoint) {
				sl.checked = small && small.display === 'block'
				setSeparateLine(small && small.display === 'block')
			} else if (width < mBreakPoint) {
				sl.checked = medium && medium.display === 'block'
				setSeparateLine(medium && medium.display === 'block')
			} else if (width < lBreakPoint) {
				sl.checked = large && large.display === 'block'
				setSeparateLine(large && large.display === 'block')
			} else {
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

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
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
			<Cursor style={showBtnProperties ? 'grid' : 'none'} />
			<GridColumn style={showBtnProperties ? 'grid' : 'none'} />
			<div
				style={{
					display: showBtnProperties ? 'grid' : 'none',
					gridTemplateColumns: '20px 130px auto',
					marginLeft: '25px',
					marginTop: '20px',
					textAlign: 'center',
				}}>
				<input
					id='button-sl-checkbox'
					onChange={e => setSeparateLine(e.target.checked)}
					style={{ marginTop: '5px' }}
					type='checkbox'
				/>
				<label>On Separate Line</label>
			</div>
		</div>
	)
}

export default ButtonProperties
