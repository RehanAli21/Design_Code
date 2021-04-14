import React from 'react'

const BreakPoint = () => {
	return (
		<div className='breakpoint'>
			<h1>Responsive BreakPoints for pages</h1>
			<button>Done</button>
			<div className='two'>
				<label>Small: </label>
				<input type='number' defaultValue='540' />
			</div>
			<div className='two'>
				<label>Medium: </label>
				<input type='number' defaultValue='720' />
			</div>
			<div className='two'>
				<label>Large: </label>
				<input type='number' defaultValue='970' />
			</div>
		</div>
	)
}

export default BreakPoint
