import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const BreakPoint = () => {
	const {
		showBreakPoint,
		setShowBreakPoint,
		sBreakPoint,
		setSBreakPoint,
		mBreakPoint,
		setMBreakPoint,
		lBreakPoint,
		setLBreakPoint,
		setHeight,
	} = useContext(PageContext)

	const setSmall = value => {
		if (value < mBreakPoint && value < lBreakPoint) {
			setSBreakPoint(value)
		}
	}

	const setMedium = value => {
		if (value > sBreakPoint && value < lBreakPoint) {
			setMBreakPoint(value)
		}
	}

	const setLarge = value => {
		if (value > sBreakPoint && value > mBreakPoint && value <= 1500) {
			setLBreakPoint(value)
		}
	}

	return (
		<div className='breakpoint' style={{ display: showBreakPoint ? 'block' : 'none' }}>
			<h1>Responsive BreakPoints for pages</h1>
			<button onClick={() => setShowBreakPoint(!showBreakPoint)}>Done</button>
			<div className='two'>
				<label>Small: </label>
				<input onChange={e => setSmall(e.target.value)} type='number' min='0' max={mBreakPoint - 1} defaultValue='540' />
			</div>
			<div className='two'>
				<label>Medium: </label>
				<input
					onChange={e => setMedium(e.target.value)}
					type='number'
					min={sBreakPoint + 1}
					max={lBreakPoint - 1}
					defaultValue='720'
				/>
			</div>
			<div className='two'>
				<label>Large: </label>
				<input
					onChange={e => setLarge(e.target.value)}
					type='number'
					min={mBreakPoint + 1}
					max='1500'
					defaultValue='970'
				/>
			</div>
			<h2 style={{ marginTop: '50px' }}>Height of Page</h2>
			<div className='two'>
				<label>Height: </label>
				<input onChange={e => setHeight(e.target.value)} type='number' min='200' defaultValue='500' />
			</div>
		</div>
	)
}

export default BreakPoint
