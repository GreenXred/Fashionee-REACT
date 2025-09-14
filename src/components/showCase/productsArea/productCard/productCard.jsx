import favorites from '../../../../assets/favorites.svg';

export default function ProductCard({ name, priceCurrent, priceOld, sale, isNew }) {
  return (
    <div className="product">
      <div className="photo">
        <div className="top-bar">
          <div className="labels">
            {sale && <div className="label sale">Sale</div>}
            {isNew && <div className="label new">New</div>}
          </div>
          <div className="favorits">
            <img src={favorites} alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="name">{name}</div>
        <div className="price">
          <div className="current-price">${priceCurrent}</div>
          {priceOld && <div className="old-price">${priceOld}</div>}
        </div>
      </div>
    </div>
  );
}
