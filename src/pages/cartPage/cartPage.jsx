import './cartPage.css';

// шапка и верхний нав-блок
import Header from '../../components/header/header.jsx';
import ContentBlock from '../../components/contentBlock/contentBlock.jsx';

// левая/правая части заказа/промо
import OrderWrapper from '../../components/cart/orderWrapper/orderWrapper.jsx';
import Promo from '../../components/cart/promoCodeWrapper/promo.jsx';

export default function CartPage() {
  return (
    <>
      <Header />
      <ContentBlock />
      
      <div className="container">
        <div className="cart">
          <OrderWrapper />
          <Promo />
        </div>
      </div>
    </>
  );
}
