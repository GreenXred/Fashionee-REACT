import { useState } from 'react';
import ShopPage from './pages/shopPage/shopPage.jsx';
import CartPage from './pages/cartPage/cartPage.jsx';

export default function App() {
  const [page, setPage] = useState('shop');

  return page === 'shop'
    ? <ShopPage goCart={() => setPage('cart')} />
    : <CartPage goShop={() => setPage('shop')} />;
}
