import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
	const [cuisine, setCuisine] = useState([])
	let params = useParams()

	useEffect(() => {
		getCuisine(params.type)
	}, [params.type])

	const getCuisine = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		)
		const recipes = await data.json()
		console.log(recipes.results)
		setCuisine(recipes.results)
	}

	return (
		<div
			className='grid'
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map(el => {
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

export default Cuisine
