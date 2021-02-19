import React, { useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Toolbar = () => {
	const { pages, setPages, activePage, activeElement } = useContext(
		PageContext
	)

	const addDiv = () => {
		const div = ['div', { id: uuid() }, []]

		const temp = Object.assign({}, pages)

		if (activeElement === activePage) {
			temp[activePage].push(div)
		} else {
			findAndInsert(temp[activePage], activeElement, div)
		}

		setPages(temp)
	}

	const findAndInsert = (children, id, element) => {
		children.forEach(child => {
			if (child[1].id === id) {
				child[2].push(element)
			} else if (child[2].length > 0) {
				findAndInsert(child[2], id, element)
			}
		})
	}

	return (
		<div className='toolbar'>
			<div className='tools'>
				<p onClick={addDiv}>Div</p>
			</div>
		</div>
	)
}

export default Toolbar
