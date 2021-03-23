import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ButtonProperties = () => {
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
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)

	const [text, setText] = useState('')

	//For setting default values of button text
	useEffect(() => {
		const textInput = document.getElementById('btn-textInput')
		const value = findAndReturnText(pages[activePage])
		if (value && textInput) {
			textInput.value = value
		}
	})
	//for find element and return button text
	const findAndReturnText = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				return arr[i][1].text
			} else if (arr[i][2]) {
				findAndReturnText(arr[i][2])
			}
		}
	}

	//For text change of button
	useEffect(() => {
		if (text !== '') {
			const temp = Object.assign({}, pages)
			findAndChange(temp[activePage], 'text', text)
			setPages(temp)
		}
	}, [text])

	//For finding element and changing attribute value
	const findAndChange = (arr, attribute, changedValue) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				arr[i][1][attribute] = changedValue
				return true
			} else if (arr[i][2]) {
				if (findAndChange(arr[i][2], attribute, changedValue)) {
					return true
				}
			}
		}
	}

	const showTemplateFontSizes = () => {
		const temp = []
		temp.push(<option value='custom'>Custom</option>)
		for (const key in fontSizes) {
			temp.push(<option value={fontSizes[key]}>{key}</option>)
		}

		return <select onChange={e => console.log(e.target.value)}>{temp}</select>
	}

	const showTemplateColors = () => {
		const temp = []
		temp.push(<option value='custom'>Custom</option>)
		for (const key in colors) {
			temp.push(<option value={colors[key]}>{key}</option>)
		}

		return <select onChange={e => console.log(e.target.value)}>{temp}</select>
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Button Properties</p>
			<div className='two'>
				<label>Text: </label>
				<input id='btn-textInput' onChange={e => setText(e.target.value)} type='text' placeholder='Text' />
			</div>
			<div className='three'>
				<label>Text color: </label>
				{showTemplateColors()}
				<input disabled={true} type='color' id='btn-textcolor' />
			</div>
			<div className='three'>
				<label>Font size: </label>
				{showTemplateFontSizes()}
				<input disabled={true} type='number' min='0' id='btn-fontsize' />
			</div>
		</div>
	)
}

export default ButtonProperties
