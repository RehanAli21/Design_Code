import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

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
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

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
				widthInput.value = small.width ? small.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = small.height ? small.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = small.marginLeft ? small.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = small.marginTop ? small.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.value = small.width ? widthUnitFinder(small.width) : 'px'
				heightSelect.value = small.height ? heightUnitFinder(small.height) : 'px'
				marginLeftSelect.value = small.marginLeft ? marginUnitFinder(small.marginLeft) : 'em'
				marginTopSelect.value = small.marginTop ? marginUnitFinder(small.marginTop) : 'em'
			} else if (width < mBreakPoint) {
				widthInput.value = medium.width ? medium.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = medium.height ? medium.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = medium.marginLeft ? medium.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = medium.marginTop ? medium.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.value = medium.width ? widthUnitFinder(medium.width) : 'px'
				heightSelect.value = medium.height ? heightUnitFinder(medium.height) : 'px'
				marginLeftSelect.value = medium.marginLeft ? marginUnitFinder(medium.marginLeft) : 'em'
				marginTopSelect.value = medium.marginTop ? marginUnitFinder(medium.marginTop) : 'em'
			} else if (width < lBreakPoint) {
				widthInput.value = large.width ? large.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = large.height ? large.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = large.marginLeft ? large.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = large.marginTop ? large.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.value = large.width ? widthUnitFinder(large.width) : 'px'
				heightSelect.value = large.height ? heightUnitFinder(large.height) : 'px'
				marginLeftSelect.value = large.marginLeft ? marginUnitFinder(large.marginLeft) : 'em'
				marginTopSelect.value = large.marginTop ? marginUnitFinder(large.marginTop) : 'em'
			} else {
				widthInput.value = xlarge.width ? xlarge.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = xlarge.height ? xlarge.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = xlarge.marginLeft ? xlarge.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = xlarge.marginTop ? xlarge.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.value = xlarge.width ? widthUnitFinder(xlarge.width) : 'px'
				heightSelect.value = xlarge.height ? heightUnitFinder(xlarge.height) : 'px'
				marginLeftSelect.value = xlarge.marginLeft ? marginUnitFinder(xlarge.marginLeft) : 'em'
				marginTopSelect.value = xlarge.marginTop ? marginUnitFinder(xlarge.marginTop) : 'em'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const widthUnitFinder = s =>
		s.search('px') !== -1 ? 'px' : s.search('%') !== -1 ? '%' : s.search('rem') !== -1 ? 'rem' : 'em'

	const heightUnitFinder = s =>
		s.search('px') !== -1
			? 'px'
			: s.search('vh') !== -1
			? 'vh'
			: s.search('%') !== -1
			? '%'
			: s.search('rem') !== -1
			? 'rem'
			: 'em'

	const marginUnitFinder = s => (s.search('rem') !== -1 ? 'rem' : s.search('em') !== -1 ? 'em' : 'px')

	//For width change from input
	useEffect(() => {
		if (small && medium && large && xlarge && widths !== '') {
			const changedWidth = `${widths}${widthUnit}`
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
			const changedHeight = `${heights}${heightUnit}`
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
			const changedmarginLeft = `${marginLeft}${mlUnit}`
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
			const changedmarginTop = `${marginTop}${mtUnit}`
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
				TRANSFORM <span style={{ display: showTransformProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showTransformProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showTransformProperties ? 'grid' : 'none' }} className='one'>
				<div className='w'>
					<label>W : </label>
					<input
						id='a-t-w'
						onChange={e => setWidths(e.target.value)}
						type='number'
						min='0'
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
						onChange={e => setHeights(e.target.value)}
						type='number'
						min='0'
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
					<input id='a-t-ml' onChange={e => setMarginLeft(e.target.value)} type='number' min='0' />
					<select id='a-t-mlu' onChange={e => setMLUnit(e.target.value)}>
						<option value='em'>EM</option>
						<option value='rem'>REM</option>
						<option value='px'>PX</option>
					</select>
				</div>
				<div className='y'>
					<label>Y : </label>
					<input id='a-t-mt' onChange={e => setMarginTop(e.target.value)} type='number' min='0' />
					<select id='a-t-mtu' onChange={e => setMTUnit(e.target.value)}>
						<option value='em'>EM</option>
						<option value='rem'>REM</option>
						<option value='px'>PX</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Transform
