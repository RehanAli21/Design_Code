import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import Name from './PropertiesComponenets/Name'

const IconProperties = () => {
	const { pages, setPages, activeElement, activePage } = useContext(PageContext)
	const [icon, setIcon] = useState('')

	useEffect(() => {
		findIconClass(pages[activePage], activeElement)
	})

	const findIconClass = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				const ele = document.getElementById('icon-class-name')

				if (ele) {
					let className = ''
					for (let k = 0; k < arr[i][1].class.length; k++) {
						arr[i][1].class[k] === '-' ? (className += ' ') : (className = arr[i][1].class[k])
					}

					className = className.substring(2, className.length)
					if (className !== '') ele.value = className
				}

				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (findIconClass(arr[i][2], id)) return true
			}
		}
		return false
	}

	//for setting icons
	useEffect(() => {
		if (icon !== '') {
			const temp = Object.assign({}, pages)
			//below logic is for converting name into bootstrap icon class
			const splitedIcon = icon.toLowerCase().split(' ')
			let iconClass = 'bi'
			splitedIcon.forEach(e => (e !== '' ? (iconClass += `-${e}`) : null))
			//////////////////////////////
			changeIcon(temp[activePage], activeElement, iconClass)
			setPages(temp)
		}
	}, [icon])
	//for find and set class
	const changeIcon = (arr, id, iconName) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				arr[i][1].class = iconName
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (changeIcon(arr[i][2], id, iconName)) return true
			}
		}
		return false
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>ICON PROPERTIES</p>
			<Name />
			<div className='two'>
				<label>Icon Name</label>
				<input type='text' id='icon-class-name' placeholder='Enter Icon name' onChange={e => setIcon(e.target.value)} />
			</div>
			<div style={{ margin: '10px 20px' }}>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.google.com'
					style={{ textDecoration: 'none', color: 'rgb(32, 144, 220)', fontWeight: 'bold' }}>
					<i className='bi-arrow-right-circle-fill'></i> For Icons List click on ME
				</a>
				<p style={{ marginTop: '10px', textAlign: 'left' }}>
					<strong>Instructions:</strong> Choice icon from the link above, then copy full name of icon and paste it on
					icon Name field
				</p>
			</div>
		</div>
	)
}

export default IconProperties
