import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'
import { TemplateContext } from './Contexts/TemplateContext'

const Navbar = () => {
	const { pages, setPages, activePage, setActivePage, width, setWidth } = useContext(PageContext)

	const { showTemplate, setShowTemplate } = useContext(TemplateContext)

	//For storing new page name
	const [pageName, setPageName] = useState('')
	//For controlling showing pages menu
	const [show, setShow] = useState(false)

	//For making first character Capital
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	//For adding Pages into Pages data
	const addPage = () => {
		//If pageName is blank do nothing
		if (pageName === '') return
		//If page alreadt exits, do nothing
		if (pages.hasOwnProperty(pageName)) return

		//Assigning pages data into new variable
		const temp = Object.assign({}, pages)
		//Adding new page and assign array
		temp[pageName] = []
		//Assigning data after new page insertion into pages data
		setPages(temp)

		//For reseting page input
		document.getElementById('addpage-input').value = ''
	}

	//For deleting the activePage
	const deletePage = pageName => {
		//For storing pages data without storing activePage
		const temp = {}
		//For checking how many times loop runs
		let i = 0
		//For assigning the new activePage
		let a = ''

		//Storing all element of pages into temp except,
		//the page we want to delete
		for (const key in pages) {
			if (key !== pageName) {
				a = key
				temp[key] = pages[key]
			}
			i++
		}
		//if i < 2, then it means there are only 1 page.
		//And if there is only 1 page, then it can't be deleted
		if (i < 2) return
		//setting new ActivePage, because old one is deleted
		setActivePage(a)
		//setting pages data after deleting page.
		setPages(temp)
	}

	//For changing shown pages
	const changeActivePage = e => {
		//If page is not already assigned, then change page
		if (e.target.innerText !== activePage) setActivePage(e.target.innerText.toLowerCase())

		setShow(!show)
	}

	//For showing available pages list
	const showPages = () => {
		//For storing list of pages
		const temp = []
		//For inserting list of pages
		for (let i in pages) {
			temp.push(
				<li key={uuid()}>
					<div onClick={changeActivePage}>{toCapitalize(i)}</div>
					<button onClick={() => deletePage(i)}>Delete</button>
				</li>
			)
		}
		return temp
	}

	return (
		<nav>
			<h1>{'<'}</h1>
			<div className='page-div'>
				<p onClick={() => setShow(!show)}>
					{toCapitalize(activePage)}
					<span style={{ fontSize: '1rem', marginLeft: '5px' }}>&#10148;</span>
				</p>
				<ul style={{ display: show ? 'block' : 'none' }}>{showPages()}</ul>
			</div>
			<div className='addpage-input'>
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
				<button onClick={() => setShowTemplate(!showTemplate)} className='TemplateButton'>
					Show Template Values
				</button>
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
