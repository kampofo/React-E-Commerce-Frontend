import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/admin' element={< AdminPage />} />
        <Route path='/user/:id' element={< UserPage />} />
        <Route path='/product/:id' element={< ProductPage />} />
        <Route path='/cart' element={< CartPage />} />
        <Route path='/checkout' element={< CheckoutPage />} />
        <Route path='*' element={< NotFound />} />
      </Routes>
    </Router>
  );
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("/api/v1/products");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // return (
  //   <>
  //     <div>
  //       {products.map((product) => {
  //         return (
  //           <div key={product.id}>
  //             <h3>{product.name}</h3>
  //             <p>{product.description}</p>
  //             <strong>${product.price}</strong>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
}

export default App;
