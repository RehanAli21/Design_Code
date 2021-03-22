import React, { useState, useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

//This compoenent controls page.
const Page = ({ scale, tX, tY }) => {
	const { pages, activePage, width, render } = useContext(PageContext)

	//For showing elements into a div which acts
	//as body element/tag, using recursion
	const showElements = arr => {
		//Variable for storing elments
		const temp = []
		//Iterating each element
		arr.forEach(e => {
			/**
			 * Inserting elements into variable.
			 * Using React.createElement func for creating elements
			 * first parameter is element type
			 * second parameter giving attributes for elements
			 * third parameter for children, if there is children do recursion
			 */
			if (e[0] === 'div') {
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
									: e[1].styles.xlarge,
						},
						e[2].length > 0 ? showElements(e[2]) : null
					)
				)
			} else if (e[0] === 'input') {
				temp.push(
					React.createElement(
						e[0],
						{
							key: uuid(),
							id: e[1].id,
							type: e[1].type,
							placeholder: e[1].placeholder,
							maxLength: e[1].maxLength === 0 ? 1000 : e[1].maxLength,
							style:
								width < 540
									? e[1].styles.small
									: width < 720
									? e[1].styles.medium
									: width < 960
									? e[1].styles.large
									: e[1].styles.xlarge,
						},
						null
					)
				)
			} else if (e[0] === 'button') {
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
									: e[1].styles.xlarge,
						},
						null
					)
				)
			}
		})

		return temp
	}

	return (
		<div className={render ? 'ok main-div' : 'main-div'}>
			<div
				className='pages-div'
				id={activePage}
				style={{
					width: `${width}px`,
					minWidth: '300px',
					transform: `scale(${scale}) translate(${tX}, ${tY})`,
					marginLeft: width < 720 ? '15%' : width < 1000 ? '10%' : width < 1500 ? '5%' : '0%',
				}}>
				{showElements(pages[activePage])}
			</div>
		</div>
	)
}

export default Page
