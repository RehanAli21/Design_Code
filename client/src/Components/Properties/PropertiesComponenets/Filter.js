import React, { useContext, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Filter = () => {
	const { small, medium, large, xlarge } = useContext(PropertiesContext)

	const [brightness, setBrightness] = useState('')
	const [contrast, setContrast] = useState('')
	const [blur, setBlur] = useState('')
	const [grayScale, setGrayScale] = useState('')
	const [hue, setHue] = useState('')
	const [saturation, setSaturation] = useState('')
	const [sepia, setSepia] = useState('')

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Filters</p>
			<div className='two'>
				<label>Brightness:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setBrightness(`${e.target.value}%`)} />
			</div>
			<div className='two'>
				<label>Contrast:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setContrast(`${e.target.value}%`)} />
			</div>
			<div className='two'>
				<label>Blur: </label>
				<input type='range' min='0' max='10' defaultValue='0' onChange={e => setBlur(`${e.target.value}px`)} />
			</div>
			<div className='two'>
				<label>GrayScale: </label>
				<input type='range' min='0' max='100' defaultValue='0' onChange={e => setGrayScale(`${e.target.value}%`)} />
			</div>
			<div className='two'>
				<label>Hue: </label>
				<input type='range' min='0' max='360' defaultValue='0' onChange={e => setHue(`${e.target.value}deg`)} />
			</div>
			<div className='two'>
				<label>Saturation:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setSaturation(`${e.target.value}%`)} />
			</div>
			<div className='two'>
				<label>Sepia: </label>
				<input type='range' min='0' max='100' defaultValue='0' onChange={e => setSepia(`${e.target.value}%`)} />
			</div>
		</div>
	)
}

export default Filter
