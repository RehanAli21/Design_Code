import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import Div from './Tools/Div'

const Toolbar = () => {
	const {
		pages,
		setPages,
		activePage,
		activeElement,
		setHistory
	} = useContext(PageContext)

	const uniqueString = () =>
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)

	const findAndInsert = (children, id, element) => {
		children.forEach(child => {
			if (child[1].id === id) {
				child[2].push(element)
				return children
			} else if (child[2].length > 0) {
				findAndInsert(child[2], id, element)
			}
		})

		return children
	}

	return (
		<div className='toolbar'>
			<div className='tools'>
				<Div
					findAndInsert={findAndInsert}
					activeElement={activeElement}
					activePage={activePage}
					pages={pages}
					setPages={setPages}
					uniqueString={uniqueString}
					setHistory={setHistory}
				/>
			</div>
		</div>
	)
}

export default Toolbar
