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
	width
}) => {
	const [widthUnit, setWidthUnit] = useState('px')
	const [heightUnit, setHeighthUnit] = useState('px')
	const [widths, setWidths] = useState(`0${widthUnit}`)
	const [heights, setHeights] = useState(`0${heightUnit}`)
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(`0${mlUnit}`)
	const [marginTop, setMarginTop] = useState(`0${mtUnit}`)

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setHWProperty(small, setSmall, 'width', widths)
			} else if (width < 720) {
				setHWProperty(medium, setMedium, 'width', widths)
			} else if (width < 970) {
				setHWProperty(large, setLarge, 'width', widths)
			} else {
				setHWProperty(xlarge, setXlarge, 'width', widths)
			}
		}
	}, [widths, widthUnit])

	useEffect(() => {
		console.log(widths)
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setHWProperty(small, setSmall, 'height', heights)
			} else if (width < 720) {
				setHWProperty(medium, setMedium, 'height', heights)
			} else if (width < 970) {
				setHWProperty(large, setLarge, 'height', heights)
			} else {
				setHWProperty(xlarge, setXlarge, 'height', heights)
			}
		}
	}, [heights, heightUnit])

	const setHWProperty = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='w-h borders'>
			<p className='second-heading'>TRANSFORM</p>
			<div className='one'>
				<div className='w'>
					<label>W : </label>
					<input
						onChange={e =>
							setWidths(`${e.target.value}${widthUnit}`)
						}
						type='number'
						defaultValue='0'
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
						onChange={e =>
							setHeights(`${e.target.value}${heightUnit}`)
						}
						type='number'
						defaultValue='0'
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
						onChange={e =>
							setMarginLeft(`${e.target.value}${mlUnit}`)
						}
						type='number'
						defaultValue='0'
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
						onChange={e =>
							setMarginTop(`${e.target.value}${mtUnit}`)
						}
						type='number'
						defaultValue='0'
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
