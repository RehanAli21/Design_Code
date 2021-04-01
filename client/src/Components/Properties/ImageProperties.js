import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const ImageProperties = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)

	const [img, setImg] = useState('')
	const [alt, setAlt] = useState('')
	const [separateLine, setSeparateLine] = useState(false)

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
		setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
		setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
		setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
		setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
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
			<p className='second-heading'>PROPERTIES</p>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '20px 130px auto',
					marginLeft: '25px',
					marginTop: '20px',
					textAlign: 'center',
				}}>
				<input onChange={e => setSeparateLine(e.target.checked)} style={{ marginTop: '5px' }} type='checkbox' />
				<label>On Separate Line</label>
			</div>
			<div className='two'>
				<label>Img: </label>
				<input type='file' onChange={e => changeImg(e)} />
			</div>
			<div className='two'>
				<label>Alt: </label>
				<input type='text' placeholder='text for img' onChange={e => setAlt(e.target.value)} />
			</div>
		</div>
	)
}

export default ImageProperties
