import React from 'react'
import uuid from 'react-uuid'

const Tip = ({ msg }) => (
	<span className='tipDiv'>
		<span className='tipQ'>?</span>
		<span className='tipText'>
			{msg.map(e => (
				<span key={uuid()} className='tipbb'>
					{e}
				</span>
			))}
		</span>
	</span>
)

export default Tip
