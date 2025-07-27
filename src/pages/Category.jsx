import { Link, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPrice = searchParams.get("maxPrice") ?  Number(searchParams.get("maxPrice")) :Infinity;

  const currentCategoryArray = products.filter(
    (product) =>
      product.categoryId === categoryId && product.price <= maxPrice
  );

  function handldeChange(evt) {
    const value = evt.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <>
      <h1>Category {categoryId}</h1>
      <div>
        <label htmlFor="maxPrice"></label>
        <input
          type="number"
          id="maxPrice"
          placeholder="enter max price"
          onChange={handldeChange}
          value={searchParams.get("maxPrice") || ""}
        />
      </div>
      <ul style={{ display: "flex" }}>
        {currentCategoryArray.map((product) => (
          <li key={product.name}>
            <Link to={`/product/${product.id}`}>
              {product.name} {product.price}$
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
