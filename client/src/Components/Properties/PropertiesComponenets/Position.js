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
	const [changePosition, setChangePosition] = useState(false)
	const [zIndex, setZIndex] = useState('')
	const [x, setX] = useState('')
	const [xUnit, setXUnit] = useState('px')
	const [y, setY] = useState('')
	const [yUnit, setYUnit] = useState('px')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const positionSelect = document.getElementById('pos-position-select')
			const zIndexInput = document.getElementById('pos-zIndex-input')
			const xInput = document.getElementById('pos-x-input')
			const xUnitSelect = document.getElementById('pos-xUnit-select')
			const yInput = document.getElementById('pos-y-input')
			const yUnitSelect = document.getElementById('pos-yUnit-select')

			if (width < sBreakPoint) {
				setPosition(small.position && small.position !== 'static' ? small.position : 'static')

				positionSelect.value = small.positionValue ? small.positionValue : 'static'
				zIndexInput.value = small.zIndex ? small.zIndex : '0'
				if (small.left) {
					const xValues = unitFinder(small.left)
					xInput.value = xValues[0]
					xUnitSelect.value = xValues[1]
				}

				if (small.top) {
					const yValues = unitFinder(small.top)
					yInput.value = yValues[0]
					yUnitSelect.value = yValues[1]
				}
			} else if (width < mBreakPoint) {
				setPosition(medium.position && medium.position !== 'static' ? medium.position : 'static')

				positionSelect.value = medium.positionValue ? medium.positionValue : 'static'
				zIndexInput.value = medium.zIndex ? medium.zIndex : '0'
				if (medium.left) {
					const xValues = unitFinder(medium.left)
					xInput.value = xValues[0]
					xUnitSelect.value = xValues[1]
				}

				if (medium.top) {
					const yValues = unitFinder(medium.top)
					yInput.value = yValues[0]
					yUnitSelect.value = yValues[1]
				}
			} else if (width < lBreakPoint) {
				setPosition(large.position && large.position !== 'static' ? large.position : 'static')

				positionSelect.value = large.positionValue ? large.positionValue : 'static'
				zIndexInput.value = large.zIndex ? large.zIndex : '0'
				if (large.left) {
					const xValues = unitFinder(large.left)
					xInput.value = xValues[0]
					xUnitSelect.value = xValues[1]
				}

				if (large.top) {
					const yValues = unitFinder(large.top)
					yInput.value = yValues[0]
					yUnitSelect.value = yValues[1]
				}
			} else {
				setPosition(xlarge.position && xlarge.position !== 'static' ? xlarge.position : 'static')

				positionSelect.value = xlarge.positionValue ? xlarge.positionValue : 'static'
				zIndexInput.value = xlarge.zIndex ? xlarge.zIndex : '0'
				if (xlarge.left) {
					const xValues = unitFinder(xlarge.left)
					xInput.value = xValues[0]
					xUnitSelect.value = xValues[1]
				}

				if (xlarge.top) {
					const yValues = unitFinder(xlarge.top)
					yInput.value = yValues[0]
					yUnitSelect.value = yValues[1]
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const unitFinder = s =>
		s.search('px') !== -1
			? [s.split('p')[0], 'px']
			: s.search('%') !== -1
			? [s.split('%')[0], '%']
			: s.search('vh') !== -1
			? [s.split('v')[0], 'vh']
			: s.search('vw') !== -1
			? [s.split('v')[0], 'vw']
			: s.search('em') !== -1
			? [s.split('e')[0], 'em']
			: ['0', 'px']

	//for setting postion
	useEffect(() => {
		if (small && medium && large && xlarge && changePosition) {
			const pos = position === 'fp' ? 'absolute' : position === 'static' ? '' : position
			if (position !== 'fp') {
				if (width < sBreakPoint) {
					setPositionProperty(small, setSmall, 'position', pos, position)
					setChangedSmall(true)
					if (!changedMedium) setPositionProperty(medium, setMedium, 'position', pos, position)
					if (!changedLarge) setPositionProperty(large, setLarge, 'position', pos, position)
					if (!changedXlarge) setPositionProperty(xlarge, setXlarge, 'position', pos, position)
				} else if (width < mBreakPoint) {
					setPositionProperty(medium, setMedium, 'position', pos, position)
					setChangedMedium(true)
					if (!changedSmall) setPositionProperty(small, setSmall, 'position', pos, position)
					if (!changedLarge) setPositionProperty(large, setLarge, 'position', pos, position)
					if (!changedXlarge) setPositionProperty(xlarge, setXlarge, 'position', pos, position)
				} else if (width < lBreakPoint) {
					setPositionProperty(large, setLarge, 'position', pos, position)
					setChangedLarge(true)
					if (!changedMedium) setPositionProperty(medium, setMedium, 'position', pos, position)
					if (!changedSmall) setPositionProperty(small, setSmall, 'position', pos, position)
					if (!changedXlarge) setPositionProperty(xlarge, setXlarge, 'position', pos, position)
				} else {
					setPositionProperty(xlarge, setXlarge, 'position', pos, position)
					setChangedXlarge(true)
					if (!changedMedium) setPositionProperty(medium, setMedium, 'position', pos, position)
					if (!changedLarge) setPositionProperty(large, setLarge, 'position', pos, position)
					if (!changedSmall) setPositionProperty(small, setSmall, 'position', pos, position)
				}
			}
			if (position === 'fp') {
				const temp = Object.assign({}, pages)
				if (!freeWithParent(temp[activePage], activeElement)) {
					setPosition('static')
					const ele = document.getElementById('pos-position-select')
					if (ele) ele.value = 'static'
				}
				setPages(temp)
			}
			setChangePosition(false)
		}
	}, [changePosition])

	const setPositionProperty = (obj, setObj, propertyName, property, position) => {
		const temp = Object.assign({ positionValue: position }, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//when position is free(parent), then this function executed
	const freeWithParent = (arr, id) => {
		arr.forEach(e => {
			if (e[2] && e[2].length > 0) {
				e[2].forEach(ele => {
					if (ele[1].id === id) {
						const newStyles = Object.assign({}, e[1].styles)

						if (width < sBreakPoint) {
							freeWithParentHelper(newStyles.small, e, 'small', 'fp')
						} else if (width < mBreakPoint) {
							freeWithParentHelper(newStyles.medium, e, 'medium', 'fp')
						} else if (width < lBreakPoint) {
							freeWithParentHelper(newStyles.large, e, 'large', 'fp')
						} else {
							freeWithParentHelper(newStyles.xlarge, e, 'xlarge', 'fp')
						}

						e[1].styles = Object.assign({}, newStyles)
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
	//for making code small, for above function
	const freeWithParentHelper = (obj, e, breakPoint, pos) => {
		if (obj.position && obj.position !== '' && obj.position !== 'relative') {
			setShowMsgBox(true)
			setMsgBoxMsg(`This element's parent element(${e[1].name}) already has position on ${breakPoint} Breakpoint!`)
		} else {
			obj = Object.assign({ position: 'relative', positionValue: pos }, obj)
		}
	}

	//for setting zIndex
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

	//for setting x
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

	//for setting y
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
				<select
					id='pos-position-select'
					onChange={e => {
						setPosition(e.target.value)
						setChangePosition(true)
					}}>
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
