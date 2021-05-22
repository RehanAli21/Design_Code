import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { PageContext } from '../../Contexts/PageContext'

const ClickExtra = () => {
	const { click, setClick, showClickProperties, setShowClickProperties } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)

	const [origin, setOrigin] = useState('')
	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	//For setting default values
	useEffect(() => {
		if (click) {
			let transforms
			if (click.transform) {
				transforms = click.transform.split(' ')
			}

			if (transforms) {
				transforms.forEach(e => {
					const tranformName = e.split('(')[0]
					const ele = document.getElementById(`extraclick-${tranformName}`)
					if (ele) {
						if (tranformName === 'scaleX' || tranformName === 'scaleY') {
							const value = e.split('(')[1].split(')')[0]
							ele.value = value
						} else if (tranformName === 'rotate') {
							const value = e.split('(')[1].split(')')[0].split('d')[0]
							ele.value = value
						} else {
							const value = e.split('(')[1].split(')')[0].split('p')[0]
							ele.value = value
						}
					}
				})
			} else {
				const inputsNames = ['scaleX', 'scaleY', 'rotate', 'translateX', 'translateY']

				inputsNames.forEach(e => {
					const ele = document.getElementById(`extraclick-${e}`)
					if (ele) ele.value = e === 'scaleX' || e === 'scaleY' ? 1 : 0
				})
			}

			//For origin default value
			const originSelect = document.getElementById('extraclick-origin-select')

			originSelect.value = click.transformOrigin ? click.transformOrigin : 'center'
		}
	}, [width, activeElement, click])

	useEffect(() => {
		if (click) {
			let transform = ''

			if (scaleX !== '' && scaleX !== '0') transform += ` scaleX(${scaleX})`
			if (scaleY !== '' && scaleY !== '0') transform += ` scaleY(${scaleY})`
			if (rotate !== '' && rotate !== '0') transform += ` rotate(${rotate})`
			if (translateX !== '' && translateX !== '0') transform += ` translateX(${translateX})`
			if (translateY !== '' && translateY !== '0') transform += ` translateY(${translateY})`

			if (transform !== '') transform = transform.substr(1, transform.length - 1)

			setProperties(click, setClick, 'transform', transform)
		}
	}, [scaleX, scaleY, rotate, translateX, translateY])

	//for setting tranform origin
	useEffect(() => {
		if (click && origin !== '') {
			setProperties(click, setClick, 'transformOrigin', origin)
		}
	}, [origin])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowClickProperties(!showClickProperties)}>
				CLICK PROPERTIES <span style={{ display: showClickProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showClickProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>Origin</label>
				<select id='extraclick-origin-select' onChange={e => setOrigin(e.target.value)}>
					<option value='center'>Center</option>
					<option value='top'>Top</option>
					<option value='bottom'>Bottom</option>
					<option value='left'>Left</option>
					<option value='right'>Right</option>
				</select>
			</div>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>ScaleX: </label>
				<input
					id='extraclick-scaleX'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>ScaleY: </label>
				<input
					id='extraclick-scaleY'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>Rotate: </label>
				<input
					id='extraclick-rotate'
					min='0'
					max='360'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>TranslateX: </label>
				<input
					id='extraclick-translateX'
					min='0'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two' style={{ display: showClickProperties ? 'grid' : 'none' }}>
				<label>TranslateY: </label>
				<input
					id='extraclick-translateY'
					min='0'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='TranslateY'
					onChange={e => setTranslateY(`${e.target.value}px`)}
				/>
			</div>
		</div>
	)
}

export default ClickExtra
