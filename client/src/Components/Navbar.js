import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Navbar = () => {
	const { pages, setPages, activePage, setActivePage } = useContext(
		PageContext
	)
	const [pageName, setPageName] = useState('')

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const addPage = () => {
		console.log(pages)
		if (pageName === '') return
		if (pages.hasOwnProperty(pageName)) return

		const temp = Object.assign({}, pages)
		temp[pageName] = []

		setPages(temp)

		document.getElementById('addpage-input').value = ''
	}

	const changeActivePage = e => {
		if (e.target.value !== activePage)
			setActivePage(e.target.value.toLowerCase())
	}

	const showPages = () => {
		const temp = []

		for (let i in pages) {
			temp.push(<option key={uuid()}>{toCapitalize(i)}</option>)
		}
		return temp
	}

	return (
		<nav>
			<h1>{'<'}</h1>
			<div>
				<select onChange={changeActivePage}>{showPages()}</select>
			</div>
			<div className='addpage-div'>
				<input
					onChange={e => setPageName(e.target.value.toLowerCase())}
					id='addpage-input'
					type='text'
					placeholder='Add Page...'
					autoComplete='off'
				/>
				<button onClick={addPage}>ADD</button>
			</div>
		</nav>
	)
}

export default Navbar
