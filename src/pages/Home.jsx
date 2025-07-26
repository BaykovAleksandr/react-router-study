import { data, Link, NavLink} from 'react-router-dom'
import { products, categories } from '../data/data'

function Home() {
	return (
	<div>
		<h1>Categories</h1>
		<ul style={{display: 'flex'}}>{
			categories.map((item) => <li key={item.id}>
				<Link to={`/category/${item.name}`}>
				{item.name}
				<img src={item.img} alt={item.name} style={{width: '150px'}}/></Link>
			</li>)
			}</ul>
	</div>)
}

export default Home
