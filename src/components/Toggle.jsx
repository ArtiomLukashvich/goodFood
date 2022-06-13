import React from 'react'

const Toggle = ({ value, onChange, icon }) => (
	<div className='toggle'>
		<input
			id='toggler'
			type='checkbox'
			onClick={onChange}
			checked={value}
			readOnly
		/>
		<label htmlFor='toggler'>{icon}</label>
	</div>
)

export default Toggle
