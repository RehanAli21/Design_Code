import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'
import HoverAdvOne from './PropertiesComponenets/HoverAdvOne'
import HoverAdvAppearance from './PropertiesComponenets/HoverAdvAppearance'
import HoverAdvExtra from './PropertiesComponenets/HoverAdvExtra'
import Tip from './PropertiesComponenets/Tip'

let counter = 1
const HoverAStateProperties = () => {
	const { hoverTargets, setHoverTargets } = useContext(PropertiesContext)
	const { pages, activePage, activeElement, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)

	useEffect(() => {
		setName('')
		const nameInput = document.getElementById('hoveradv-name-input')
		const elementNameSelect = document.getElementById('hoveradv-elementNames-select')

		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				//setting current selected element's name
				nameInput.value = e
				elementNameSelect.value = e
				//if name is legit, then show properties
				const nameFound = NameFinder(pages[activePage], e, 'notId')
				setShowProperties(nameFound)
			}
		}
	}, [hoverTargets])

	const changeName = () => {
		if (name !== '') {
			for (const e in hoverTargets) {
				if (e === name) {
					setMsgBoxMsg(`${name} is already selected, change it`)
					setShowMsgBox(true)
					return
				}
			}

			const nameFound = NameFinder(pages[activePage], name, 'id')
			setShowProperties(nameFound)
		}
	}

	const NameFinder = (arr, name, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				if (arr[i][0] !== 'option') {
					if (id === 'id') {
						const temp = {}
						for (const e in hoverTargets) {
							if (hoverTargets[e].selected) {
								temp[name] = hoverTargets[e]
								temp[name].id = arr[i][1].id
							} else {
								temp[e] = hoverTargets[e]
							}
						}
						setHoverTargets(temp)
					}
					return true
				}
			} else if (arr[i][2]) {
				if ((NameFinder(arr[i][2]), name, id) === true) return true
			}
		}
		return false
	}

	const printElementsNames = () => {
		const arr = []
		for (const e in hoverTargets) {
			arr.push(
				<option key={e} value={e}>
					{e}
				</option>
			)
		}

		return arr
	}

	const addElement = () => {
		const temp = Object.assign({}, hoverTargets)

		for (const e in temp) temp[e].selected = false

		temp[`H${counter}`] = {
			selected: true,
			style: {},
			id: '',
		}
		counter++
		setHoverTargets(temp)
	}

	const selectElement = e => {
		const temp = Object.assign({}, hoverTargets)

		for (const ele in temp) temp[ele].selected = ele === e.target.value

		setHoverTargets(temp)
	}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<p className='second-heading'>
				<Tip
					msg={[
						'These properties will apply on the selected element, when mouse is on this element',
						"Element can be selected by it's name",
						'Note: If you select this element, then hover state properties will be mixed with it',
					]}
				/>
				HOVER ELEMENT PROPERTIES
			</p>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '70px 90px 50px',
					columnGap: '10px',
					margin: '10px 22px',
				}}>
				<label style={{ paddingTop: '5px' }}>Elements</label>
				<select onChange={selectElement} id='hoveradv-elementNames-select'>
					{printElementsNames()}
				</select>
				<button style={{ padding: '5px 10px' }} onClick={addElement}>
					Add
				</button>
			</div>
			<div
				style={{
					display: Object.keys(hoverTargets).length > 0 ? 'grid' : 'none',
					gridTemplateColumns: '70px 90px 60px',
					columnGap: '10px',
					margin: '10px 22px',
				}}>
				<label style={{ paddingTop: '5px' }}>Name: </label>
				<input type='text' placeholder='Ele name' id='hoveradv-name-input' onChange={e => setName(e.target.value)} />
				<button onClick={changeName} style={{ padding: '5px 10px' }}>
					Apply
				</button>
			</div>
			<div style={{ display: showProperties ? 'block' : 'none' }}>
				<HoverAdvOne />
				<HoverAdvAppearance />
				<HoverAdvExtra />
			</div>
		</div>
	)
}

export default HoverAStateProperties
