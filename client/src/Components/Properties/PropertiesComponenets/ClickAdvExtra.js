import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const ClickAdvExtra = () => {
	const { clickTargets, setClickTargets, showCAEP, setShowCAEP } = useContext(PropertiesContext)

	const [origin, setOrigin] = useState('')
	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	//For setting default values
	useEffect(() => {
		for (const e in clickTargets) {
			if (clickTargets[e].selected) {
				let transforms
				if (clickTargets[e].style.transform) {
					transforms = clickTargets[e].style.transform.split(' ')
				}

				if (transforms) {
					transforms.forEach(e => {
						const tranformName = e.split('(')[0]
						const ele = document.getElementById(`extraclickadv-${tranformName}`)
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
						const ele = document.getElementById(`extraclickadv-${e}`)
						if (ele) ele.value = e === 'scaleX' || e === 'scaleY' ? 1 : 0
					})
				}

				//For origin default value
				const originSelect = document.getElementById('extraclickadv-origin-select')

				originSelect.value = clickTargets[e].style.transformOrigin ? clickTargets[e].style.transformOrigin : 'center'
			}
		}
	}, [clickTargets])

	useEffect(() => {
		let transform = ''

		if (scaleX !== '') transform += ` scaleX(${scaleX})`
		if (scaleY !== '') transform += ` scaleY(${scaleY})`
		if (rotate !== '') transform += ` rotate(${rotate})`
		if (translateX !== '') transform += ` translateX(${translateX})`
		if (translateY !== '') transform += ` translateY(${translateY})`

		if (transform !== '') transform = transform.substr(1, transform.length - 1)

		setProperties('transform', transform)
	}, [scaleX, scaleY, rotate, translateX, translateY])

	//for setting tranform origin
	useEffect(() => {
		if (origin !== '') {
			setProperties('transformOrigin', origin)
		}
	}, [origin])

	const setProperties = (propertyName, property) => {
		const temp = Object.assign({}, clickTargets)
		for (const e in clickTargets) {
			if (clickTargets[e].selected) {
				temp[e].style[propertyName] = property
			}
		}
		setClickTargets(temp)
	}

	return (
		<div className='btn-specific'>
			<p className='second-heading' onClick={() => setShowCAEP(!showCAEP)}>
				EXTRA <span style={{ display: showCAEP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showCAEP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>Origin</label>
				<select id='extraclickadv-origin-select' onChange={e => setOrigin(e.target.value)}>
					<option value='center'>Center</option>
					<option value='top'>Top</option>
					<option value='bottom'>Bottom</option>
					<option value='left'>Left</option>
					<option value='right'>Right</option>
				</select>
			</div>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>ScaleX: </label>
				<input
					id='extraclickadv-scaleX'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>ScaleY: </label>
				<input
					id='extraclickadv-scaleY'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>Rotate: </label>
				<input
					id='extraclickadv-rotate'
					min='0'
					max='360'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>TranslateX: </label>
				<input
					id='extraclickadv-translateX'
					min='0'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two' style={{ display: showCAEP ? 'grid' : 'none' }}>
				<label>TranslateY: </label>
				<input
					id='extraclickadv-translateY'
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

export default ClickAdvExtra
