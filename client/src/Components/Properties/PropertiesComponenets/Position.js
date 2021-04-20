import React from 'react'

const Position = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>POSITIONS</p>
			<div className='two'>
				<label>Positions</label>
				<select id='pos-input'>
					<option value='static'>Static</option>
					<option value='static'>Relative</option>
					<option value='fixed'>Fixed</option>
					<option value='sticky'>Sticky</option>
					<option value='absolute'>Absolute</option>
				</select>
			</div>
			<div className='three'>
				<label>Top: </label>
				<input id='pos-top-input' type='number' className='numberinput' />
				<select id='pos-top-select'>
					<option value='px'>PX</option>
					<option value='vh'>VH</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
				<label>Bottom: </label>
				<input id='pos-bottom-input' type='number' className='numberinput' />
				<select id='pos-bottom-select'>
					<option value='px'>PX</option>
					<option value='vh'>VH</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
				<label>Left: </label>
				<input id='pos-left-input' type='number' className='numberinput' />
				<select id='pos-left-select'>
					<option value='px'>PX</option>
					<option value='vw'>VW</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='three'>
				<label>Right: </label>
				<input id='pos-right-input' type='number' className='numberinput' />
				<select id='pos-right-select'>
					<option value='px'>PX</option>
					<option value='vw'>VW</option>
					<option value='%'>%</option>
					<option value='em'>EM</option>
				</select>
			</div>
			<div className='two'>
				<label>Z-Index: </label>
				<input id='pos-index-input' type='number' className='numberinput' defaultValue='0' />
			</div>
		</div>
	)
}

export default Position
