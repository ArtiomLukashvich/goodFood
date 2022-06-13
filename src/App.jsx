// import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import Category from './components/Category'
import Search from './components/Search'
import Pages from './pages/Pages'
import { ImSpoonKnife } from 'react-icons/im'
import { HiOutlineSun } from 'react-icons/hi'
import { RiMoonLine } from 'react-icons/ri'
import { ThemeContext, themes } from './contexts/ThemeContext'
import Toggle from './components/Toggle'

function App() {
	return (
		<BrowserRouter>
			<div className='nav'>
				<div className='logoContainer'>
					<ImSpoonKnife />
					<Link className='logo' to={'/'}>
						goodFood
					</Link>
				</div>
				<ThemeContext.Consumer>
					{({ theme, setTheme }) => (
						<Toggle
							onChange={() => {
								if (theme === themes.light) setTheme(themes.dark)
								if (theme === themes.dark) setTheme(themes.light)
							}}
							icon={
								theme === 'dark' ? (
									<RiMoonLine className='ico' />
								) : (
									<HiOutlineSun className='ico' />
								)
							}
							value={theme === themes.dark}
						/>
					)}
				</ThemeContext.Consumer>
			</div>
			<Search />
			<Category />
			<Pages />
		</BrowserRouter>
	)
}

export default App
