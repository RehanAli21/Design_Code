import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const MessageBox = () => {
	const { showMsgBox, setShowMsgBox, msgBoxMsg } = useContext(PageContext)

	return (
		<div className={showMsgBox ? 'msgBox msgBoxActive' : 'msgBox'}>
			<p>{msgBoxMsg}</p>
			<button onClick={() => setShowMsgBox(false)}>OK</button>
		</div>
	)
}

export default MessageBox
