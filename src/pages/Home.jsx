import { data, Link, NavLink, useLocation } from "react-router-dom";
import { products, categories } from "../data/data";

function Home() {
	const location = useLocation();
	console.log(location)
  return (
    <div>
      <Link
        to="/category/Electronics"
        state={{ from: "Home Page", maxPrice: 600 }}
      >
        Look at our cheap goods
      </Link>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((item) => (
          <li key={item.id}>
            <Link to={`/category/${item.name}`}>
              {item.name}
              <img src={item.img} alt={item.name} style={{ width: "150px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
