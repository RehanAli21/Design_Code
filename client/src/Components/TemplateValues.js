import React, { useState, useContext, useEffect } from 'react'
import { TemplateContext } from './Contexts/TemplateContext'

const TemplateValues = () => {
	const { setColors, setFontSizes, setFonts, showTemplate, setShowTemplate } = useContext(TemplateContext)

	const [fontNum, setFontNum] = useState(0)
	const [colorNum, setColorNum] = useState(0)
	const [fontSizeNum, setFontSizeNum] = useState(0)
	const [colorValue, setColoValue] = useState([
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
	])
	const [fontValue, setFontValue] = useState([
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
		['', ''],
	])
	const [fontNames, setFontNames] = useState(['', '', '', '', ''])

	useEffect(() => {
		const temp = {}
		for (let i = 0; i < colorNum; i++) {
			if (colorValue[i][1] !== '' && colorValue[i][0] !== '') temp[colorValue[i][1]] = colorValue[i][0]
		}
		setColors(temp)
	}, [colorValue, colorNum])

	useEffect(() => {
		const temp = {}
		for (let i = 0; i < fontSizeNum; i++) {
			if (fontValue[i][1] !== '' && fontValue[i][0] !== '') temp[fontValue[i][1]] = fontValue[i][0]
		}
		setFontSizes(temp)
	}, [fontValue, fontSizeNum])

	useEffect(() => {
		const temp = []
		for (let i = 0; i < fontNum; i++) {
			if (fontNames[i] !== '') temp.push(fontNames[i])
		}
		setFonts(temp)
	}, [fontNames, fontNum])

	const changeColorColor = (e, i) => {
		const temp = []
		colorValue.forEach(e => temp.push(e))
		temp[i][0] = e.target.value
		setColoValue(temp)
	}

	const changeColorName = (e, i) => {
		const temp = []
		colorValue.forEach(e => temp.push(e))
		temp[i][1] = e.target.value
		setColoValue(temp)
	}

	const showColorsOption = () => {
		const temp = []

		for (let i = 0; i < colorNum; i++) {
			temp.push(
				<div key={i} className='colorinputs'>
					<input type='color' onChange={e => changeColorColor(e, i)} />
					<input type='text' placeholder='Color Name' onChange={e => changeColorName(e, i)} />
				</div>
			)
		}
		return temp
	}

	const changeFontSize = (e, i) => {
		const temp = []
		fontValue.forEach(e => temp.push(e))
		temp[i][0] = `${e.target.value}px`
		setFontValue(temp)
	}

	const changeFontName = (e, i) => {
		const temp = []
		fontValue.forEach(e => temp.push(e))
		temp[i][1] = e.target.value
		setFontValue(temp)
	}

	const showFontSizesOptions = () => {
		const temp = []

		for (let i = 0; i < fontSizeNum; i++) {
			temp.push(
				<div key={i} className='fontSizeinputs'>
					<input type='number' onChange={e => changeFontSize(e, i)} />
					<input type='text' placeholder='FontSize Name' onChange={e => changeFontName(e, i)} />
				</div>
			)
		}

		return temp
	}

	const changeFontNames = (e, i) => {
		const temp = []
		fontNames.forEach(e => temp.push(e))
		temp[i] = e.target.value
		setFontNames(temp)
	}

	const showFontsOptions = () => {
		const temp = []

		for (let i = 0; i < fontNum; i++) {
			temp.push(
				<div key={i} className='fontinputs'>
					<input type='text' placeholder='Enter Font Name...' onChange={e => changeFontNames(e, i)} />
				</div>
			)
		}

		return temp
	}

	return (
		<div style={{ display: showTemplate ? 'block' : 'none' }} className='templateComp'>
			<button onClick={() => setShowTemplate(false)}>Done</button>
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
							onChange={e => setColorNum(e.target.value > 10 ? 10 : e.target.value)}
						/>
					</div>
					<div className='two'>{showColorsOption()}</div>
				</div>
				<div className='t-fonts'>
					<div className='one'>
						<label>Number of Fonts: </label>
						<input
							defaultValue='0'
							min='0'
							max='5'
							type='number'
							id='t-f-Numinput'
							onChange={e => setFontNum(e.target.value > 5 ? 5 : e.target.value)}
						/>
					</div>
					<div className='one'>{showFontsOptions()}</div>
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
							onChange={e => setFontSizeNum(e.target.value > 10 ? 10 : e.target.value)}
						/>
					</div>
					<div className='two'>{showFontSizesOptions()}</div>
				</div>
			</div>
		</div>
	)
}

export default TemplateValues
