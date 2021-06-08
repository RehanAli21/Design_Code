import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Cursor from './PropertiesComponenets/Cursor'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const ImageProperties = () => {
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
		showImgProperties,
		setShowImgProperties,
	} = useContext(PropertiesContext)
	const { width, activePage, activeElement, pages, setPages, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	const [img, setImg] = useState('')
	const [alt, setAlt] = useState('')
	const [separateLine, setSeparateLine] = useState(false)

	//For default values of img's display(separated line) and alt
	useEffect(() => {
		const altinput = document.getElementById('img-altinput')
		const values = findAndReturnAlt(pages[activePage])
		const sl = document.getElementById('img-sl-checkbox')

		if (values && altinput) altinput.value = values

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
	}, [width, activeElement, small, large, medium, xlarge])

	//for find element and return img's alt
	const findAndReturnAlt = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return arr[i][1].alt
			} else if (arr[i][2]) {
				findAndReturnAlt(arr[i][2])
			}
		}
	}

	//For setting src of img
	useEffect(() => {
		if (img !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'src', img)
			setPages(temp)
		}
	}, [img])

	//For setting alt of img
	useEffect(() => {
		if (alt !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'alt', alt)
			setPages(temp)
		}
	}, [alt])

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

	//For setting img
	const changeImg = e => setImg(URL.createObjectURL(e.target.files[0]))

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowImgProperties(!showImgProperties)}>
				<Tip
					msg={[
						'Separete Line will send button on different row',
						'Name is an unique identity for this element',
						'Img for choosing image from your computer',
						'Cursor for changing mouse icon/poiniter',
						'Alt text will be shown to user if img is not available',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				IMAGE PROPERTIES <span style={{ display: showImgProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showImgProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div
				style={{
					display: showImgProperties ? 'grid' : 'none',
					gridTemplateColumns: '20px 130px auto',
					marginLeft: '25px',
					marginTop: '20px',
					textAlign: 'center',
				}}>
				<input
					id='img-sl-checkbox'
					onChange={e => setSeparateLine(e.target.checked)}
					style={{ marginTop: '5px' }}
					type='checkbox'
				/>
				<label>On Separate Line</label>
			</div>
			<Name style={showImgProperties ? 'grid' : 'none'} />
			<div className='two' style={{ display: showImgProperties ? 'grid' : 'none' }}>
				<label>Img: </label>
				<input id='img-fileinput' type='file' onChange={e => changeImg(e)} />
			</div>
			<div className='two' style={{ display: showImgProperties ? 'grid' : 'none' }}>
				<label>Alt: </label>
				<input id='img-altinput' type='text' placeholder='text for img' onChange={e => setAlt(e.target.value)} />
			</div>
			<Cursor style={showImgProperties ? 'grid' : 'none'} />
			<GridColumn style={showImgProperties ? 'grid' : 'none'} />
		</div>
	)
}

export default ImageProperties
