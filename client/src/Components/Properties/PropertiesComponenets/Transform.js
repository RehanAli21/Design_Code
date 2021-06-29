import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import Tip from './Tip'

const Transform = () => {
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
		showTransformProperties,
		setShowTransformProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)

	const [widthUnit, setWidthUnit] = useState('px')
	const [heightUnit, setHeighthUnit] = useState('px')
	const [widths, setWidths] = useState(``)
	const [heights, setHeights] = useState(``)
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(``)
	const [marginTop, setMarginTop] = useState(``)

	//For Default input values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const widthInput = document.getElementById('a-t-w')
			const widthSelect = document.getElementById('a-t-ws')
			const heightInput = document.getElementById('a-t-h')
			const heightSelect = document.getElementById('a-t-hs')
			const marginLeftInput = document.getElementById('a-t-ml')
			const marginLeftSelect = document.getElementById('a-t-mlu')
			const marginTopInput = document.getElementById('a-t-mt')
			const marginTopSelect = document.getElementById('a-t-mtu')

			if (width < sBreakPoint) {
				const w = unitFinder(small.width ? small.width : '')
				widthInput.value = w[0]
				widthSelect.value = w[1]

				const h = unitFinder(small.height ? small.height : '')
				heightInput.value = h[0]
				heightSelect.value = h[1]

				const ml = unitFinder(small.marginLeft ? small.marginLeft : '')
				marginLeftInput.value = ml[0]
				marginLeftSelect.value = ml[1]

				const mt = unitFinder(small.marginTop ? small.marginTop : '')
				marginTopInput.value = mt[0]
				marginTopSelect.value = mt[1]
			} else if (width < mBreakPoint) {
				const w = unitFinder(medium.width ? medium.width : '')
				widthInput.value = w[0]
				widthSelect.value = w[1]

				const h = unitFinder(medium.height ? medium.height : '')
				heightInput.value = h[0]
				heightSelect.value = h[1]

				const ml = unitFinder(medium.marginLeft ? medium.marginLeft : '')
				marginLeftInput.value = ml[0]
				marginLeftSelect.value = ml[1]

				const mt = unitFinder(medium.marginTop ? medium.marginTop : '')
				marginTopInput.value = mt[0]
				marginTopSelect.value = mt[1]
			} else if (width < lBreakPoint) {
				const w = unitFinder(large.width ? large.width : '')
				widthInput.value = w[0]
				widthSelect.value = w[1]

				const h = unitFinder(large.height ? large.height : '')
				heightInput.value = h[0]
				heightSelect.value = h[1]

				const ml = unitFinder(large.marginLeft ? large.marginLeft : '')
				marginLeftInput.value = ml[0]
				marginLeftSelect.value = ml[1]

				const mt = unitFinder(large.marginTop ? large.marginTop : '')
				marginTopInput.value = mt[0]
				marginTopSelect.value = mt[1]
			} else {
				const w = unitFinder(xlarge.width ? xlarge.width : '')
				widthInput.value = w[0]
				widthSelect.value = w[1]

				const h = unitFinder(xlarge.height ? xlarge.height : '')
				heightInput.value = h[0]
				heightSelect.value = h[1]

				const ml = unitFinder(xlarge.marginLeft ? xlarge.marginLeft : '')
				marginLeftInput.value = ml[0]
				marginLeftSelect.value = ml[1]

				const mt = unitFinder(xlarge.marginTop ? xlarge.marginTop : '')
				marginTopInput.value = mt[0]
				marginTopSelect.value = mt[1]
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const unitFinder = s => {
		return s.search('px') !== -1
			? [s.split('p')[0], 'px']
			: s.search('%') !== -1
			? [s.split('%')[0], '%']
			: s.search('vh') !== -1
			? [s.split('v')[0], 'vh']
			: s.search('vw') !== -1
			? [s.split('v')[0], 'vw']
			: s.search('rem') !== -1
			? [s.split('r')[0], 'rem']
			: s.search('em') !== -1
			? [s.split('e')[0], 'em']
			: ['0', 'px']
	}

	//For width change from input
	useEffect(() => {
		if (small && medium && large && xlarge && widths !== '') {
			const ele = document.getElementById('a-t-ws')

			let wunit = widthUnit
			if (ele) wunit = ele.value

			let changedWidth = `${widths}${wunit}`
			if (widths === '-1') changedWidth = ''

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'width', changedWidth)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'width', changedWidth)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'width', changedWidth)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else {
				setProperties(xlarge, setXlarge, 'width', changedWidth)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
			}
		}
	}, [widths, widthUnit])

	//For height change from input
	useEffect(() => {
		if (small && medium && large && xlarge && heights !== '') {
			const ele = document.getElementById('a-t-hs')

			let hunit = heightUnit
			if (ele) hunit = ele.value

			let changedHeight = `${heights}${hunit}`
			if (heights === '-1') changedHeight = ''

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'height', changedHeight)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'height', changedHeight)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'height', changedHeight)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else {
				setProperties(xlarge, setXlarge, 'height', changedHeight)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
			}
		}
	}, [heights, heightUnit])

	//For margin left change from input
	useEffect(() => {
		if (small && medium && large && xlarge && marginLeft !== '') {
			const ele = document.getElementById('a-t-mlu')

			let munit = mlUnit
			if (ele) munit = ele.value

			const changedmarginLeft = `${marginLeft}${munit}`
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				setChangedLarge(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else {
				setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
				setChangedXlarge(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
			}
		}
	}, [marginLeft, mlUnit])

	//For margin top change from input
	useEffect(() => {
		if (small && medium && large && xlarge && marginTop !== '') {
			const ele = document.getElementById('a-t-mtu')

			let munit = mtUnit
			if (ele) munit = ele.value

			const changedmarginTop = `${marginTop}${munit}`
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'marginTop', changedmarginTop)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else if (width < lBreakPoint) {
				setProperties(large, setLarge, 'marginTop', changedmarginTop)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else {
				setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
			}
		}
	}, [marginTop, mtUnit])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const ele = document.getElementById(activeElement)

	return (
		<div className='w-h borders' style={{ display: ele && ele.tagName === 'LI' ? 'none' : 'grid' }}>
			<p className='second-heading' onClick={() => setShowTransformProperties(!showTransformProperties)}>
				<Tip
					msg={[
						'W controls the width with different units',
						'H controls the height with different units',
						'X controls space on left side with different units',
						'Y controls space on Upper side with different units',
					]}
				/>
				TRANSFORM <span style={{ display: showTransformProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showTransformProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showTransformProperties ? 'grid' : 'none' }} className='one'>
				<div className='w'>
					<label>W : </label>
					<input
						id='a-t-w'
						onChange={e => {
							if (e.target.value < -1) {
								setMsgBoxMsg('W (Width) can not be negative')
								setShowMsgBox(true)
							} else if (e.target.value >= -1) {
								setWidths(e.target.value)
							}
						}}
						type='number'
						min='-1'
						max={widthUnit === '%' ? '100' : ''}
					/>
					<select
						id='a-t-ws'
						onChange={e => {
							if (e.target.value === '%' && widths > 100) setWidths(100)
							setWidthUnit(e.target.value)
						}}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='rem'>REM</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='h'>
					<label>H : </label>
					<input
						id='a-t-h'
						onChange={e => {
							if (e.target.value < -1) {
								setMsgBoxMsg('H (Height) can not be negative')
								setShowMsgBox(true)
							} else if (e.target.value >= -1) {
								setHeights(e.target.value)
							}
						}}
						type='number'
						min='-1'
						max={heightUnit === '%' ? '100' : ''}
					/>
					<select
						id='a-t-hs'
						onChange={e => {
							if (e.target.value === '%' && heights > 100) setHeights(100)
							setHeighthUnit(e.target.value)
						}}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='%'>%</option>
						<option value='rem'>REM</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='x'>
					<label>X : </label>
					<input id='a-t-ml' type='number' onChange={e => setMarginLeft(e.target.value)} />
					<select id='a-t-mlu' onChange={e => setMLUnit(e.target.value)}>
						<option value='em'>EM</option>
						<option value='rem'>REM</option>
						<option value='px'>PX</option>
						<option value='%'>%</option>
					</select>
				</div>
				<div className='y'>
					<label>Y : </label>
					<input id='a-t-mt' type='number' onChange={e => setMarginTop(e.target.value)} />
					<select id='a-t-mtu' onChange={e => setMTUnit(e.target.value)}>
						<option value='em'>EM</option>
						<option value='rem'>REM</option>
						<option value='px'>PX</option>
						<option value='%'>%</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Transform
