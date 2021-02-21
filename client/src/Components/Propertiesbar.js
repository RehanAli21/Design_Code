import React, { useState, useContext, useEffect } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Propertiesbar = () => {
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})
	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)

	const { pages, activePage, activeElement } = useContext(PageContext)

	useEffect(() => {
		showProperties(pages[activePage], activeElement)
	}, [pages, activePage, activeElement])

	useEffect(() => {
		console.log(document.getElementById(activeElement))
	}, [activeElement])

	const showProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				setSmall(e[1].styles.small)
				setMedium(e[1].styles.medium)
				setLarge(e[1].styles.large)
				setXlarge(e[1].styles.xlarge)
				return true
			} else if (e[2].length > 0) {
				if (showProperties(e[2], id)) return true
			}
		})
	}

	return (
		<div className='propertybar'>
			<p>Properties</p>
			<div className='div-property'>
				<div className='w-h borders'>
					<p className='second-heading'>TRANSFORM</p>
					<div className='one'>
						<div className='w'>
							<label>W : </label>
							<input type='number' defaultValue='30' />
							<select>
								<option>PX</option>
								<option>VW</option>
							</select>
						</div>
						<div className='h'>
							<label>H : </label>
							<input type='number' defaultValue='30' />
							<select>
								<option>PX</option>
								<option>VH</option>
							</select>
						</div>
						<div className='x'>
							<label>X : </label>
							<input type='number' defaultValue='0' />
							<select>
								<option>EM</option>
								<option>REM</option>
								<option>PX</option>
							</select>
						</div>
						<div className='y'>
							<label>Y : </label>
							<input type='number' defaultValue='0' />
							<select>
								<option>EM</option>
								<option>REM</option>
								<option>PX</option>
							</select>
						</div>
					</div>
				</div>
				<div className='ap borders'>
					<p className='second-heading'>APPEARANCE</p>
					<div>
						<div className='two md'>
							<label>Color: </label>
							<input type='color' defaultValue='#ffffff' />
						</div>
						<div className='one md'>
							<label>Opacity: </label>
							<input
								type='range'
								defaultValue='1'
								min='0'
								max='1'
							/>
						</div>
						<div className='ap-borders md'>
							<input
								type='checkbox'
								onChange={() =>
									setShowBorderSection(!showBorderSection)
								}
							/>
							<span>Border</span>
							<div
								style={{
									display: showBorderSection
										? 'block'
										: 'none'
								}}
								className='b'>
								<div className='two'>
									<div className='mds'>
										<label>Color: </label>
										<input
											type='color'
											defaultValue='#464646'
										/>
									</div>
									<div className='mds'>
										<label>Size: </label>
										<input
											type='number'
											defaultValue='1'
											min='0'
										/>
									</div>
									<div className='mds'>
										<label>Radius: </label>
										<input
											type='number'
											defaultValue='1'
											min='0'
										/>
									</div>
									<div className='mds'>
										<label>Type: </label>
										<select>
											<option>solid</option>
											<option>inset</option>
											<option>outset</option>
											<option>ridge</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className='shadow'>
							<input
								type='checkbox'
								onChange={() =>
									setShowShadowSection(!showShadowSection)
								}
							/>
							<span>Shadow</span>
							<div
								style={{
									display: showShadowSection
										? 'block'
										: 'none'
								}}
								className='one'>
								<div>
									<label>X: </label>
									<input
										type='number'
										min='0'
										defaultValue='0'
									/>
								</div>
								<div>
									<label>Y: </label>
									<input
										type='number'
										min='0'
										defaultValue='0'
									/>
								</div>
								<div>
									<label>B: </label>
									<input
										type='number'
										min='0'
										defaultValue='0'
									/>
								</div>
								<div>
									<label>C: </label>
									<input
										type='color'
										defaultValue='#464646'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Propertiesbar
