import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'
import { TemplateContext } from './Contexts/TemplateContext'

const Navbar = () => {
	const {
		pages,
		setPages,
		activePage,
		setActivePage,
		setActiveElement,
		width,
		setWidth,
		showBreakPoint,
		setShowBreakPoint,
		inPageActiveElement,
		setInPageActiveElement,
		setShowFullScreen,
	} = useContext(PageContext)

	const { showTemplate, setShowTemplate } = useContext(TemplateContext)

	//For storing new page name
	const [pageName, setPageName] = useState('')
	//For controlling showing pages menu
	const [show, setShow] = useState(false)
	//For controlling the default values (template and breakpoints) comp menu
	const [showdefault, setShowDefault] = useState(false)

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
		if (e.target.innerText !== activePage) {
			setActivePage(e.target.innerText.toLowerCase())
			setActiveElement('')
		}

		setShow(!show)
	}

	//For showing available pages list
	const pageSection = () => {
		//For storing list of pages
		const temp = []
		//For inserting list of pages
		for (let i in pages) {
			temp.push(
				<div className='two-2' key={uuid()}>
					<div className='b-hover' onClick={changeActivePage}>
						{toCapitalize(i)}
					</div>
					<button onClick={() => deletePage(i)}>Delete</button>
				</div>
			)
		}
		return (
			<div style={{ transform: show ? 'scaleY(1)' : 'scaleY(0)' }}>
				<div style={{ borderBottom: '1px solid black' }}>{temp}</div>
				<div className='addpage-input two-2'>
					<input
						onChange={e => setPageName(e.target.value.toLowerCase())}
						id='addpage-input'
						type='text'
						placeholder='Add Page...'
						autoComplete='off'
					/>
					<button onClick={addPage}>ADD</button>
				</div>
			</div>
		)
	}

	return (
		<nav>
			<h1>
				<i className='bi-arrow-left-circle'></i>
			</h1>
			<div className='page-div'>
				<p onClick={() => setShow(!show)}>
					{toCapitalize(activePage)}
					<span className='bi-chevron-down' style={{ fontSize: '1rem', marginLeft: '5px' }}></span>
				</p>
				{pageSection()}
			</div>
			<div className='d-v'>
				<p className='icon' onClick={() => setShowDefault(!showdefault)}>
					<span className='bi-menu-app'></span>
				</p>
				<div style={{ transform: showdefault ? 'scaleY(1)' : 'scaleY(0)' }}>
					<button
						onClick={() => {
							setShowTemplate(!showTemplate)
							setShowDefault(false)
						}}>
						Show Template Values
					</button>
					<button
						onClick={() => {
							setShowBreakPoint(!showBreakPoint)
							setShowDefault(false)
						}}>
						Show BreakPoint
					</button>
				</div>
			</div>
			<p onClick={() => setShowFullScreen(true)} className='icon' style={{ marginTop: '2vh' }}>
				<span className='bi-fullscreen'></span>
			</p>
			<div>
				<input
					checked={inPageActiveElement}
					onChange={e => setInPageActiveElement(e.target.checked)}
					type='checkbox'
					id='nav-inpage-input'
				/>
				<label style={{ marginLeft: '10px', fontSize: '1rem' }}>In Page Selection</label>
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
