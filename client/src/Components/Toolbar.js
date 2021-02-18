import React, { useContext } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Toolbar = () => {
	const { pages, setPages, activePage } = useContext(PageContext)

	const addDiv = () => {
		const div = ['div', { id: uuid() }, []]

		const temp = Object.assign({}, pages)
		temp[activePage].push(div)

		setPages(temp)
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
