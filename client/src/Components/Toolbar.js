import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import Div from './Tools/Div'
import Input from './Tools/Input'
import Button from './Tools/Button'

//This component is for showing list of elemenets,
//which can be added.
const Toolbar = () => {
	const { pages, setPages, activePage, activeElement } = useContext(PageContext)

	//For Getting unique string for ids of elements
	const uniqueString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

	//For finding the parent element,
	//in which elements will be added, using recursion
	const findAndInsert = (children, id, element) => {
		//Iterating each child in children array
		children.forEach(child => {
			//if parent found by id, then insert element into children
			if (child[2] && child[1].id === id) {
				child[2].push(element)
				return children
			}
			//else if there is children, then find into children recusively
			else if (child[2] && child[2].length > 0) {
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
				/>
				<Button
					findAndInsert={findAndInsert}
					activeElement={activeElement}
					activePage={activePage}
					pages={pages}
					setPages={setPages}
					uniqueString={uniqueString}
				/>
				<Input
					findAndInsert={findAndInsert}
					activeElement={activeElement}
					activePage={activePage}
					pages={pages}
					setPages={setPages}
					uniqueString={uniqueString}
				/>
			</div>
		</div>
	)
}

export default Toolbar
