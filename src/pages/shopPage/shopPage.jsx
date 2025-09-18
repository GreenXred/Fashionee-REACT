import { useState } from 'react';
import './shop.css';
import data from '../../../products.json';

import Header from '../../components/header/header.jsx';
import ContentBlock from '../../components/contentBlock/contentBlock.jsx';
import ShowCase from '../../components/showCase/showCase.jsx';

const PRODUCTS = data.products;

export default function ShopPage({ goCart }) {
  const [page, setPage] = useState(1);

  return (
    <>
      <Header />
      <ContentBlock page="shop" onGoShop={() => {}} onGoCart={goCart} />

      <div className="container">
        <ShowCase
          products={PRODUCTS}
          page={page}
          pageSize={12}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
