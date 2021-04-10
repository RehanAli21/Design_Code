import React from 'react'

const Filter = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Filters</p>
			<div className='two'>
				<label>Brightness:</label>
				<input type='range' min='0' max='200' defaultValue='100' />
			</div>
			<div className='two'>
				<label>Contrast:</label>
				<input type='range' min='0' max='200' defaultValue='100' />
			</div>
			<div className='two'>
				<label>Blur: </label>
				<input type='range' min='0' max='10' defaultValue='0' />
			</div>
			<div className='two'>
				<label>GrayScale: </label>
				<input type='range' min='0' max='100' defaultValue='0' />
			</div>
			<div className='two'>
				<label>Hue: </label>
				<input type='range' min='0' max='360' defaultValue='0' />
			</div>
			<div className='two'>
				<label>Saturation:</label>
				<input type='range' min='0' max='200' defaultValue='100' />
			</div>
			<div className='two'>
				<label>Sepia: </label>
				<input type='range' min='0' max='100' defaultValue='0' />
			</div>
		</div>
	)
}

export default Filter
