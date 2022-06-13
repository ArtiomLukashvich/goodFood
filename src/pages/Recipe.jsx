import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
	const [details, setDetails] = useState({})
	const [activeTab, setActiveTab] = useState('instructions')
	let params = useParams()

	useEffect(() => {
		fetchDetails(params.name)
	}, [params.name])

	const fetchDetails = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		)
		const detailData = await data.json()
		setDetails(detailData)
	}

	return (
		<div className='detailWrapper'>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</div>
			<div className='info'>
				<button
					className={
						activeTab === 'instructions' ? 'button activeButton' : 'button'
					}
					onClick={() => {
						setActiveTab('instructions')
					}}
				>
					Instructions
				</button>
				<button
					className={
						activeTab === 'ingredients' ? 'button activeButton' : 'button'
					}
					onClick={() => {
						setActiveTab('ingredients')
					}}
				>
					Ingredients
				</button>
				{activeTab === 'instructions' && (
					<div>
						{/* <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3> */}
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map(ingredient => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Recipe
