import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { PageContext } from '../../Contexts/PageContext'

const DsProperties = () => {
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)

	const [scaleX, setScaleX] = useState('')
	const [scaleY, setScaleY] = useState('')
	const [rotate, setRotate] = useState('')
	const [translateX, setTranslateX] = useState('')
	const [translateY, setTranslateY] = useState('')

	return (
		<div className='btn-specific'>
			<p className='second-heading'>EXTRA</p>
			<div className='two'>
				<label>ScaleX: </label>
				<input
					id='extra-scaleX'
					min='0'
					step='0.1'
					className='numberinput'
					type='number'
					placeholder='ScaleX'
					onChange={e => setScaleX(e.target.value)}
				/>
			</div>
			<div className='two'>
				<label>ScaleY: </label>
				<input
					id='extra-scaleY'
					min='0'
					step='0.1'
					className='numberinput'
					type='number'
					placeholder='ScaleY'
					onChange={e => setScaleY(e.target.value)}
				/>
			</div>
			<div className='two'>
				<label>Rotate: </label>
				<input
					id='extra-rotate'
					min='0'
					max='360'
					className='numberinput'
					type='number'
					placeholder='RotateX'
					onChange={e => setRotate(`${e.target.value > 360 ? 360 : e.target.value}deg`)}
				/>
			</div>
			<div className='two'>
				<label>TranslateX: </label>
				<input
					id='extra-translateX'
					min='0'
					className='numberinput'
					type='number'
					placeholder='TranslateX'
					onChange={e => setTranslateX(`${e.target.value}px`)}
				/>
			</div>
			<div className='two'>
				<label>TranslateY: </label>
				<input
					id='extra-translateY'
					min='0'
					className='numberinput'
					type='number'
					placeholder='TranslateY'
					onChange={e => setTranslateY(`${e.target.value}px`)}
				/>
			</div>
		</div>
	)
}

export default DsProperties
