import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'

const Navbar = () => {
	const [
		pages,
		activePage,
		setActivePage,
		activePageWidth,
		setActivePageWidth
	] = useContext(PagesContext)

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
		</nav>
	)
}

export default Navbar
