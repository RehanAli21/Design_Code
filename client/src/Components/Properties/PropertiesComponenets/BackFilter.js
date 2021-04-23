import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const BackFilter = () => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		showBackFilterProperties,
		setShowBackFilterProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)

	const [brightness, setBrightness] = useState('')
	const [contrast, setContrast] = useState('')
	const [blur, setBlur] = useState('')
	const [grayScale, setGrayScale] = useState('')
	const [hue, setHue] = useState('')
	const [saturation, setSaturation] = useState('')
	const [sepia, setSepia] = useState('')
	const [opacity, setOpacity] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (large.filter) {
				const filters = large.filter.split(' ')
				filters.forEach(e => {
					const filterName = e.split('(')[0]
					const ele = document.getElementById(`backfilter-${filterName}-input`)
					if (ele) {
						if (filterName === 'blur') {
							const value = e.split('(')[1].split(')')[0].split('p')[0]
							ele.value = value
						} else if (filterName === 'hue-rotate') {
							const value = e.split('(')[1].split(')')[0].split('d')[0]
							ele.value = value
						} else if (filterName === 'opacity') {
							const value = e.split('(')[1].split(')')[0]
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
			if (opacity !== '' && opacity !== 1) filter += ` opacity(${opacity})`

			if (filter !== '') filter = filter.substr(1, filter.length - 1)

			setProperties(small, setSmall, 'backdropFilter', filter)
			setProperties(medium, setMedium, 'backdropFilter', filter)
			setProperties(large, setLarge, 'backdropFilter', filter)
			setProperties(xlarge, setXlarge, 'backdropFilter', filter)
		}
	}, [brightness, contrast, blur, grayScale, hue, saturation, sepia, opacity])

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
		setOpacity('')

		document.getElementById('backfilter-brightness-input').value = '100'
		document.getElementById('backfilter-contrast-input').value = '100'
		document.getElementById('backfilter-blur-input').value = '0'
		document.getElementById('backfilter-grayscale-input').value = '0'
		document.getElementById('backfilter-hue-rotate-input').value = '0'
		document.getElementById('backfilter-saturate-input').value = '100'
		document.getElementById('backfilter-sepia-input').value = '0'
		document.getElementById('backfilter-opacity-input').value = '1'
	}

	return (
		<div className='borders btn-specific' style={{ position: 'relative' }}>
			<p className='second-heading' onClick={() => setShowBackFilterProperties(!showBackFilterProperties)}>
				Background Filters <span style={{ display: showBackFilterProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBackFilterProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<button
				onClick={reset}
				style={{
					display: showBackFilterProperties ? 'block' : 'none',
					padding: '5px 10px',
					position: 'absolute',
					top: '0px',
					right: '30px',
				}}>
				Reset
			</button>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Brightness:</label>
				<input
					id='backfilter-brightness-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setBrightness(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Contrast:</label>
				<input
					id='backfilter-contrast-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setContrast(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Blur: </label>
				<input
					id='backfilter-blur-input'
					type='range'
					min='0'
					max='10'
					defaultValue='0'
					onChange={e => setBlur(`${e.target.value}px`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>GrayScale: </label>
				<input
					id='backfilter-grayscale-input'
					type='range'
					min='0'
					max='100'
					defaultValue='0'
					onChange={e => setGrayScale(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Hue: </label>
				<input
					id='backfilter-hue-rotate-input'
					type='range'
					min='0'
					max='360'
					defaultValue='0'
					onChange={e => setHue(`${e.target.value}deg`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Saturation:</label>
				<input
					id='backfilter-saturate-input'
					type='range'
					min='0'
					max='200'
					defaultValue='100'
					onChange={e => setSaturation(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Sepia: </label>
				<input
					id='backfilter-sepia-input'
					type='range'
					min='0'
					max='100'
					defaultValue='0'
					onChange={e => setSepia(`${e.target.value}%`)}
				/>
			</div>
			<div style={{ display: showBackFilterProperties ? 'grid' : 'none' }} className='two'>
				<label>Opacity: </label>
				<input
					id='backfilter-opacity-input'
					type='range'
					min='0'
					max='1'
					step='0.1'
					defaultValue='1'
					onChange={e => setOpacity(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default BackFilter
