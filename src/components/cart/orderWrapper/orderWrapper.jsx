import { useMemo } from "react";
import { useCart } from "../../../state/cartContext";
import data from "../../../../products.json"

const DELIVERY_FEE = 15; // доставку фиксируем для примера                                      

export default function OrderWrapper() {
    const cart = useCart();
    const products = data.products || [];

    // ----- позиции корзины с данными товара -----
    const items = useMemo(() => { // 
        return cart.items
            .map(({ id, qty }) => {
                const p = products.find(pr => String(pr.id) === String(id));
                if (!p) return null; // если вдруг товар не найден
                const price = Number(p.price) || 0;
                const oldPrice = p.oldPrice != null ? Number(p.oldPrice) : null;
                const lineTotal = price * qty;
                return {
                    id,
                    qty,
                    name: p.name,
                    image: p.image,
                    price,
                    oldPrice,
                    lineTotal
                };
            })
            .filter(Boolean);
    }, [cart.items, products]);

    // ----- перерасчет итогов -----
    const orderPrice = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const delivery = items.length ? DELIVERY_FEE : 0;
    const discount = cart.isPromoValid ? orderPrice * 0.10 : 0;     //  10% по промо 'ilovereact'
    const total = (orderPrice - discount) + delivery;               //  учитываем скидку из промо

    // ----- когда пустая корзина -----
    if (items.length === 0) {
        return (
            <div className="order-wrapper">
                <div className="product-list empty">Your cart is empty</div>
                <div className="order">
                    <div className="title">Your Order</div>
                    <div className="order-price-wrapper">
                        <div className="price-row"><div className="name">Order price</div><div>$0</div></div>
                        <div className="price-row"><div className="name">Discount for promo code</div><div className="no-price">No</div></div>
                        <div className="price-row delimiter"><div className="name">Delivery</div><div className="price">$0</div></div>
                        <div className="price-row total"><div className="name">Total</div><div className="price">$0</div></div>
                        <div className="button-wrapper"><button className="button" disabled>Checkout</button><div className="vertical-line"></div></div>
                    </div>
                </div>
            </div>
        );
    }

    // -----  корзина  -----
    return (
        <div className="order-wrapper">
            <div className="product-list">
                {items.map(it => (
                    <div className="product" key={it.id}>
                        <div className="photo">{it.image ? <img src={it.image} alt={it.name} /> : null}</div>
                        <div className="product-info">
                            <div className="title">{it.name}</div>

                            <div className="price-wrapper">
                                <div className="price-and-quantity">
                                    <div className="price">
                                        {it.oldPrice != null ? <div className="old-price">${it.oldPrice}</div> : null}
                                        <div className="current-price">${it.price}</div>
                                    </div>

                                    {/* блок количества товаров */}
                                    <div className="quantity">
                                        <div className="count-button" onClick={() => cart.removeOne(it.id)}>-</div>
                                        <div className="count">{it.qty}</div>
                                        <div className="count-button" onClick={() => cart.addOne(it.id)}>+</div>
                                    </div>
                                </div>

                                {/* NEW: сумма по позиции */}
                                <div className="total-price">${it.lineTotal.toFixed(2)}</div>
                            </div>
                            {/* NEW: удалить позицию */}
                            <div className="close" onClick={() => cart.setQty(it.id, 0)}>X</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* блок Your Order */}
            <div className="order">
                <div className="title">Your Order</div>
                <div className="order-price-wrapper">
                    <div className="price-row">
                        <div className="name">Order price</div>
                        <div>${orderPrice.toFixed(2)}</div>
                    </div>
                    {/* скидка по промокоду */}
                    <div className="price-row">
                        <div className="name">Discount for promo code</div>
                        <div className={discount ? 'price minus' : 'no-price'}>
                            {discount ? `- $${discount.toFixed(2)}` : 'No'}
                        </div>
                    </div>
                    <div className="price-row delimiter">
                        <div className="name">Delivery</div>
                        <div className="price">${delivery.toFixed(2)}</div>
                    </div>
                    <div className="price-row total">
                        <div className="name">Total</div>
                        <div className="price">${total.toFixed(2)}</div>
                    </div>
                    <div className="button-wrapper">
                        <button className="button">Checkout</button>
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}