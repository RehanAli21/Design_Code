import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Navbar = () => {
	const {
		pages,
		setPages,
		activePage,
		setActivePage,
		width,
		setWidth
	} = useContext(PageContext)
	const [pageName, setPageName] = useState('')
	const [show, setShow] = useState(false)

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
		if (e.target.innerText !== activePage)
			setActivePage(e.target.innerText.toLowerCase())

		setShow(!show)
	}

	const showPages = () => {
		const temp = []

		for (let i in pages) {
			temp.push(
				<li onClick={changeActivePage} key={uuid()}>
					{toCapitalize(i)}
				</li>
			)
		}
		return temp
	}

	return (
		<nav>
			<h1>{'<'}</h1>
			<div>
				<p onClick={() => setShow(!show)}>
					{toCapitalize(activePage)}
					<span style={{ fontSize: '1rem', marginLeft: '5px' }}>
						&#10148;
					</span>
				</p>
				<ul style={{ display: show ? 'block' : 'none' }}>
					{showPages()}
				</ul>
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
			<div>
				<p style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>
					Page Width: <span>{width}px</span>
					<input
						type='range'
						min='300'
						max='2000'
						defaultValue='720'
						style={{ outline: 'none', marginLeft: '10px' }}
						onChange={e => setWidth(e.target.value)}
					/>
				</p>
			</div>
		</nav>
	)
}

export default Navbar
