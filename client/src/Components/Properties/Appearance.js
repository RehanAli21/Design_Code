import React, { useState } from 'react'

const Appearance = () => {
	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	return (
		<div className='ap borders'>
			<p className='second-heading'>APPEARANCE</p>
			<div>
				<div className='two md'>
					<label>Color: </label>
					<input type='color' defaultValue='#ffffff' />
				</div>
				<div className='one md'>
					<label>Opacity: </label>
					<input type='range' defaultValue='1' min='0' max='1' />
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
								<input type='color' defaultValue='#464646' />
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
