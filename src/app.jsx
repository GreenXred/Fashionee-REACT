import { useState } from 'react';
import { FavoritesProvider } from './state/favoritesContext.jsx';
import { CartProvider } from './state/cartContext.jsx';
import ShopPage from './pages/shopPage/shopPage.jsx';
import CartPage from './pages/cartPage/cartPage.jsx';

export default function App() {
  const [page, setPage] = useState('shop');

  return (
    <CartProvider>
      <FavoritesProvider>
        {page === 'shop'
          ? <ShopPage goCart={() => setPage('cart')} />
          : <CartPage goShop={() => setPage('shop')} />}
      </FavoritesProvider>
    </CartProvider>
  );
}