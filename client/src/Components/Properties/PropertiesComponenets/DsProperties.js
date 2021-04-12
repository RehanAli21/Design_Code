import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { PageContext } from '../../Contexts/PageContext'

const DsProperties = () => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		changedSmall,
		setChangedSmall,
		changedMedium,
		setChangedMedium,
		changedLarge,
		setChangedLarge,
		changedXlarge,
		setChangedXlarge,
	} = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)

	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			let transform = ''

			if (scaleX !== '' && scaleX !== 0) transform += ` scaleX(${scaleX})`
			if (scaleY !== '' && scaleY !== 0) transform += ` scaleY(${scaleY})`
			if (rotate !== '' && rotate !== 0) transform += ` rotate(${rotate})`
			if (translateX !== '' && translateX !== 0) transform += ` translateX(${translateX})`
			if (translateY !== '' && translateY !== 0) transform += ` translateY(${translateY})`

			transform = transform.substr(1, transform.length - 1)

			if (width < 540) {
				setProperties(small, setSmall, 'transform', transform)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'transform', transform)
				if (!changedLarge) setProperties(large, setLarge, 'transform', transform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transform', transform)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'transform', transform)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'transform', transform)
				if (!changedLarge) setProperties(large, setLarge, 'transform', transform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transform', transform)
			} else if (width < 970) {
				setProperties(large, setLarge, 'transform', transform)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'transform', transform)
				if (!changedMedium) setProperties(medium, setMedium, 'transform', transform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transform', transform)
			} else {
				setProperties(xlarge, setXlarge, 'transform', transform)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'transform', transform)
				if (!changedMedium) setProperties(medium, setMedium, 'transform', transform)
				if (!changedLarge) setProperties(large, setLarge, 'transform', transform)
			}
		}
	}, [scaleX, scaleY, rotate, translateX, translateY])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='btn-specific'>
			<p className='second-heading'>EXTRA</p>
			<div className='two'>
				<label>ScaleX: </label>
				<input
					id='extra-scaleX'
					min='0'
					step='0.1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two'>
				<label>ScaleY: </label>
				<input
					id='extra-scaleY'
					min='0'
					step='0.1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two'>
				<label>Rotate: </label>
				<input
					id='extra-rotate'
					min='0'
					max='360'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two'>
				<label>TranslateX: </label>
				<input
					id='extra-translateX'
					min='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two'>
				<label>TranslateY: </label>
				<input
					id='extra-translateY'
					min='0'
					className='numberinput'
					type='number'
					placeholder='TranslateY'
					onChange={e => setTranslateY(`${e.target.value}px`)}
				/>
			</div>
		</div>
	)
}

export default DsProperties
