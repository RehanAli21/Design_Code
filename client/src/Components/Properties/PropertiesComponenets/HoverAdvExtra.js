import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { PageContext } from '../../Contexts/PageContext'

const HoverAdvExtra = () => {
	const { hoveradv, setHoveradv, showHAEP, setShowHAEP } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)

	const [origin, setOrigin] = useState('')
	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	//For setting default values
	useEffect(() => {
		if (hoveradv) {
			let transforms
			if (hoveradv.transform) {
				transforms = hoveradv.transform.split(' ')
			}

			if (transforms) {
				transforms.forEach(e => {
					const tranformName = e.split('(')[0]
					const ele = document.getElementById(`extrahoveradv-${tranformName}`)
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
					const ele = document.getElementById(`extrahoveradv-${e}`)
					if (ele) ele.value = e === 'scaleX' || e === 'scaleY' ? 1 : 0
				})
			}

			//For origin default value
			const originSelect = document.getElementById('extrahoveradv-origin-select')

			originSelect.value = hoveradv.transformOrigin ? hoveradv.transformOrigin : 'center'
		}
	}, [width, activeElement, hoveradv])

	useEffect(() => {
		if (hoveradv) {
			let transform = ''

			if (scaleX !== '' && scaleX !== '0') transform += ` scaleX(${scaleX})`
			if (scaleY !== '' && scaleY !== '0') transform += ` scaleY(${scaleY})`
			if (rotate !== '' && rotate !== '0') transform += ` rotate(${rotate})`
			if (translateX !== '' && translateX !== '0') transform += ` translateX(${translateX})`
			if (translateY !== '' && translateY !== '0') transform += ` translateY(${translateY})`

			if (transform !== '') transform = transform.substr(1, transform.length - 1)

			setProperties(hoveradv, setHoveradv, 'transform', transform)
		}
	}, [scaleX, scaleY, rotate, translateX, translateY])

	//for setting tranform origin
	useEffect(() => {
		if (hoveradv && origin !== '') {
			setProperties(hoveradv, setHoveradv, 'transformOrigin', origin)
		}
	}, [origin])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='btn-specific'>
			<p className='second-heading' onClick={() => setShowHAEP(!showHAEP)}>
				EXTRA <span style={{ display: showHAEP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showHAEP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>Origin</label>
				<select id='extrahoveradv-origin-select' onChange={e => setOrigin(e.target.value)}>
					<option value='center'>Center</option>
					<option value='top'>Top</option>
					<option value='bottom'>Bottom</option>
					<option value='left'>Left</option>
					<option value='right'>Right</option>
				</select>
			</div>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>ScaleX: </label>
				<input
					id='extrahoveradv-scaleX'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>ScaleY: </label>
				<input
					id='extrahoveradv-scaleY'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>Rotate: </label>
				<input
					id='extrahoveradv-rotate'
					min='0'
					max='360'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>TranslateX: </label>
				<input
					id='extrahoveradv-translateX'
					min='0'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two' style={{ display: showHAEP ? 'grid' : 'none' }}>
				<label>TranslateY: </label>
				<input
					id='extrahoveradv-translateY'
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

export default HoverAdvExtra
