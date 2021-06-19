import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import Tip from './Tip'

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
	const {
		width,
		pages,
		setPages,
		activeElement,
		activePage,
		sBreakPoint,
		mBreakPoint,
		lBreakPoint,
		setMsgBoxMsg,
		setShowMsgBox,
	} = useContext(PageContext)

	const [position, setPosition] = useState('static')
	const [zIndex, setZIndex] = useState('')
	const [x, setX] = useState('')
	const [xUnit, setXUnit] = useState('px')
	const [y, setY] = useState('')
	const [yUnit, setYUnit] = useState('px')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const pos = position === 'fp' ? 'absolute' : position === 'static' ? '' : position
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'position', pos)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'position', pos)
				if (!changedLarge) setProperties(large, setLarge, 'position', pos)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', pos)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'position', pos)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'position', pos)
				if (!changedLarge) setProperties(large, setLarge, 'position', pos)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', pos)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'position', pos)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'position', pos)
				if (!changedSmall) setProperties(small, setSmall, 'position', pos)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'position', pos)
			} else {
				setProperties(xlarge, setXlarge, 'position', pos)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'position', pos)
				if (!changedLarge) setProperties(large, setLarge, 'position', pos)
				if (!changedSmall) setProperties(small, setSmall, 'position', pos)
			}
			if (position === 'fp') {
				const temp = Object.assign({}, pages)
				freeWithParent(temp[activePage], activeElement)
				setPages(temp)
			}
		}
	}, [position])

	const freeWithParent = (arr, id) => {
		arr.forEach(e => {
			if (e[2] && e[2].length > 0) {
				e[2].forEach(ele => {
					if (ele[1].id === id) {
						if (width < sBreakPoint) {
							if (e[1].styles.small.position && e[1].styles.small.position !== '') {
								setShowMsgBox(true)
								setMsgBoxMsg(
									`This element's parent element(${e[1].name}) already has position on small Breakpoint!`
								)
							} else if (e[1].styles.small.position) {
								e[1].styles.small['position'] = 'relative'
							}
						} else if (width < mBreakPoint) {
							if (e[1].styles.medium.position && e[1].styles.medium.position !== '') {
								setShowMsgBox(true)
								setMsgBoxMsg(
									`This element's parent element(${e[1].name}) already has position on medium Breakpoint!`
								)
							} else if (e[1].styles.medium.position) {
								e[1].styles.medium['position'] = 'relative'
							}
						} else if (width < lBreakPoint) {
							if (e[1].styles.large.position && e[1].styles.large.position !== '') {
								setShowMsgBox(true)
								setMsgBoxMsg(
									`This element's parent element(${e[1].name}) already has position on large Breakpoint!`
								)
							} else if (e[1].styles.large.position) {
								e[1].styles.large['position'] = 'relative'
							}
						} else {
							if (e[1].styles.xlarge.position && e[1].styles.xlarge.position !== '') {
								setShowMsgBox(true)
								setMsgBoxMsg(
									`This element's parent element(${e[1].name}) already has position on xlarge Breakpoint!`
								)
							} else if (e[1].styles.xlarge.position) {
								e[1].styles.xlarge['position'] = 'relative'
							}
						}
						return true
					}
				})
			}
		})

		arr.forEach(e => {
			if (e[2] && e[2].length > 0) {
				if (freeWithParent(e[2], id)) return true
			}
		})

		return false
	}

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

	useEffect(() => {
		if (small && medium && large && xlarge && x !== '') {
			const left = `${x}${xUnit}`
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'left', left)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'left', left)
				if (!changedLarge) setProperties(large, setLarge, 'left', left)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', left)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'left', left)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'left', left)
				if (!changedLarge) setProperties(large, setLarge, 'left', left)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', left)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'left', left)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'left', left)
				if (!changedSmall) setProperties(small, setSmall, 'left', left)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', left)
			} else {
				setProperties(xlarge, setXlarge, 'left', left)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'left', left)
				if (!changedLarge) setProperties(large, setLarge, 'left', left)
				if (!changedSmall) setProperties(small, setSmall, 'left', left)
			}
		}
	}, [x, xUnit])

	useEffect(() => {
		if (small && medium && large && xlarge && y !== '') {
			const top = `${y}${yUnit}`
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'top', top)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'top', top)
				if (!changedLarge) setProperties(large, setLarge, 'top', top)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', top)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'top', top)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'top', top)
				if (!changedLarge) setProperties(large, setLarge, 'top', top)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', top)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'top', top)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'top', top)
				if (!changedSmall) setProperties(small, setSmall, 'top', top)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'top', top)
			} else {
				setProperties(xlarge, setXlarge, 'top', top)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'top', top)
				if (!changedLarge) setProperties(large, setLarge, 'top', top)
				if (!changedSmall) setProperties(small, setSmall, 'top', top)
			}
		}
	}, [y, yUnit])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowPositionProperties(!showPositionProperties)}>
				<Tip msg={['Position for applying different positions', 'Z-Index for bring element forword or backword']} />
				POSITIONS <span style={{ display: showPositionProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showPositionProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two'>
				<label>Position</label>
				<select id='pos-position-select' onChange={e => setPosition(e.target.value)}>
					<option value='static'>Normal</option>
					<option value='absolute'>Free (Page)</option>
					<option value='fp'>Free (Parent)</option>
					<option value='fixed'>Sticky (Page)</option>
					<option value='sticky'>Sticky (Parent)</option>
				</select>
			</div>
			<div style={{ display: position === 'static' ? 'none' : 'block' }} className='btn-specific'>
				<div className='two'>
					<label>Z-index: </label>
					<input
						id='pos-zIndex-input'
						onChange={e => setZIndex(e.target.value)}
						type='number'
						className='numberinput'
						defaultValue='0'
					/>
				</div>
				<div className='three'>
					<label>
						<i className='bi-code'></i> X:
					</label>
					<input
						type='number'
						className='numberinput'
						min='0'
						defaultValue='0'
						id='pos-x-input'
						onChange={e => setX(e.target.value)}
					/>
					<select id='pos-xUnit-select' onChange={e => setXUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='three'>
					<label>
						<i className='bi-chevron-expand'></i>Y:
					</label>
					<input
						type='number'
						className='numberinput'
						min='0'
						defaultValue='0'
						id='pos-y-input'
						onChange={e => setY(e.target.value)}
					/>
					<select id='pos-yUnit-select' onChange={e => setYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Position
