import React, { useContext, useState } from 'react'
import { PagesContext } from './Contexts/PagesContext'
import { PagesDataContext } from './Contexts/PagesDataContext'

const Navbar = () => {
	const [pageName, setPageName] = useState('')
	const { pages, setPages, setActivePage, setActivePageWidth } = useContext(
		PagesContext
	)
	const { data, setData } = useContext(PagesDataContext)

	const addPage = () => {
		if (pageName !== '') {
			//checking if already page with this page exits
			if (data[pageName]) return alert('This Page Already exits.')

			//for adding page in data of PagesDataContext
			let temp = {}
			for (let e in data) temp[e] = data[e]
			temp[pageName] = []
			setData(temp)
			/////////////////////////////////

			//for adding page in pages of PagesCintext
			temp = []
			pages.forEach(page => temp.push(page))
			temp.push(pageName)
			setPages(temp)
			/////////////////////////////////
			//for reseting
			setPageName('')
			document.getElementById('addpage-input').value = ''
		}
	}

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<nav>
			<h1>{'<'}</h1>
			<div>
				<select
					onChange={e =>
						setActivePageWidth(e.target.value.toLowerCase())
					}>
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
					<option>x-large</option>
				</select>
			</div>
			<div>
				<select
					onChange={e => setActivePage(e.target.value.toLowerCase())}>
					{pages.map(page => (
						<option key={page}>{toCapitalize(page)}</option>
					))}
				</select>
			</div>
			<div className='addpage-div'>
				<input
					id='addpage-input'
					onChange={e => setPageName(e.target.value)}
					type='text'
					placeholder='Add Page...'
				/>
				<button onClick={addPage}>ADD</button>
			</div>
		</nav>
	)
}

export default Navbar
