import React, { useState } from 'react'

const ListProperties = () => {
	const [listType, setListType] = useState('ul')

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>List Properties</p>
		</div>
	)
}

export default ListProperties
