import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

//This compoenent controls page.
const Page = () => {
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
			 * second parameter giving 3 things, first: key, second: id
			 * 		third: different style according to the width of body tag
			 * third parameter for children, if there is children do recursion
			 */
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
					e[2].length > 0 ? showElements(e[2]) : null
				)
			)
		})

		return temp
	}

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div className={render ? 'ok' : ''}>
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
