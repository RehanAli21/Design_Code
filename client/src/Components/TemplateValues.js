import React, { useState } from 'react'

const TemplateValues = () => {
	const [colorNum, setColorNum] = useState(0)
	const [fontSizeNum, setFontSizeNum] = useState(0)

	const showColorsOption = () => {
		const temp = []

		for (let i = 0; i < colorNum; i++) {
			temp.push(
				<div key={i} className='colorinputs'>
					<input type='color' />
					<input type='text' placeholder='Color Name' />
				</div>
			)
		}
		return temp
	}

	const showFontsOptions = () => {
		const temp = []

		for (let i = 0; i < fontSizeNum; i++) {
			temp.push(
				<div key={i} className='fontinputs'>
					<input type='number' />
					<input type='text' placeholder='FontSize Name' />
				</div>
			)
		}

		return temp
	}

	return (
		<div className='templateComp'>
			<h1>Create Template Values</h1>
			<div>
				<div className='t-colors'>
					<div className='one'>
						<label>Number of Colors: </label>
						<input
							defaultValue='0'
							min='0'
							max='10'
							type='number'
							id='t-c-Numinput'
							onChange={e => setColorNum(e.target.value)}
						/>
					</div>
					<div className='two'>{showColorsOption()}</div>
				</div>
				<div className='t-fontSizes'>
					<div className='one'>
						<label>Number of Font Sizes: </label>
						<input
							defaultValue='0'
							min='0'
							max='10'
							type='number'
							id='t-f-Numinput'
							onChange={e => setFontSizeNum(e.target.value)}
						/>
					</div>
					<div className='two'>{showFontsOptions()}</div>
				</div>
			</div>
		</div>
	)
}

export default TemplateValues
