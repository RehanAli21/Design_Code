import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
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
	const { width, activeElement } = useContext(PageContext)

	const [brightness, setBrightness] = useState('')
	const [contrast, setContrast] = useState('')
	const [blur, setBlur] = useState('')
	const [grayScale, setGrayScale] = useState('')
	const [hue, setHue] = useState('')
	const [saturation, setSaturation] = useState('')
	const [sepia, setSepia] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (large.filter) {
				const filters = large.filter.split(' ')
				filters.forEach(e => {
					const filterName = e.split('(')[0]
					const ele = document.getElementById(`filter-${filterName}-input`)
					if (ele) {
						if (filterName === 'blur') {
							const value = e.split('(')[1].split(')')[0].split('p')[0]
							ele.value = value
						} else if (filterName === 'hue-rotate') {
							const value = e.split('(')[1].split(')')[0].split('d')[0]
							ele.value = value
						} else {
							const value = e.split('(')[1].split(')')[0].split('%')[0]
							ele.value = value
						}
					}
				})
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			let filter = ''
			if (brightness !== '' && brightness !== '100%') filter += ` brightness(${brightness})`
			if (contrast !== '' && contrast !== '100%') filter += ` contrast(${contrast})`
			if (blur !== '' && blur !== '0px') filter += ` blur(${blur})`
			if (grayScale !== '' && grayScale !== '0%') filter += ` grayscale(${grayScale})`
			if (hue !== '' && hue !== '0deg') filter += ` hue-rotate(${hue})`
			if (saturation !== '' && saturation !== '100%') filter += ` saturate(${saturation})`
			if (sepia !== '' && sepia !== '0%') filter += ` sepia(${sepia})`

			if (filter !== '') filter = filter.substr(1, filter.length - 1)

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

	const reset = () => {
		setBrightness('')
		setContrast('')
		setBlur('')
		setGrayScale('')
		setHue('')
		setSaturation('')
		setSepia('')

		document.getElementById('filter-brightness-input').value = '100'
		document.getElementById('filter-contrast-input').value = '100'
		document.getElementById('filter-blur-input').value = '0'
		document.getElementById('filter-grayscale-input').value = '0'
		document.getElementById('filter-hue-rotate-input').value = '0'
		document.getElementById('filter-saturate-input').value = '100'
		document.getElementById('filter-sepia-input').value = '0'
	}

	return (
		<div className='borders btn-specific' style={{ position: 'relative' }}>
			<p className='second-heading' onClick={() => setShowFilterProperties(!showFilterProperties)}>
				Filters <span style={{ display: showFilterProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showFilterProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<button
				onClick={reset}
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
				<input
					id='filter-brightness-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setBrightness(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Contrast:</label>
				<input
					id='filter-contrast-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setContrast(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Blur: </label>
				<input
					id='filter-blur-input'
					type='range'
					min='0'
					max='10'
					defaultValue='0'
					onChange={e => setBlur(`${e.target.value}px`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>GrayScale: </label>
				<input
					id='filter-grayscale-input'
					type='range'
					min='0'
					max='100'
					defaultValue='0'
					onChange={e => setGrayScale(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Hue: </label>
				<input
					id='filter-hue-rotate-input'
					type='range'
					min='0'
					max='360'
					defaultValue='0'
					onChange={e => setHue(`${e.target.value}deg`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Saturation:</label>
				<input
					id='filter-saturate-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setSaturation(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Sepia: </label>
				<input
					id='filter-sepia-input'
					type='range'
					min='0'
					max='100'
					defaultValue='0'
					onChange={e => setSepia(`${e.target.value}%`)}
				/>
			</div>
		</div>
	)
}

export default Filter
