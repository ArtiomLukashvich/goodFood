import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function Search() {
	const [search, setSearch] = useState('')
	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		navigate('/searched/' + search)
	}

	return (
		<form className='search' onSubmit={submitHandler}>
			<GoSearch />
			<input
				type='text'
				value={search}
				onChange={e => {
					setSearch(e.target.value)
				}}
			/>
		</form>
	)
}

export default Search
