import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiFastNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Category() {
	return (
		<div className='list'>
			<NavLink className='sLink' to={'/cuisine/Italian'}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</NavLink>
			<NavLink className='sLink' to={'/cuisine/American'}>
				<FaHamburger />
				<h4>American</h4>
			</NavLink>
			<NavLink className='sLink' to={'/cuisine/Thai'}>
				<GiFastNoodles />
				<h4>Thai</h4>
			</NavLink>
			<NavLink className='sLink' to={'/cuisine/Chinese'}>
				<GiChopsticks />
				<h4>Chinese</h4>
			</NavLink>
		</div>
	)
}

export default Category
