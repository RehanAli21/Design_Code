import React, { useContext, useState } from 'react'
import { TemplateContext } from '../../Contexts/TemplateContext'

const HoverPropertiesOne = () => {
	const { colors } = useContext(TemplateContext)

	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)

	const showTemplateColors = () => {
		const temp = []
		temp.push(
			<option key='custom' value='custom'>
				Custom
			</option>
		)
		for (const key in colors) {
			temp.push(
				<option key={key} value={colors[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				defaultValue='custom'
				id='input-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	return (
		<div className='btn-specific'>
			<div className='three'>
				<label style={{ marginTop: '5px' }}>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='input-textcolor'
				/>
			</div>
			<div className='two'></div>
		</div>
	)
}

export default HoverPropertiesOne
