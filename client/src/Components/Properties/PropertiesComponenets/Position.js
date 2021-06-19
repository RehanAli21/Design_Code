import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import Tip from './Tip'

const Position = () => {
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
		showPositionProperties,
		setShowPositionProperties,
	} = useContext(PropertiesContext)
	const { width, pages, setPages, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowPositionProperties(!showPositionProperties)}>
				<Tip msg={['Position for applying different positions', 'Z-Index for bring element forword or backword']} />
				POSITIONS <span style={{ display: showPositionProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showPositionProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='two'>
				<label>Position</label>
				<select>
					<option value='static'>Normal</option>
					<option value='absolute'>Free (Page)</option>
					<option value='fp'>Free (Parent)</option>
					<option value='sticky'>Sticky (Page)</option>
					<option value='fixed'>Sticky (Parent)</option>
				</select>
			</div>
			<div className='two'>
				<label>Z-index: </label>
				<input type='number' className='numberinput' defaultValue='0' />
			</div>
			<div className='btn-specific'>
				<div className='three'>
					<label>
						<i className='bi-code'></i> X:
					</label>
					<input type='number' className='numberinput' defaultValue='0' />
					<select>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='three'>
					<label>
						<i className='bi-chevron-expand'></i>Y:
					</label>
					<input type='number' className='numberinput' defaultValue='0' />
					<select>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Position
