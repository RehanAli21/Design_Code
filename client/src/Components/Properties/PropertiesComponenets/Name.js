import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const Name = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [name, setName] = useState('')

	//for chaning element name
	useEffect(() => {
		if (name !== '') {
			const found = nameFinder(pages[activePage], name)

			if (!found) {
				const temp = Object.assign({}, pages)
				changeName(temp[activePage], name)
				setPages(temp)
			} else {
				alert('Name should be unique from other elements')
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
		<div className='two'>
			<label>Name: </label>
			<input type='text' id='name-nameinput' onChange={e => setName(e.target.value)} />
		</div>
	)
}

export default Name
