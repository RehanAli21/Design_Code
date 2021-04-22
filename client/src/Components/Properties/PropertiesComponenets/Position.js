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
	const [posToShowProperties, setPosToShowProperties] = useState('static')
	const [top, setTop] = useState('')
	const [topUnit, setTopUnit] = useState('px')
	const [bottom, setBottom] = useState('')
	const [bottomUnit, setBottomUnit] = useState('px')
	const [left, setLeft] = useState('')
	const [leftUnit, setLeftUnit] = useState('px')
	const [right, setRight] = useState('')
	const [rightUnit, setRightUnit] = useState('px')
	const [zIndex, setZIndex] = useState('')

	//For setting default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const positionInput = document.getElementById('pos-input')
			const topInput = document.getElementById('pos-top-input')
			const topSelect = document.getElementById('pos-top-select')
			const bottomInput = document.getElementById('pos-bottom-input')
			const bottomSelect = document.getElementById('pos-bottom-select')
			const leftInput = document.getElementById('pos-left-input')
			const leftSelect = document.getElementById('pos-left-select')
			const rightInput = document.getElementById('pos-right-input')
			const rightSelect = document.getElementById('pos-right-select')
			const indexInput = document.getElementById('pos-index-input')

			if (width < sBreakPoint) {
				if (small.position) positionInput.value = small.position

				if (small.zIndex) indexInput.value = small.zIndex

				if (small.top) {
					const unit = unitFinder(small.top)
					topSelect.value = unit
					topInput.value = small.top.split(unitFirstLetter(unit))[0]
				}

				if (small.bottom) {
					const unit = unitFinder(small.bottom)
					bottomSelect.value = unit
					bottomInput.value = small.bottom.split(unitFirstLetter(unit))[0]
				}

				if (small.left) {
					const unit = unitFinder(small.left)
					leftSelect.value = unit
					leftInput.value = small.left.split(unitFirstLetter(unit))[0]
				}

				if (small.right) {
					const unit = unitFinder(small.right)
					rightSelect.value = unit
					rightInput.value = small.right.split(unitFirstLetter(unit))[0]
				}
			} else if (width < mBreakPoint) {
				if (medium.position) positionInput.value = medium.position

				if (medium.zIndex) indexInput.value = medium.zIndex

				if (medium.top) {
					const unit = unitFinder(medium.top)
					topSelect.value = unit
					topInput.value = medium.top.split(unitFirstLetter(unit))[0]
				}

				if (medium.bottom) {
					const unit = unitFinder(medium.bottom)
					bottomSelect.value = unit
					bottomInput.value = medium.bottom.split(unitFirstLetter(unit))[0]
				}

				if (medium.left) {
					const unit = unitFinder(medium.left)
					leftSelect.value = unit
					leftInput.value = medium.left.split(unitFirstLetter(unit))[0]
				}

				if (medium.right) {
					const unit = unitFinder(medium.right)
					rightSelect.value = unit
					rightInput.value = medium.right.split(unitFirstLetter(unit))[0]
				}
			} else if (width < lBreakPoint) {
				positionInput.value = large.position ? large.position : 'static'
				setPosToShowProperties(large.position ? large.position : 'static')

				indexInput.value = large.zIndex ? large.zIndex : '0'

				if (large.top) {
					const unit = unitFinder(large.top)
					topSelect.value = unit
					topInput.value = large.top.split(unitFirstLetter(unit))[0]
				} else {
					setTop('')
					topSelect.value = 'px'
					topInput.value = ''
				}

				if (large.bottom) {
					const unit = unitFinder(large.bottom)
					bottomSelect.value = unit
					bottomInput.value = large.bottom.split(unitFirstLetter(unit))[0]
				} else {
					setBottom('')
					bottomSelect.value = 'px'
					bottomInput.value = ''
				}

				if (large.left) {
					const unit = unitFinder(large.left)
					leftSelect.value = unit
					leftInput.value = large.left.split(unitFirstLetter(unit))[0]
				} else {
					setLeft('')
					leftSelect.value = 'px'
					leftInput.value = ''
				}

				if (large.right) {
					const unit = unitFinder(large.right)
					rightSelect.value = unit
					rightInput.value = large.right.split(unitFirstLetter(unit))[0]
				} else {
					setRight('')
					rightSelect.value = 'px'
					rightInput.value = ''
				}
			} else {
				if (xlarge.position) positionInput.value = xlarge.position

				if (xlarge.zIndex) indexInput.value = xlarge.zIndex

				if (xlarge.top) {
					const unit = unitFinder(xlarge.top)
					topSelect.value = unit
					topInput.value = xlarge.top.split(unitFirstLetter(unit))[0]
				}

				if (xlarge.bottom) {
					const unit = unitFinder(xlarge.bottom)
					bottomSelect.value = unit
					bottomInput.value = xlarge.bottom.split(unitFirstLetter(unit))[0]
				}

				if (xlarge.left) {
					const unit = unitFinder(xlarge.left)
					leftSelect.value = unit
					leftInput.value = xlarge.left.split(unitFirstLetter(unit))[0]
				}

				if (xlarge.right) {
					const unit = unitFinder(xlarge.right)
					rightSelect.value = unit
					rightInput.value = xlarge.right.split(unitFirstLetter(unit))[0]
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const unitFinder = s =>
		s.search('px') !== -1
			? 'px'
			: s.search('%') !== -1
			? '%'
			: s.search('em') !== -1
			? 'em'
			: s.search('vh') !== -1
			? 'vh'
			: s.search('vw') !== -1
			? 'vw'
			: 'px'

	const unitFirstLetter = s => (s === 'px' ? 'p' : s === '%' ? '%' : s === 'em' ? 'e' : s === 'vh' || s === 'vw' ? 'v' : 'p')

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

	//For setting Left
	useEffect(() => {
		if (small && medium && large && xlarge && left !== '') {
			const ele = document.getElementById('pos-left-select')
			let unit = leftUnit
			if (ele) unit = ele.value

			let l = `${left}${unit}`

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'left', l)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'left', l)
				if (!changedLarge) setProperties(large, setLarge, 'left', l)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', l)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'left', l)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'left', l)
				if (!changedLarge) setProperties(large, setLarge, 'left', l)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', l)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'left', l)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'left', l)
				if (!changedSmall) setProperties(small, setSmall, 'left', l)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'left', l)
			} else {
				setProperties(xlarge, setXlarge, 'left', l)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'left', l)
				if (!changedLarge) setProperties(large, setLarge, 'left', l)
				if (!changedSmall) setProperties(small, setSmall, 'left', l)
			}
		}
	}, [left, leftUnit])

	//For setting Right
	useEffect(() => {
		if (small && medium && large && xlarge && right !== '') {
			const ele = document.getElementById('pos-right-select')
			let unit = rightUnit
			if (ele) unit = ele.value

			let r = `${right}${unit}`

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'right', r)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'right', r)
				if (!changedLarge) setProperties(large, setLarge, 'right', r)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'right', r)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'right', r)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'right', r)
				if (!changedLarge) setProperties(large, setLarge, 'right', r)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'right', r)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'right', r)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'right', r)
				if (!changedSmall) setProperties(small, setSmall, 'right', r)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'right', r)
			} else {
				setProperties(xlarge, setXlarge, 'right', r)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'right', r)
				if (!changedLarge) setProperties(large, setLarge, 'right', r)
				if (!changedSmall) setProperties(small, setSmall, 'right', r)
			}
		}
	}, [right, rightUnit])

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

	const reset = () => {
		if (small && medium && large && xlarge && top !== '') {
			if (width < sBreakPoint) {
				resetProperties(small, setSmall)
				setChangedSmall(true)

				if (!changedMedium) resetProperties(medium, setMedium)
				if (!changedLarge) resetProperties(large, setLarge)
				if (!changedXlarge) resetProperties(xlarge, setXlarge)
			} else if (width < mBreakPoint) {
				resetProperties(medium, setMedium)
				setChangedMedium(true)

				if (!changedSmall) resetProperties(small, setSmall)
				if (!changedLarge) resetProperties(large, setLarge)
				if (!changedXlarge) resetProperties(xlarge, setXlarge)
			} else if (width < lBreakPoint) {
				resetProperties(large, setLarge)
				setChangedLarge(true)

				if (!changedMedium) resetProperties(medium, setMedium)
				if (!changedSmall) resetProperties(small, setSmall)
				if (!changedXlarge) resetProperties(xlarge, setXlarge)
			} else {
				resetProperties(xlarge, setXlarge)
				setChangedXlarge(true)

				if (!changedMedium) resetProperties(medium, setMedium)
				if (!changedLarge) resetProperties(large, setLarge)
				if (!changedSmall) resetProperties(small, setSmall)
			}
		}
	}

	const resetProperties = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		temp.position = 'static'
		temp.zIndex = ''
		temp.top = ''
		temp.bottom = ''
		temp.left = ''
		temp.right = ''
		setObj(temp)
	}

	return (
		<div className='borders btn-specific' style={{ position: 'relative' }}>
			<p className='second-heading' onClick={() => setShowPositionProperties(!showPositionProperties)}>
				POSITIONS <span style={{ display: showPositionProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showPositionProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<button
				onClick={reset}
				style={{
					display: showPositionProperties ? 'block' : 'none',
					padding: '5px 10px',
					position: 'absolute',
					top: '0px',
					right: '30px',
				}}>
				Reset
			</button>
			<div style={{ display: showPositionProperties ? 'block' : 'none' }} className='btn-specific'>
				<div className='two'>
					<label>Positions</label>
					<select
						onChange={e => {
							setPosition(e.target.value)
							setPosToShowProperties(e.target.value)
						}}
						id='pos-input'>
						<option value='static'>Static</option>
						<option value='relative'>Relative</option>
						<option value='fixed'>Fixed</option>
						<option value='sticky'>Sticky</option>
						<option value='absolute'>Absolute</option>
					</select>
				</div>
				<div style={{ display: posToShowProperties === 'static' || bottom !== '' ? 'none' : 'grid' }} className='three'>
					<label>Top: </label>
					<input onChange={e => setTop(e.target.value)} id='pos-top-input' type='number' className='numberinput' />
					<select onChange={e => setTopUnit(e.target.value)} id='pos-top-select'>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div
					style={{
						display:
							posToShowProperties === 'static' ||
							posToShowProperties === 'relative' ||
							posToShowProperties === 'sticky' ||
							top !== ''
								? 'none'
								: 'grid',
					}}
					className='three'>
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
				<div style={{ display: posToShowProperties === 'static' || right !== '' ? 'none' : 'grid' }} className='three'>
					<label>Left: </label>
					<input onChange={e => setLeft(e.target.value)} id='pos-left-input' type='number' className='numberinput' />
					<select onChange={e => setLeftUnit(e.target.value)} id='pos-left-select'>
						<option value='px'>PX</option>
						<option value='vw'>VW</option>
						<option value='%'>%</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div
					style={{
						display:
							posToShowProperties === 'static' ||
							posToShowProperties === 'relative' ||
							posToShowProperties === 'sticky' ||
							left !== ''
								? 'none'
								: 'grid',
					}}
					className='three'>
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
