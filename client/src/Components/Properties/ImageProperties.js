import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const ImageProperties = () => {
	const { width, activePage, activeElement, pages, setPages } = useContext(PageContext)
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)

	const [img, setImg] = useState('')
	const [alt, setAlt] = useState('')
	const [separateLine, setSeparateLine] = useState(false)

	//For default values of img's display(separated line) and alt
	useEffect(() => {
		const altinput = document.getElementById('img-altinput')
		const values = findAndReturnAlt(pages[activePage])
		const sl = document.getElementById('img-sl-checkbox')

		if (values && altinput) altinput.value = values

		sl.checked = large && large.display === 'block'
		setSeparateLine(large && large.display === 'block')
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
			<p className='second-heading'>IMAGE PROPERTIES</p>
			<div
				style={{
					display: 'grid',
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
			<div className='two'>
				<label>Img: </label>
				<input id='img-fileinput' type='file' onChange={e => changeImg(e)} />
			</div>
			<div className='two'>
				<label>Alt: </label>
				<input id='img-altinput' type='text' placeholder='text for img' onChange={e => setAlt(e.target.value)} />
			</div>
		</div>
	)
}

export default ImageProperties
