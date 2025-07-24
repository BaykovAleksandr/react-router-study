import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Home />
//         <Header />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "cart",
//     element: (
//       <>
//         <Header />
//         <Cart />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "categories",
//     element: (
//       <>
//         <Header />
//         <Categories />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "home",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "product",
//     element: (
//       <>
//         <Header />
//         <ProductDetails />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//       </>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "cart", element: <Cart /> },
    { path: "categories", element: <Categories /> },{ path: "404", element: <NotFound /> },{ path: "products", element: <ProductDetails /> }]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
