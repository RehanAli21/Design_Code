import React, { useState, useContext, useEffect } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'

const InputProperties = ({ width, activeElement }) => {
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
	} = useContext(PropertiesContext)

	const [type, setType] = useState('text')
	const [placeholder, setPlaceholder] = useState('placeholder')
	const [padding, setPadding] = useState('')

	return (
		<div className='borders input-specific'>
			<p className='second-heading'>Input Properties</p>
			<div>
				<label>Type: </label>
				<select onChange={e => setType(e.target.value)}>
					<option value='text'>Text</option>
					<option value='number'>Number</option>
					<option value='email'>Email</option>
					<option value='password'>Password</option>
					<option value='date'>Date</option>
					<option value='color'>Color</option>
					<option value='range'>Range</option>
				</select>
			</div>
			<div>
				<label>Placeholder: </label>
				<input onChange={e => setPlaceholder(e.target.value)} type='text' placeholder='Text' />
			</div>
			<div>
				<label>Inner space: </label>
				<input onChange={e => setPadding(`${e.target.value}px`)} type='number' defaultValue='0' min='0' />
			</div>
		</div>
	)
}

export default InputProperties
