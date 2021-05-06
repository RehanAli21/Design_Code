import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../Contexts/PageContext'

const Name = () => {
	const { activePage, activeElement, pages, setPages } = useContext(PageContext)

	const [name, setName] = useState('')

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
				changeName(arr[i][2], name)
			}
		}
	}

	return (
		<div className='two'>
			<label>Name: </label>
			<input type='text' id='name-nameinput' onChange={e => setName(e.target.value)} />
		</div>
	)
}

export default Name
