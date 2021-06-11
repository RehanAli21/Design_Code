import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'
import ClickAdvOne from './PropertiesComponenets/ClickAdvOne'
import ClickAdvAppearance from './PropertiesComponenets/ClickAdvAppearance'
import ClickAdvExtra from './PropertiesComponenets/ClickAdvExtra'
import Tip from './PropertiesComponenets/Tip'

let counter = 1
const ClickAStateProperties = () => {
	const { clickTargets, setClickTargets, setClickTarget, clickTargetName, setClickTargetName } = useContext(PropertiesContext)
	const { width, pages, setPages, activePage, activeElement } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)
	const [evenClick, setEvenClick] = useState('')

	useEffect(() => {
		const nameInput = document.getElementById('clickadv-name-input')

		for (const e in clickTargets) {
			if (clickTargets[e].selected) {
				nameInput.value = e
				setShowProperties(true)
			}
		}
	}, [clickTargets])

	useEffect(() => {
		if (name !== '') {
			const nameFound = NameFinder(pages[activePage])

			if (nameFound) {
				setShowProperties(true)
				setClickTargetName(name)
			} else if (!nameFound) {
				setShowProperties(false)
				setClickTarget('')
				setClickTargetName('')
			}
		}
	}, [name])

	const NameFinder = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				if (arr[i][0] !== 'option') {
					setClickTarget(arr[i][1].id)
					return true
				}
			} else if (arr[i][2]) {
				if (NameFinder(arr[i][2])) return true
			}
		}
	}

	useEffect(() => {
		if (evenClick !== '') {
			const temp = Object.assign({}, pages)
			findEvenClickProperty(temp[activePage])
			setPages(temp)
		}
	}, [evenClick])

	const findEvenClickProperty = arr => {
		arr.forEach(e => {
			if (e[1].id === activeElement) {
				e[1].evenClickStyleRemover = evenClick
				return true
			} else if (e[2] && e[2].length > 0) {
				if (findEvenClickProperty(e[2])) return true
			}
		})
		return false
	}

	const printElementsNames = () => {
		const arr = []
		for (const e in clickTargets) {
			arr.push(
				<option key={e} value={e}>
					{e}
				</option>
			)
		}

		return arr
	}

	const addElement = () => {
		const temp = Object.assign({}, clickTargets)
		temp[`E${counter}`] = {
			selected: false,
			style: {},
			id: '',
		}
		counter++
		setClickTargets(temp)
	}

	const selectElement = e => {
		const temp = Object.assign({}, clickTargets)

		for (const ele in temp) temp[ele].selected = ele === e.target.value

		setClickTargets(temp)
	}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<p className='second-heading'>
				<Tip
					msg={[
						'These properties will apply on the selected element, when this element is clicked',
						"Element can be selected by it's name",
						'Note: If you select this element, then click states propertise would not work',
					]}
				/>
				CLICK ELEMENT PROPERTIES
			</p>
			<div style={{ display: 'grid', gridTemplateColumns: '70px 90px 50px', columnGap: '10px', margin: '10px 22px' }}>
				<label style={{ paddingTop: '5px' }}>Elements</label>
				<select onChange={selectElement} id='clickadv-elementNames-select'>
					{printElementsNames()}
				</select>
				<button style={{ padding: '5px 10px' }} onClick={addElement}>
					Add
				</button>
			</div>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickadv-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<div style={{ margin: '15px 20px 5px 20px', display: showProperties ? 'block' : 'none' }}>
				<label>Reset selected element's styles on even clicks</label>
				<select
					id='clickadv-evenRemove-select'
					onChange={e => setEvenClick(e.target.value)}
					style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>
					<option value='no'>No</option>
					<option value='yes'>Yes</option>
				</select>
			</div>
			<div style={{ display: showProperties ? 'block' : 'none' }}>
				<ClickAdvOne />
				<ClickAdvAppearance />
				<ClickAdvExtra />
			</div>
		</div>
	)
}

export default ClickAStateProperties
