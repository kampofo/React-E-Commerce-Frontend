import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/admin' element={< AdminPage />} />
        <Route path='/user/:id' element={< UserPage />} />
        <Route path='/search' element={< SearchPage />} />
        <Route path='/product/:id' element={< ProductPage />} />
        <Route path='/cart' element={< CartPage />} />
        <Route path='/checkout' element={< CheckoutPage />} />
        <Route path='*' element={< NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
