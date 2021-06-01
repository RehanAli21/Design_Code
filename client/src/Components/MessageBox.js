import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const MessageBox = () => {
	const { showMsgBox, setShowMsgBox, msgBoxMsg } = useContext(PageContext)

	return showMsgBox ? (
		<div className='msgBoxBack'>
			<div className='msgBox'>
				<p>{msgBoxMsg}</p>
				<hr />
				<button autoFocus={true} onClick={() => setShowMsgBox(false)}>
					OK
				</button>
			</div>
		</div>
	) : (
		<div></div>
	)
}

export default MessageBox
