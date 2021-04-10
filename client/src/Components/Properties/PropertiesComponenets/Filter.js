import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Filter = () => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		showFilterProperties,
		setShowFilterProperties,
	} = useContext(PropertiesContext)

	const [brightness, setBrightness] = useState('')
	const [contrast, setContrast] = useState('')
	const [blur, setBlur] = useState('')
	const [grayScale, setGrayScale] = useState('')
	const [hue, setHue] = useState('')
	const [saturation, setSaturation] = useState('')
	const [sepia, setSepia] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			let filter = ''
			if (brightness !== '' && brightness !== '100%') filter += `brightness(${brightness})`
			if (contrast !== '' && contrast !== '100%') filter += ` contrast(${contrast})`
			if (blur !== '' && blur !== '0px') filter += ` blur(${blur})`
			if (grayScale !== '' && grayScale !== '0%') filter += ` grayscale(${grayScale})`
			if (hue !== '' && hue !== '0deg') filter += ` hue-rotate(${hue})`
			if (saturation !== '' && saturation !== '100%') filter += ` saturate(${saturation})`
			if (sepia !== '' && sepia !== '0%') filter += ` sepia(${sepia})`

			setProperties(small, setSmall, 'filter', filter)
			setProperties(medium, setMedium, 'filter', filter)
			setProperties(large, setLarge, 'filter', filter)
			setProperties(xlarge, setXlarge, 'filter', filter)
		}
	}, [brightness, contrast, blur, grayScale, hue, saturation, sepia])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific' style={{ position: 'relative' }}>
			<p className='second-heading' onClick={() => setShowFilterProperties(!showFilterProperties)}>
				Filters <span style={{ display: showFilterProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showFilterProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<button
				style={{
					display: showFilterProperties ? 'block' : 'none',
					padding: '5px 10px',
					position: 'absolute',
					top: '0px',
					right: '30px',
				}}>
				Reset
			</button>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Brightness:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setBrightness(`${e.target.value}%`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Contrast:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setContrast(`${e.target.value}%`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Blur: </label>
				<input type='range' min='0' max='10' defaultValue='0' onChange={e => setBlur(`${e.target.value}px`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>GrayScale: </label>
				<input type='range' min='0' max='100' defaultValue='0' onChange={e => setGrayScale(`${e.target.value}%`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Hue: </label>
				<input type='range' min='0' max='360' defaultValue='0' onChange={e => setHue(`${e.target.value}deg`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Saturation:</label>
				<input type='range' min='0' max='200' defaultValue='100' onChange={e => setSaturation(`${e.target.value}%`)} />
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Sepia: </label>
				<input type='range' min='0' max='100' defaultValue='0' onChange={e => setSepia(`${e.target.value}%`)} />
			</div>
		</div>
	)
}

export default Filter
