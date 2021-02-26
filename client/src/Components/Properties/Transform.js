import React, { useState } from 'react'

const Transform = () => {
	const [width, setWidth] = useState('30px')
	const [height, setHeight] = useState('30px')
	const [widthUnit, setWidthUnit] = useState('px')
	const [heightUnit, setHeighthUnit] = useState('px')
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(`0em`)
	const [marginTop, setMarginTop] = useState(`0em`)

	return (
		<div className='w-h borders'>
			<p className='second-heading'>TRANSFORM</p>
			<div className='one'>
				<div className='w'>
					<label>W : </label>
					<input
						onChange={e =>
							setWidth(`${e.target.value}${widthUnit}`)
						}
						type='number'
						defaultValue='30'
					/>
					<select
						onChange={e =>
							setWidthUnit(e.target.value.toLowerCase())
						}>
						<option>PX</option>
						<option>VW</option>
					</select>
				</div>
				<div className='h'>
					<label>H : </label>
					<input
						onChange={e =>
							setHeight(`${e.target.value}${heightUnit}`)
						}
						type='number'
						defaultValue='30'
					/>
					<select
						onChange={e =>
							setHeighthUnit(e.target.value.toLowerCase())
						}>
						<option>PX</option>
						<option>VH</option>
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
