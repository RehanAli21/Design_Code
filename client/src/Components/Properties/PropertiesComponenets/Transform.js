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
	const [widths, setWidths] = useState(`0`)
	const [heights, setHeights] = useState(`0`)
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(`0`)
	const [marginTop, setMarginTop] = useState(`0`)

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

				widthSelect.selectedIndex = small.width ? widthTypeIndex(small.width) : 0
				heightSelect.selectedIndex = small.height ? heightTypeIndex(small.height) : 0
				marginLeftSelect.selectedIndex = small.marginLeft ? marginLeftTypeIndex(small.marginLeft) : 0
				marginTopSelect.selectedIndex = small.marginTop ? marginTopTypeIndex(small.marginTop) : 0
			} else if (width < mBreakPoint) {
				widthInput.value = medium.width ? medium.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = medium.height ? medium.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = medium.marginLeft ? medium.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = medium.marginTop ? medium.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.selectedIndex = medium.width ? widthTypeIndex(medium.width) : 0
				heightSelect.selectedIndex = medium.height ? heightTypeIndex(medium.height) : 0
				marginLeftSelect.selectedIndex = medium.marginLeft ? marginLeftTypeIndex(medium.marginLeft) : 0
				marginTopSelect.selectedIndex = medium.marginTop ? marginTopTypeIndex(medium.marginTop) : 0
			} else if (width < lBreakPoint) {
				widthInput.value = large.width ? large.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = large.height ? large.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = large.marginLeft ? large.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = large.marginTop ? large.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.selectedIndex = large.width ? widthTypeIndex(large.width) : 0
				heightSelect.selectedIndex = large.height ? heightTypeIndex(large.height) : 0
				marginLeftSelect.selectedIndex = large.marginLeft ? marginLeftTypeIndex(large.marginLeft) : 0
				marginTopSelect.selectedIndex = large.marginTop ? marginTopTypeIndex(large.marginTop) : 0
			} else {
				widthInput.value = xlarge.width ? xlarge.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = xlarge.height ? xlarge.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = xlarge.marginLeft ? xlarge.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = xlarge.marginTop ? xlarge.marginTop.replace(/[^\d.-]/g, '') : '0'

				widthSelect.selectedIndex = xlarge.width ? widthTypeIndex(xlarge.width) : 0
				heightSelect.selectedIndex = xlarge.height ? heightTypeIndex(xlarge.height) : 0
				marginLeftSelect.selectedIndex = xlarge.marginLeft ? marginLeftTypeIndex(xlarge.marginLeft) : 0
				marginTopSelect.selectedIndex = xlarge.marginTop ? marginTopTypeIndex(xlarge.marginTop) : 0
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const widthTypeIndex = s => {
		return s.search('px') !== -1 ? 0 : s.search('%') !== -1 ? 1 : s.search('rem') !== -1 ? 2 : 3
	}
	const heightTypeIndex = s => {
		return s.search('px') !== -1 ? 0 : s.search('vh') !== -1 ? 1 : s.search('%') !== -1 ? 2 : s.search('rem') !== -1 ? 3 : 4
	}
	const marginLeftTypeIndex = s => {
		return s.search('em') !== -1 ? 0 : s.search('rem') !== -1 ? 1 : 2
	}
	const marginTopTypeIndex = s => {
		return s.search('em') !== -1 ? 0 : s.search('rem') !== -1 ? 1 : 2
	}

	//For width change from input
	useEffect(() => {
		if (small && medium && large && xlarge) {
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
		if (small && medium && large && xlarge) {
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
		if (small && medium && large && xlarge) {
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
		if (small && medium && large && xlarge) {
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
							setWidthUnit(e.target.value.toLowerCase())
						}}>
						<option>PX</option>
						<option>%</option>
						<option>REM</option>
						<option>EM</option>
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
							setHeighthUnit(e.target.value.toLowerCase())
						}}>
						<option>PX</option>
						<option>VH</option>
						<option>%</option>
						<option>REM</option>
						<option>EM</option>
					</select>
				</div>
				<div className='x'>
					<label>X : </label>
					<input id='a-t-ml' onChange={e => setMarginLeft(e.target.value)} type='number' min='0' />
					<select id='a-t-mlu' onChange={e => setMLUnit(e.target.value.toLowerCase())}>
						<option>EM</option>
						<option>REM</option>
						<option>PX</option>
					</select>
				</div>
				<div className='y'>
					<label>Y : </label>
					<input id='a-t-mt' onChange={e => setMarginTop(e.target.value)} type='number' min='0' />
					<select id='a-t-mtu' onChange={e => setMTUnit(e.target.value.toLowerCase())}>
						<option>EM</option>
						<option>REM</option>
						<option>PX</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Transform
