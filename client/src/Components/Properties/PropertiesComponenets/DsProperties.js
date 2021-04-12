import React from 'react'

const DsProperties = () => {
	return (
		<div className='btn-specific'>
			<p className='second-heading'>EXTRA</p>
			<div className='two'>
				<label>Origin:</label>
				<select>
					<option value='center'>Center</option>
					<option value='left'>Left</option>
					<option value='right'>Right</option>
					<option value='top'>Top</option>
					<option value='bottom'>Bottom</option>
				</select>
			</div>
			<div className='two'>
				<label>ScaleX: </label>
				<input min='0' step='0.1' className='numberinput' type='number' placeholder='ScaleX' />
			</div>
			<div className='two'>
				<label>ScaleY: </label>
				<input min='0' step='0.1' className='numberinput' type='number' placeholder='ScaleY' />
			</div>
			<div className='two'>
				<label>Rotate: </label>
				<input min='0' max='360' className='numberinput' type='number' placeholder='RotateX' />
			</div>
			<div className='two'>
				<label>TranslateX: </label>
				<input min='0' className='numberinput' type='number' placeholder='TranslateX' />
			</div>
			<div className='two'>
				<label>TranslateY: </label>
				<input min='0' className='numberinput' type='number' placeholder='TranslateY' />
			</div>
		</div>
	)
}

export default DsProperties
