import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Veggie() {
	const [veggie, setVeggie] = useState([])

	useEffect(() => {
		getVeggie()
	}, [])

	const getVeggie = async () => {
		const checkLocal = localStorage.getItem('veggie')
		if (checkLocal) {
			setVeggie(JSON.parse(checkLocal))
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			)

			const data = await api.json()
			localStorage.setItem('veggie', JSON.stringify(data.recipes))
			setVeggie(data.recipes)
		}
	}

	return (
		<div>
			<div className='wrapper'>
				<h3>Vegetarian Picks</h3>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						drag: 'free',
						gap: '4rem',
					}}
				>
					{veggie.map(recipe => {
						return (
							<SplideSlide key={recipe.id}>
								<div className='card'>
									<Link to={'/recipe/' + recipe.id}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
										<div className='gradient' />
									</Link>
								</div>
							</SplideSlide>
						)
					})}
				</Splide>
			</div>
		</div>
	)
}

export default Veggie
