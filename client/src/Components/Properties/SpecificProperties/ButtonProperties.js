import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const ButtonProperties = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [text, setText] = useState('')

	//For setting default values of button text
	useEffect(() => {
		const textInput = document.getElementById('i-s-typeSelect')
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
		const temp = Object.assign({}, pages)
		findAndChange(temp[activePage], 'text', text !== '' ? text : 'button')
		setPages(temp)
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

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Button Properties</p>
			<div>
				<label>Text: </label>
				<input onChange={e => setText(e.target.value)} type='text' placeholder='Text' />
			</div>
		</div>
	)
}

export default ButtonProperties
