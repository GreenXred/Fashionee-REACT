import { useState } from 'react';
import data from '../../../products.json';

import Header from '../../components/header/header.jsx';
import ContentBlock from '../../components/contentBlock/contentBlock.jsx';
import ShowCase from '../../components/showCase/showCase.jsx';
import Footer from '../../components/footer/footer.jsx';

import './shop.css';

const PRODUCTS = data.products;

export default function ShopPage({ goCart }) {
  const [page, setPage] = useState(1);

  return (
    <>
      <Header onGoCart={goCart}/>
      <ContentBlock page="shop" onGoShop={() => {}} onGoCart={goCart} />

      <div className="container">
        <ShowCase
          products={PRODUCTS}
          page={page}
          pageSize={12}
          onPageChange={setPage}
        />
      </div>
      <Footer />
    </>
  );
}
