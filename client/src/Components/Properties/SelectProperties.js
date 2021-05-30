import React from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import GridColumn from './PropertiesComponenets/GridColumn'
import BackFilter from './PropertiesComponenets/BackFilter'
import Animate from './PropertiesComponenets/Animate'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'
import Tip from './PropertiesComponenets/Tip'

const SelectProperties = () => {
	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>
					<Tip
						msg={[
							'Name is an unique identity for this element',
							<hr className='tipHr' />,
							'Cursor for changing mouse icon/poiniter',
							<hr className='tipHr' />,
							'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
						]}
					/>
					DROP_MENU PROPERTIES
				</p>
				<Name />
				<Cursor />
				<GridColumn />
			</div>
			<Text />
			<Font />
			<BackFilter />
			<Animate />
		</React.Fragment>
	)
}

export default SelectProperties
