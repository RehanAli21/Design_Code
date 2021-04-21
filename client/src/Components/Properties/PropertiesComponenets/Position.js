import React, { useState } from 'react'

const Position = () => {
	const [postion, setPosition] = useState('')
	const [top, setTop] = useState('')
	const [topUnit, setTopUnit] = useState('')
	const [bottom, setBottom] = useState('')
	const [bottomUnit, setBottomUnit] = useState('')
	const [left, setLeft] = useState('')
	const [leftUnit, setLeftUnit] = useState('')
	const [right, setRight] = useState('')
	const [rightUnit, setRightUnit] = useState('')
	const [zIndex, setZIndex] = useState('')

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>POSITIONS</p>
			<div className='two'>
				<label>Positions</label>
				<select onChange={e => setPosition(e.target.value)} id='pos-input'>
					<option value='static'>Static</option>
					<option value='static'>Relative</option>
					<option value='fixed'>Fixed</option>
					<option value='sticky'>Sticky</option>
					<option value='absolute'>Absolute</option>
				</select>
			</div>
			<div className='three'>
				<label>Top: </label>
				<input onChange={e => setTop(e.target.value)} id='pos-top-input' type='number' className='numberinput' />
				<select onChange={e => setTopUnit(e.target.value)} id='pos-top-select'>
					<option value='px'>PX</option>
					<option value='vh'>VH</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
				<label>Bottom: </label>
				<input onChange={e => setBottom(e.target.value)} id='pos-bottom-input' type='number' className='numberinput' />
				<select onChange={e => setBottomUnit(e.target.value)} id='pos-bottom-select'>
					<option value='px'>PX</option>
					<option value='vh'>VH</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
				<label>Left: </label>
				<input onChange={e => setLeft(e.target.value)} id='pos-left-input' type='number' className='numberinput' />
				<select onChange={e => setLeftUnit(e.target.value)} id='pos-left-select'>
					<option value='px'>PX</option>
					<option value='vw'>VW</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
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
	)
}

export default Position
