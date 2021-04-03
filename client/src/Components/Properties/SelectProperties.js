import React, { useContext } from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import { PageContext } from '../Contexts/PageContext'
import { optionStyle } from '../Styles/optionStyle'

const SelectProperties = () => {
	const { pages, setPages, activePage, activeElement } = useContext(PageContext)

	//For Getting unique string for ids of elements
	const uniqueString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

	//For finding the parent element,
	//in which elements will be added, using recursion
	const findAndInsert = (children, id, element) => {
		//Iterating each child in children array
		children.forEach(child => {
			//if parent found by id, then insert element into children
			if (child[2] && child[0] === 'select' && child[1].id === id) {
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

	//For adding element into pages data
	const addOption = () => {
		//Assigning new variable pages data,
		//For inserting option element
		const temp = Object.assign({}, pages)
		//For holding all data of a option element
		const option = [
			'option',
			{
				id: uniqueString(),
				text: '',
			},
		]

		//inserting option into body
		if (activeElement !== activePage) temp[activePage] = findAndInsert(temp[activePage], activeElement, option)

		//Assigning new data into pages data
		setPages(temp)
	}

	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>DROP_MENU PROPERTIES</p>
				<div className='two'>
					<button onClick={addOption}>Add option</button>
				</div>
			</div>
			<Text />
			<Font />
		</React.Fragment>
	)
}

export default SelectProperties
