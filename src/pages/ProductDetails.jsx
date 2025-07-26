import { useParams } from "react-router-dom";
import { products } from "../data/data";
import NotFound from './NotFound';

function ProductDetails() {
  const { productId } = useParams();

  const currentProduct = products.find((p) => p.id === parseInt(productId));

  return (
    <div>
      {currentProduct ? (
        <>
          <h1>Product Details</h1>
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.price}$</p>

          <img
            src={currentProduct.img}
            alt={currentProduct.name}
            style={{ width: "250px" }}
          />
        </>
      ) : (
        <p><NotFound/></p>
      )}
    </div>
  );
}

export default ProductDetails;
