import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();

  const currentCategoryArray = products.filter(
    (products) => products.categoryId === categoryId
  );

  return (
    <div>
      <h1>Category {categoryId}</h1>
      <ul style={{display: 'flex'}}>
        {currentCategoryArray.map((product) => (
          <li key={product.name}>
			<Link to={`/product/${product.id}`}>
			{product.name} {product.price}$
			<img src={product.img} alt={product.name} style={{width: '150px'}}/>
			</Link>
		  </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
