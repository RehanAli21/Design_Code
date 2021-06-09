import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const Name = ({ style }) => {
	const { activePage, activeElement, pages, setPages, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)

	const [name, setName] = useState('')

	//for default name
	useEffect(() => {
		defaultvalue(pages[activePage])
	})

	//helper for default value
	const defaultvalue = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				const nameInput = document.getElementById('namecomp_NameInput')
				if (nameInput) nameInput.value = arr[i][1].name

				return true
			} else if (arr[i][2]) {
				if (defaultvalue(arr[i][2])) return true
			}
		}
	}

	//for changing element name
	useEffect(() => {
		if (name !== '') {
			const found = nameFinder(pages[activePage], name)

			if (!found) {
				const temp = Object.assign({}, pages)
				changeName(temp[activePage], name)
				setPages(temp)
			} else {
				setMsgBoxMsg('Name should be unique from other elements')
				setShowMsgBox(true)
			}
		}
	}, [name])

	//Helper function for changing name of element
	const changeName = (arr, name) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				arr[i][1].name = name
				return true
			} else if (arr[i][2]) {
				if (changeName(arr[i][2], name)) return true
			}
		}
		return false
	}

	const nameFinder = (arr, newName) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === newName) {
				return true
			} else if (arr[i][2]) {
				if (nameFinder(arr[i][2], newName)) return true
			}
		}
		return false
	}

	return (
		<div style={{ display: style }} className='two'>
			<label>Name: </label>
			<input
				type='text'
				id='namecomp_NameInput'
				onChange={e => {
					if (e.target.value === '') {
						setMsgBoxMsg('Name can not be empty. Please type a unique Name')
						setShowMsgBox(true)
					} else if (e.target.value !== '') setName(e.target.value)
				}}
			/>
		</div>
	)
}

export default Name
