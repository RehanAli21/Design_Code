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
import Icon from './Tools/Icon'
import Slider from './Tools/Slider'

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

	const findName = (arr, name) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (findName(arr[i][2], name)) return true
			}
		}

		return false
	}

	const showTools = () => {
		const ele = document.getElementById(activeElement)

		if (!ele) return

		if (ele.id === activePage) {
			return (
				<React.Fragment>
					<Div findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Button findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Input findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Image findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Select findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Slider findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
				</React.Fragment>
			)
		}

		if (ele.tagName === 'DIV') {
			return (
				<React.Fragment>
					<Div findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Button findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Input findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Image findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Select findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Icon findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Slider findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'UL' || ele.tagName === 'OL') {
			return (
				<React.Fragment>
					<ListItem findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'SELECT') {
			return (
				<React.Fragment>
					<Option findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'LI') {
			return (
				<React.Fragment>
					<Text findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<List findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
					<Icon findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
				</React.Fragment>
			)
		} else if (ele.tagName === 'BUTTON') {
			return (
				<React.Fragment>
					<Icon findAndInsert={findAndInsert} uniqueString={uniqueString} findName={findName} />
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
