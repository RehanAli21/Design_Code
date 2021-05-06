import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const Name = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [name, setName] = useState('')

	//for default name
	useEffect(() => {
		defaultvalue(pages[activePage])
	})

	//helper for default value
	const defaultvalue = arr => {
		const nameInput = document.getElementById('name-nameInput')

		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				if (nameInput) nameInput.value = arr[i][1].name
				return true
			} else if (arr[i][2]) {
				if (defaultvalue(arr[i][2])) return true
			}
		}
	}

	//for chaning element name
	useEffect(() => {
		if (name !== '') {
			const temp = Object.assign({}, pages)
			changeName(temp[activePage], name)
			setPages(temp)
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
	}

	return (
		<div className='two'>
			<label>Name: </label>
			<input type='text' id='name-nameInput' onChange={e => setName(e.target.value)} />
		</div>
	)
}

export default Name
