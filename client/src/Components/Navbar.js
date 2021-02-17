import React, { useState, useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const Navbar = () => {
	const { pages, setPages } = useContext(PageContext)
	const [pageName, setPageName] = useState('')

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const addPage = () => {
		//if PageName is blank or present in pages, then stop.
		if (pageName === '') return
		for (let i = 0; i < pages.length; i++)
			if (pageName.toLowerCase() === pages[i].toLowerCase())
				return alert('This page already exits!')

		const temp = []
		pages.forEach(e => temp.push(e))
		temp.push(pageName)

		setPages(temp)
		document.getElementById('addpage-input').value = ''
	}

	return (
		<nav>
			<h1>{'<'}</h1>
			<div>
				<select>
					{pages.map(page => (
						<option key={page}>{toCapitalize(page)}</option>
					))}
				</select>
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
