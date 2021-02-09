import React, { useState } from 'react'
import Nav from './Components/Nav'

const App = () => {
	const [layout, setLayout] = useState('X-large')

	return <Nav />
}

export default App
