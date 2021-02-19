import React, { useState, useContext, useEffect } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Propertiesbar = () => {
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})

	const { pages, activePage, activeElement } = useContext(PageContext)

	useEffect(() => {
		showProperties(pages[activePage], activeElement)
	}, [pages, activePage, activeElement])

	const showProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				setSmall(e[1].styles.small)
				setMedium(e[1].styles.medium)
				setLarge(e[1].styles.large)
				setXlarge(e[1].styles.xlarge)
				return true
			} else if (e[2].length > 0) {
				if (showProperties(e[2], id)) return
			}
		})
	}

	const showList = () => {
		return (
			<ul>
				<li>
					<h5>Small</h5>
					<ul>{mapList(small)}</ul>
				</li>
				<li>
					<h5>Medium</h5>
					<ul>{mapList(medium)}</ul>
				</li>
				<li>
					<h5>Large</h5>
					<ul>{mapList(large)}</ul>
				</li>
				<li>
					<h5>X Large</h5>
					<ul>{mapList(xlarge)}</ul>
				</li>
			</ul>
		)
	}
	const mapList = obj => {
		const temp = []
		for (const key in obj) {
			temp.push(
				<li
					key={uuid()}
					style={{ width: '100%', backgroundColor: 'red' }}>
					<span style={{ width: '75%' }}>{key}</span>
					<input style={{ width: '25%' }} type='text' />
				</li>
			)
		}
		return temp
	}

	return (
		<div className='propertybar'>
			<p>Properties</p>
			{showList()}
		</div>
	)
}

export default Propertiesbar
