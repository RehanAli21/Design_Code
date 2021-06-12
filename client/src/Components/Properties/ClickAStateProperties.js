import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'
import ClickAdvOne from './PropertiesComponenets/ClickAdvOne'
import ClickAdvAppearance from './PropertiesComponenets/ClickAdvAppearance'
import ClickAdvExtra from './PropertiesComponenets/ClickAdvExtra'
import Tip from './PropertiesComponenets/Tip'

let counter = 1
const ClickAStateProperties = () => {
	const { clickTargets, setClickTargets } = useContext(PropertiesContext)
	const { setMsgBoxMsg, setShowMsgBox, pages, activePage, activeElement } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)

	useEffect(() => {
		setName('')
		const nameInput = document.getElementById('clickadv-name-input')
		const elementNameSelect = document.getElementById('clickadv-elementNames-select')

		for (const e in clickTargets) {
			if (clickTargets[e].selected) {
				//setting current selected element's name
				nameInput.value = e
				elementNameSelect.value = e
				//if name is legit, then show properties
				const nameFound = NameFinder(pages[activePage], e)
				setShowProperties(nameFound)
			}
		}
	}, [clickTargets])

	const changeName = () => {
		if (name !== '') {
			for (const e in clickTargets) {
				if (e === name) {
					setMsgBoxMsg(`${name} is already selected, change it`)
					setShowMsgBox(true)
					return
				}
			}

			const nameFound = NameFinder(pages[activePage], name)

			setShowProperties(nameFound)

			const temp = {}
			for (const e in clickTargets) {
				temp[clickTargets[e].selected ? name : e] = clickTargets[e]
			}
			setClickTargets(temp)
		}
	}

	const NameFinder = (arr, name) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				if (arr[i][0] !== 'option') {
					return true
				}
			} else if (arr[i][2]) {
				if ((NameFinder(arr[i][2]), name) === true) return true
			}
		}
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

		for (const e in temp) temp[e].selected = false

		temp[`E${counter}`] = {
			selected: true,
			style: {},
			id: '',
			evenClickStyleRemover: 'no',
		}
		counter++
		setClickTargets(temp)
	}

	const selectElement = e => {
		const temp = Object.assign({}, clickTargets)

		for (const ele in temp) temp[ele].selected = ele === e.target.value

		setClickTargets(temp)
	}

	const evenClick = e => {
		const temp = Object.assign({}, clickTargets)
		for (const ele in temp) {
			if (temp[ele].selected) {
				temp[ele].evenClickStyleRemover = e.target.value
				return
			}
		}
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
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '70px 90px 50px',
					columnGap: '10px',
					margin: '10px 22px',
				}}>
				<label style={{ paddingTop: '5px' }}>Elements</label>
				<select onChange={selectElement} id='clickadv-elementNames-select'>
					{printElementsNames()}
				</select>
				<button style={{ padding: '5px 10px' }} onClick={addElement}>
					Add
				</button>
			</div>
			<div
				style={{
					display: Object.keys(clickTargets).length > 0 ? 'grid' : 'none',
					gridTemplateColumns: '70px 90px 60px',
					columnGap: '10px',
					margin: '10px 22px',
				}}>
				<label style={{ paddingTop: '5px' }}>Name: </label>
				<input type='text' placeholder='Ele name' id='clickadv-name-input' onChange={e => setName(e.target.value)} />
				<button onClick={changeName} style={{ padding: '5px 10px' }}>
					Apply
				</button>
			</div>
			<div style={{ margin: '15px 20px 5px 20px', display: showProperties ? 'block' : 'none' }}>
				<label>Reset selected element's styles on even clicks</label>
				<select
					id='clickadv-evenRemove-select'
					onChange={evenClick}
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
