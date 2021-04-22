import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Position = () => {
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
		showPositionProperties,
		setShowPositionProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	const [position, setPosition] = useState('static')
	const [top, setTop] = useState('')
	const [topUnit, setTopUnit] = useState('px')
	const [bottom, setBottom] = useState('')
	const [bottomUnit, setBottomUnit] = useState('px')
	const [left, setLeft] = useState('')
	const [leftUnit, setLeftUnit] = useState('px')
	const [right, setRight] = useState('')
	const [rightUnit, setRightUnit] = useState('px')
	const [zIndex, setZIndex] = useState('')

	//For setting Positions
	useEffect(() => {
		if (small && medium && large && xlarge && position !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'position', position)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'position', position)
				if (!changedLarge) setProperties(large, setLarge, 'position', position)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', position)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'position', position)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'position', position)
				if (!changedLarge) setProperties(large, setLarge, 'position', position)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', position)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'position', position)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'position', position)
				if (!changedSmall) setProperties(small, setSmall, 'position', position)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', position)
			} else {
				setProperties(xlarge, setXlarge, 'position', position)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'position', position)
				if (!changedLarge) setProperties(large, setLarge, 'position', position)
				if (!changedSmall) setProperties(small, setSmall, 'position', position)
			}
		}
	}, [position])

	//For setting Top
	useEffect(() => {
		if (small && medium && large && xlarge && top !== '') {
			const ele = document.getElementById('pos-top-select')
			let unit = topUnit
			if (ele) unit = ele.value

			let t = `${top}${unit}`

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'top', t)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'top', t)
				if (!changedLarge) setProperties(large, setLarge, 'top', t)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', t)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'top', t)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'top', t)
				if (!changedLarge) setProperties(large, setLarge, 'top', t)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', t)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'top', t)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'top', t)
				if (!changedSmall) setProperties(small, setSmall, 'top', t)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', t)
			} else {
				setProperties(xlarge, setXlarge, 'top', t)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'top', t)
				if (!changedLarge) setProperties(large, setLarge, 'top', t)
				if (!changedSmall) setProperties(small, setSmall, 'top', t)
			}
		}
	}, [top, topUnit])

	//For setting Bottom
	useEffect(() => {
		if (small && medium && large && xlarge && bottom !== '') {
			const ele = document.getElementById('pos-bottom-select')
			let unit = bottomUnit
			if (ele) unit = ele.value

			let b = `${bottom}${unit}`

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'bottom', b)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'bottom', b)
				if (!changedLarge) setProperties(large, setLarge, 'bottom', b)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'bottom', b)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'bottom', b)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'bottom', b)
				if (!changedLarge) setProperties(large, setLarge, 'bottom', b)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'bottom', b)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'bottom', b)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'bottom', b)
				if (!changedSmall) setProperties(small, setSmall, 'bottom', b)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'bottom', b)
			} else {
				setProperties(xlarge, setXlarge, 'bottom', b)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'bottom', b)
				if (!changedLarge) setProperties(large, setLarge, 'bottom', b)
				if (!changedSmall) setProperties(small, setSmall, 'bottom', b)
			}
		}
	}, [bottom, bottomUnit])

	//For z-index
	useEffect(() => {
		if (small && medium && large && xlarge && zIndex !== '') {
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'zIndex', zIndex)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'zIndex', zIndex)
				if (!changedLarge) setProperties(large, setLarge, 'zIndex', zIndex)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'zIndex', zIndex)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'zIndex', zIndex)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'zIndex', zIndex)
				if (!changedLarge) setProperties(large, setLarge, 'zIndex', zIndex)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'zIndex', zIndex)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'zIndex', zIndex)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'zIndex', zIndex)
				if (!changedSmall) setProperties(small, setSmall, 'zIndex', zIndex)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'zIndex', zIndex)
			} else {
				setProperties(xlarge, setXlarge, 'zIndex', zIndex)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'zIndex', zIndex)
				if (!changedLarge) setProperties(large, setLarge, 'zIndex', zIndex)
				if (!changedSmall) setProperties(small, setSmall, 'zIndex', zIndex)
			}
		}
	}, [zIndex])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders'>
			<p className='second-heading' onClick={() => setShowPositionProperties(!showPositionProperties)}>
				POSITIONS <span style={{ display: showPositionProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showPositionProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showPositionProperties ? 'block' : 'none' }} className='btn-specific'>
				<div className='two'>
					<label>Positions</label>
					<select onChange={e => setPosition(e.target.value)} id='pos-input'>
						<option value='static'>Static</option>
						<option value='relative'>Relative</option>
						<option value='fixed'>Fixed</option>
						<option value='sticky'>Sticky</option>
						<option value='absolute'>Absolute</option>
					</select>
				</div>
				<div style={{ display: position === 'static' ? 'none' : 'grid' }} className='three'>
					<label>Top: </label>
					<input onChange={e => setTop(e.target.value)} id='pos-top-input' type='number' className='numberinput' />
					<select onChange={e => setTopUnit(e.target.value)} id='pos-top-select'>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div style={{ display: position === 'static' || position === 'relative' ? 'none' : 'grid' }} className='three'>
					<label>Bottom: </label>
					<input
						onChange={e => setBottom(e.target.value)}
						id='pos-bottom-input'
						type='number'
						className='numberinput'
					/>
					<select onChange={e => setBottomUnit(e.target.value)} id='pos-bottom-select'>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div style={{ display: position === 'static' ? 'none' : 'grid' }} className='three'>
					<label>Left: </label>
					<input onChange={e => setLeft(e.target.value)} id='pos-left-input' type='number' className='numberinput' />
					<select onChange={e => setLeftUnit(e.target.value)} id='pos-left-select'>
						<option value='px'>PX</option>
						<option value='vw'>VW</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div style={{ display: position === 'static' ? 'none' : 'grid' }} className='three'>
					<label>Right: </label>
					<input onChange={e => setRight(e.target.value)} id='pos-right-input' type='number' className='numberinput' />
					<select onChange={e => setRightUnit(e.target.value)} id='pos-right-select'>
						<option value='px'>PX</option>
						<option value='vw'>VW</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='two'>
					<label>Z-Index: </label>
					<input
						onChange={e => setZIndex(e.target.value)}
						id='pos-index-input'
						type='number'
						className='numberinput'
						defaultValue='0'
					/>
				</div>
			</div>
		</div>
	)
}

export default Position
