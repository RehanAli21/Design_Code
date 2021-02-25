import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

//This compoenent controls page.
const Page = () => {
	const { pages, activePage, width, activeElement } = useContext(PageContext)

	// const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	// const uniqueString = () =>
	// 	Math.random().toString(36).substring(2, 15) +
	// 	Math.random().toString(36).substring(2, 15)

	useEffect(() => {
		if (activeElement && activeElement !== activePage) {
			console.log(document.getElementById(activeElement))
		}
	}, [activeElement, activePage])

	const showElements = arr => {
		const temp = []
		if (!arr) return null

		arr.forEach(e => {
			if (e[2].length > 0) {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							style:
								width < 540
									? e[1].styles.small
									: width < 720
									? e[1].styles.medium
									: width < 960
									? e[1].styles.large
									: e[1].styles.xlarge
						},
						showElements(e[2])
					)
				)
			} else {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							style:
								width < 540
									? e[1].styles.small
									: width < 720
									? e[1].styles.medium
									: width < 960
									? e[1].styles.large
									: e[1].styles.xlarge
						},
						null
					)
				)
			}
		})

		return temp
	}

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div>
				<div
					className='pages-div'
					id={activePage}
					style={{
						width: `${width}px`,
						minWidth: '300px',
						marginLeft:
							width < 720
								? '15%'
								: width < 1000
								? '10%'
								: width < 1500
								? '5%'
								: '0%'
					}}>
					{showElements(pages[activePage])}
				</div>
			</div>
		</div>
	)
}

export default Page
