import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Cursor from './PropertiesComponenets/Cursor'
import Display from './PropertiesComponenets/Display'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const ImageProperties = () => {
	const { showImgProperties, setShowImgProperties } = useContext(PropertiesContext)
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [img, setImg] = useState('')
	const [alt, setAlt] = useState('')

	//For default values of img's display(separated line) and alt
	useEffect(() => {
		const altinput = document.getElementById('img-altinput')
		const values = findAndReturnAlt(pages[activePage])

		if (values && altinput) altinput.value = values
	}, [activeElement])

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
			<Name style={showImgProperties ? 'grid' : 'none'} />
			<div className='two' style={{ display: showImgProperties ? 'grid' : 'none' }}>
				<label>Img: </label>
				<input id='img-fileinput' type='file' onChange={e => changeImg(e)} />
			</div>
			<div className='two' style={{ display: showImgProperties ? 'grid' : 'none' }}>
				<label>Alt: </label>
				<input id='img-altinput' type='text' placeholder='text for img' onChange={e => setAlt(e.target.value)} />
			</div>
			<Display type={'separateLine'} />
			<Cursor style={showImgProperties ? 'grid' : 'none'} />
			<GridColumn style={showImgProperties ? 'grid' : 'none'} />
		</div>
	)
}

export default ImageProperties
