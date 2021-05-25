import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import Div from './Tools/Div'
import Input from './Tools/Input'
import Button from './Tools/Button'
import Text from './Tools/Text'
import Image from './Tools/Image'
import Select from './Tools/Select'
import List from './Tools/List'
import Option from './Tools/Option'
import ListItem from './Tools/ListItem'

//This component is for showing list of elemenets,
//which can be added.
const Toolbar = () => {
	const { activePage, activeElement } = useContext(PageContext)

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

	const showTools = () => {
		const ele = document.getElementById(activeElement)

		if (!ele) return

		if (ele.id === activePage) {
			return (
				<React.Fragment>
					<Div findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Button findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Input findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Image findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Select findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} />
				</React.Fragment>
			)
		}

		if (ele.tagName === 'DIV') {
			return (
				<React.Fragment>
					<Div findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Button findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Input findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Image findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<Select findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'UL' || ele.tagName === 'OL') {
			return (
				<React.Fragment>
					<ListItem findAndInsert={findAndInsert} uniqueString={uniqueString} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'SELECT') {
			return (
				<React.Fragment>
					<Option findAndInsert={findAndInsert} uniqueString={uniqueString} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'LI') {
			return (
				<React.Fragment>
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} />
				</React.Fragment>
			)
		} else {
			return
		}
	}

	return (
		<div className='toolbar'>
			<div className='tools'>{showTools()}</div>
		</div>
	)
}

export default Toolbar
