import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "cart", element: <Cart /> },
  { path: "categories", element: <Categories /> },
  { path: "home", element: <Home /> },
  { path: "product", element: <ProductDetails /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
