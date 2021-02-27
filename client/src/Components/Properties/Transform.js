import React, { useEffect, useState } from 'react'

const Transform = ({
	small,
	setSmall,
	medium,
	setMedium,
	large,
	setLarge,
	xlarge,
	setXlarge,
	width,
	activeElement
}) => {
	const [widthUnit, setWidthUnit] = useState('px')
	const [heightUnit, setHeighthUnit] = useState('px')
	const [widths, setWidths] = useState(`0`)
	const [heights, setHeights] = useState(`0`)
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(`0`)
	const [marginTop, setMarginTop] = useState(`0`)

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const widthInput = document.getElementById('a-t-w')
			const heightInput = document.getElementById('a-t-h')
			const marginLeftInput = document.getElementById('a-t-ml')
			const marginTopInput = document.getElementById('a-t-mt')

			if (width < 540) {
				widthInput.value = small.width
					? small.width.replace(/[^\d.-]/g, '')
					: '0'
				heightInput.value = small.height
					? small.height.replace(/[^\d.-]/g, '')
					: '0'
				marginLeftInput.value = small.marginLeft
					? small.marginLeft.replace(/[^\d.-]/g, '')
					: '0'
				marginTopInput.value = small.marginTop
					? small.marginTop.replace(/[^\d.-]/g, '')
					: '0'
			} else if (width < 720) {
				widthInput.value = medium.width
					? medium.width.replace(/[^\d.-]/g, '')
					: '0'
				heightInput.value = medium.height
					? medium.height.replace(/[^\d.-]/g, '')
					: '0'
				marginLeftInput.value = medium.marginLeft
					? medium.marginLeft.replace(/[^\d.-]/g, '')
					: '0'
				marginTopInput.value = medium.marginTop
					? medium.marginTop.replace(/[^\d.-]/g, '')
					: '0'
			} else if (width < 970) {
				widthInput.value = large.width
					? large.width.replace(/[^\d.-]/g, '')
					: '0'
				heightInput.value = large.height
					? large.height.replace(/[^\d.-]/g, '')
					: '0'
				marginLeftInput.value = large.marginLeft
					? large.marginLeft.replace(/[^\d.-]/g, '')
					: '0'
				marginTopInput.value = large.marginTop
					? large.marginTop.replace(/[^\d.-]/g, '')
					: '0'
			} else {
				widthInput.value = xlarge.width
					? xlarge.width.replace(/[^\d.-]/g, '')
					: '0'
				heightInput.value = xlarge.height
					? xlarge.height.replace(/[^\d.-]/g, '')
					: '0'
				marginLeftInput.value = xlarge.marginLeft
					? xlarge.marginLeft.replace(/[^\d.-]/g, '')
					: '0'
				marginTopInput.value = xlarge.marginTop
					? xlarge.marginTop.replace(/[^\d.-]/g, '')
					: '0'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedWidth = `${widths}${widthUnit}`
			if (width < 540) {
				setHWProperty(small, setSmall, 'width', changedWidth)
			} else if (width < 720) {
				setHWProperty(medium, setMedium, 'width', changedWidth)
			} else if (width < 970) {
				setHWProperty(large, setLarge, 'width', changedWidth)
			} else {
				setHWProperty(xlarge, setXlarge, 'width', changedWidth)
			}
		}
	}, [widths, widthUnit])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedHeight = `${heights}${heightUnit}`
			if (width < 540) {
				setHWProperty(small, setSmall, 'height', changedHeight)
			} else if (width < 720) {
				setHWProperty(medium, setMedium, 'height', changedHeight)
			} else if (width < 970) {
				setHWProperty(large, setLarge, 'height', changedHeight)
			} else {
				setHWProperty(xlarge, setXlarge, 'height', changedHeight)
			}
		}
	}, [heights, heightUnit])

	const setHWProperty = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const geta = (obj, property) => {
		if (obj[property]) obj[property].replace(/[^\d.-]/g, '')
	}

	return (
		<div className='w-h borders'>
			<p className='second-heading'>TRANSFORM</p>
			<div className='one'>
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
						onChange={e =>
							setWidthUnit(e.target.value.toLowerCase())
						}>
						<option>PX</option>
						<option>%</option>
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
						onChange={e =>
							setHeighthUnit(e.target.value.toLowerCase())
						}>
						<option>PX</option>
						<option>VH</option>
						<option>%</option>
					</select>
				</div>
				<div className='x'>
					<label>X : </label>
					<input
						id='a-t-ml'
						onChange={e => setMarginLeft(e.target.value)}
						type='number'
						min='0'
					/>
					<select
						onChange={e => setMLUnit(e.target.value.toLowerCase())}>
						<option>EM</option>
						<option>REM</option>
						<option>PX</option>
					</select>
				</div>
				<div className='y'>
					<label>Y : </label>
					<input
						id='a-t-mt'
						onChange={e => setMarginTop(e.target.value)}
						type='number'
						min='0'
					/>
					<select
						onChange={e => setMTUnit(e.target.value.toLowerCase())}>
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
