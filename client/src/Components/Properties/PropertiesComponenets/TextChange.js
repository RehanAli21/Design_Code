import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const TextChange = ({ type, display }) => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [text, setText] = useState('')

	//For setting default values of button text
	useEffect(() => {
		const textInput = document.getElementById('btn-textInput')
		const textarea = document.getElementById('btn-texttextarea')

		const value = findAndReturnText(pages[activePage])

		if (value) {
			if (textInput) textInput.value = value
			else if (textarea) textarea.value = value
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

	return (
		<div className='two' style={{ display: display }}>
			<label>Text: </label>
			{type === 'button' ? (
				<input id='btn-textInput' onChange={e => setText(e.target.value)} type='text' placeholder='Text' />
			) : (
				<textarea id='btn-texttextarea' onChange={e => setText(e.target.value)} type='text' placeholder='Text' />
			)}
		</div>
	)
}

export default TextChange
