import favorites from '../../../../assets/favorites.svg';
import { useFavorites } from '../../../../state/favoritesContext.jsx';
import { useCart } from '../../../../state/cartContext.jsx';


export default function ProductCard({ id, name, priceCurrent, priceOld, sale, isNew, image }) {
  const fav = useFavorites();
  const isFav = fav.isFavorite(id);
  const cart = useCart();
  const qty = cart.getQty(id);

  return (
    <div className="product">
      <div className="photo">
        {image ? <img className="photo-img" src={image} alt={name} /> : null}
        <div className="top-bar">
          <div className="labels">
            {sale && <div className="label sale">Sale</div>}
            {isNew && <div className="label new">New</div>}
          </div>
          <button
            type="button"
            className={'favorits' + (isFav ? ' active' : '')}
            onClick={() => fav.toggleFavorite(id)}
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <img src={favorites} alt="favorite" />
          </button>
        </div>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">
          <div className="current-price">${priceCurrent}</div>
          {priceOld != null && <div className="old-price">${priceOld}</div>}
        </div>
      </div>
      {qty === 0 ? (
        <button className="buy-button" onClick={() => cart.addOne(id)}>
          Buy
        </button>
      ) : (
        <div className="buy-panel">
          <button className="qty-btn minus" onClick={() => cart.removeOne(id)}>−</button>
          <div className="qty">{qty}</div>
          <button className="qty-btn plus" onClick={() => cart.addOne(id)}>+</button>
        </div>
      )}
    </div>
  );
}
