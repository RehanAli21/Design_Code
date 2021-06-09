import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { PageContext } from '../../Contexts/PageContext'
import Tip from './Tip'

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
		showExtraProperties,
		setShowExtraProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	const [origin, setOrigin] = useState('')
	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	//For setting default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			let transforms
			if (small.transform) {
				transforms = small.transform.split(' ')
			} else if (medium.transform) {
				transforms = medium.transform.split(' ')
			} else if (large.transform) {
				transforms = large.transform.split(' ')
			} else if (xlarge.transform) {
				transforms = xlarge.transform.split(' ')
			}

			if (transforms) {
				transforms.forEach(e => {
					const tranformName = e.split('(')[0]
					const ele = document.getElementById(`extra-${tranformName}`)
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
					const ele = document.getElementById(`extra-${e}`)
					if (ele) ele.value = e === 'scaleX' || e === 'scaleY' ? 1 : 0
				})
			}

			//For origin default value
			const originSelect = document.getElementById('extra-origin-select')

			if (width < sBreakPoint) {
				originSelect.value = small.transformOrigin ? small.transformOrigin : 'center'
			} else if (width < mBreakPoint) {
				originSelect.value = medium.transformOrigin ? medium.transformOrigin : 'center'
			} else if (width < lBreakPoint) {
				originSelect.value = large.transformOrigin ? large.transformOrigin : 'center'
			} else {
				originSelect.value = xlarge.transformOrigin ? xlarge.transformOrigin : 'center'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	//for setting transform values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			let transform = ''

			if (scaleX !== '') transform += ` scaleX(${scaleX})`
			if (scaleY !== '') transform += ` scaleY(${scaleY})`
			if (rotate !== '') transform += ` rotate(${rotate})`
			if (translateX !== '') transform += ` translateX(${translateX})`
			if (translateY !== '') transform += ` translateY(${translateY})`

			if (transform !== '') transform = transform.substr(1, transform.length - 1)

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'transform', transform)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'transform', transform)
				if (!changedLarge) setProperties(large, setLarge, 'transform', transform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transform', transform)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'transform', transform)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'transform', transform)
				if (!changedLarge) setProperties(large, setLarge, 'transform', transform)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transform', transform)
			} else if (width < lBreakPoint) {
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

	//for setting tranform origin
	useEffect(() => {
		if (small && medium && large && xlarge && origin !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'transformOrigin', origin)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'transformOrigin', origin)
				if (!changedLarge) setProperties(large, setLarge, 'transformOrigin', origin)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transformOrigin', origin)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'transformOrigin', origin)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'transformOrigin', origin)
				if (!changedLarge) setProperties(large, setLarge, 'transformOrigin', origin)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transformOrigin', origin)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'transformOrigin', origin)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'transformOrigin', origin)
				if (!changedMedium) setProperties(medium, setMedium, 'transformOrigin', origin)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'transformOrigin', origin)
			} else {
				setProperties(xlarge, setXlarge, 'transformOrigin', origin)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'transformOrigin', origin)
				if (!changedMedium) setProperties(medium, setMedium, 'transformOrigin', origin)
				if (!changedLarge) setProperties(large, setLarge, 'transformOrigin', origin)
			}
		}
	}, [origin])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowExtraProperties(!showExtraProperties)}>
				<Tip msg={["This component's properties only affect element, not layout"]} />
				EXTRA <span style={{ display: showExtraProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showExtraProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>Origin</label>
				<select id='extra-origin-select' onChange={e => setOrigin(e.target.value)}>
					<option value='center'>Center</option>
					<option value='top'>Top</option>
					<option value='bottom'>Bottom</option>
					<option value='left'>Left</option>
					<option value='right'>Right</option>
				</select>
			</div>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>ScaleX: </label>
				<input
					id='extra-scaleX'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>ScaleY: </label>
				<input
					id='extra-scaleY'
					min='0'
					step='0.1'
					defaultValue='1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>Rotate: </label>
				<input
					id='extra-rotate'
					min='0'
					max='360'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>TranslateX: </label>
				<input
					id='extra-translateX'
					min='0'
					defaultValue='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two' style={{ display: showExtraProperties ? 'grid' : 'none' }}>
				<label>TranslateY: </label>
				<input
					id='extra-translateY'
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

export default DsProperties
