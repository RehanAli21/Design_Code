import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const FullScreen = ({ showElements }) => {
	const { activePage, pages, pageBC, showFullScreen } = useContext(PageContext)

	const style = {
		position: 'absolute',
		top: '10px',
		left: '40vw',
		backgroundColor: 'white',
		boxShadow: '1px 1px 5px grey',
		fontSize: '1.5em',
		color: 'rgb(32, 144, 220)',
		fontWeight: 'bold',
		padding: '16px 32px',
		transformOrigin: 'top',
		transitionDuration: '500ms',
	}

	const removeElement = () => {
		const ele = document.getElementById('fullscreenF')
		if (ele) {
			ele.style.transform = 'scaleY(0)'
		}
	}

	setTimeout(removeElement, 2000)

	return (
		<div style={{ display: showFullScreen ? 'block' : 'none', backgroundColor: pageBC }} className='fullScreenPage'>
			<div id='fullscreenF' onMouseEnter={removeElement} style={style}>
				Press F to exit Full Screen
			</div>
			{showElements(pages[activePage])}
		</div>
	)
}

export default FullScreen
