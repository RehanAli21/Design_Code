import React, { useState } from 'react'

const Appearance = () => {
	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [bgColor, setBgColor] = useState(`rgb(255, 255, 255, ${opacity})`)
	const [bColor, setBColor] = useState('rgb(70,70,70)')
	const [bSize, setBSize] = useState(1)
	const [bRadius, setBRdius] = useState('1px')
	const [bType, setBtype] = useState('solid')
	const [border, setBorder] = useState('none')
	const [shadow, setShadow] = useState('none')

	const hexToRGB = (hex, o) => {
		let hex_color = hex.replace('#', ''),
			r = parseInt(hex_color.substring(0, 2), 16),
			g = parseInt(hex_color.substring(2, 4), 16),
			b = parseInt(hex_color.substring(4, 6), 16)

		return `rgba(${r},${g},${b},${o})`
	}

	return (
		<div className='ap borders'>
			<p className='second-heading'>APPEARANCE</p>
			<div>
				<div className='two md'>
					<label>Color: </label>
					<input
						onChange={e =>
							setBgColor(hexToRGB(e.target.value, opacity))
						}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='one md'>
					<label>Opacity: </label>
					<input
						step='0.1'
						type='range'
						defaultValue='1'
						min='0'
						max='1'
					/>
				</div>
				<div className='ap-borders md'>
					<input
						type='checkbox'
						onChange={() =>
							setShowBorderSection(!showBorderSection)
						}
					/>
					<span>Border</span>
					<div
						style={{
							display: showBorderSection ? 'block' : 'none'
						}}
						className='b'>
						<div className='two'>
							<div className='mds'>
								<label>Color: </label>
								<input
									onChange={e =>
										setBColor(hexToRGB(e.target.value, 1))
									}
									type='color'
									defaultValue='#464646'
								/>
							</div>
							<div className='mds'>
								<label>Size: </label>
								<input type='number' defaultValue='1' min='0' />
							</div>
							<div className='mds'>
								<label>Radius: </label>
								<input type='number' defaultValue='1' min='0' />
							</div>
							<div className='mds'>
								<label>Type: </label>
								<select>
									<option>solid</option>
									<option>inset</option>
									<option>outset</option>
									<option>ridge</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className='shadow'>
					<input
						type='checkbox'
						onChange={() =>
							setShowShadowSection(!showShadowSection)
						}
					/>
					<span>Shadow</span>
					<div
						style={{
							display: showShadowSection ? 'block' : 'none'
						}}
						className='one'>
						<div>
							<label>X: </label>
							<input type='number' min='0' defaultValue='0' />
						</div>
						<div>
							<label>Y: </label>
							<input type='number' min='0' defaultValue='0' />
						</div>
						<div>
							<label>B: </label>
							<input type='number' min='0' defaultValue='0' />
						</div>
						<div>
							<label>C: </label>
							<input type='color' defaultValue='#464646' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Appearance
