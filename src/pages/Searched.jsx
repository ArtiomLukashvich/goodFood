import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Searched() {
	const [searchedRecipe, setSearchedRecipe] = useState([])
	let params = useParams()

	const getSearched = async name => {
		const data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`		)
		const recipes = await data.json()
		setSearchedRecipe(recipes.results)
	}

	useEffect(() => {
		getSearched(params.search)
	}, [params.search])

	return (
		<div className='grid'>
			{searchedRecipe.map(el => {
				return (
					<div className='cuisineCard' key={el.id}>
						<Link to={'/recipe/' + el.id}>
							<img src={el.image} alt={el.title} />
							<h4>{el.title}</h4>
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Searched
