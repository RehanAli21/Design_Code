import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'

const ImageProperties = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [img, setImg] = useState('')
	const [alt, setAlt] = useState('')

	useEffect(() => {
		if (img !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'src', img)
			setPages(temp)
		}
	}, [img])

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
			<p className='second-heading'>PROPERTIES</p>
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
