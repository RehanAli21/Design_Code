import React, { useContext, useEffect } from 'react'
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

	const changeElementStyle = show => {
		const ele = document.getElementById('fullscreenF')
		if (ele) {
			ele.style.transform = show ? 'scaleY(1)' : 'scaleY(0)'
		}
	}

	useEffect(() => {
		changeElementStyle(showFullScreen)
		setTimeout(() => changeElementStyle(false), 2000)
	}, [showFullScreen])

	return (
		<div style={{ display: showFullScreen ? 'block' : 'none', backgroundColor: pageBC }} className='fullScreenPage'>
			<div id='fullscreenF' onMouseEnter={() => changeElementStyle(false)} style={style}>
				Press F to exit Full Screen
			</div>
			{showElements(pages[activePage])}
		</div>
	)
}

export default FullScreen
