import React, { useState, useContext, useEffect } from 'react'
import uuid from 'react-uuid'
import { PageContext } from './Contexts/PageContext'

const Propertiesbar = () => {
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})

	const { pages, activePage, activeElement } = useContext(PageContext)

	useEffect(() => {
		showProperties(pages[activePage], activeElement)
	}, [pages, activePage, activeElement])

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

	const showList = () => {
		return (
			<ul>
				<li>
					<h5>Small</h5>
					<ul>{mapList(small)}</ul>
				</li>
				<li>
					<h5>Medium</h5>
					<ul>{mapList(medium)}</ul>
				</li>
				<li>
					<h5>Large</h5>
					<ul>{mapList(large)}</ul>
				</li>
				<li>
					<h5>X Large</h5>
					<ul>{mapList(xlarge)}</ul>
				</li>
			</ul>
		)
	}
	const mapList = obj => {
		const temp = []
		for (const key in obj) {
			temp.push(
				<li
					key={uuid()}
					style={{ width: '100%', backgroundColor: 'red' }}>
					<span style={{ width: '75%' }}>{key}</span>
					<input style={{ width: '25%' }} type='text' />
				</li>
			)
		}
		return temp
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
						<div className='two'>
							<label>Color: </label>
							<input type='color' defaultValue='#ffffff' />
						</div>
						<div className='one'>
							<label>Opacity: </label>
							<input
								type='range'
								defaultValue='1'
								min='0'
								max='1'
							/>
						</div>
						<div className='ap-borders'>
							<input type='checkbox' defaultValue='false' />
							<span>Border</span>
							<div className='b'>
								<div className='two'>
									<div>
										<label>Size: </label>
										<input
											type='number'
											defaultValue='1'
											min='0'
										/>
									</div>
									<div>
										<label>Color: </label>
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
		</div>
	)
}

export default Propertiesbar
