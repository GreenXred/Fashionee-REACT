export default function OrderWrapper() {
    return (
        <div className="container">
            <div className="cart">
                <div className="order-wrapper">
                    <div className="product-list">
                        <div className="product">
                            <div className="photo"></div>
                            <div className="product-info">
                                <div className="title">Fashionee - catton shirt (S)</div>
                                <div className="price-wrapper">
                                    <div className="price-and-quantity">
                                        <div className="price">
                                            <div className="old-price">$52.99</div>
                                            <div className="current-price">$35.99</div>
                                        </div>
                                        <div className="quantity">
                                            <div className="count-button">-</div>
                                            <div className="count">1</div>
                                            <div className="count-button">+</div>
                                        </div>
                                    </div>
                                    <div className="total-price">$35.99</div>
                                </div>
                                <div className="close">X</div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="photo"></div>
                            <div className="product-info">
                                <div className="title">Spray wrap skirt</div>
                                <div className="price-wrapper">
                                    <div className="price-and-quantity">
                                        <div className="price">
                                            <div className="current-price">$110.99</div>
                                            <div className="old-price">$52.99</div>
                                        </div>
                                        <div className="quantity">
                                            <div className="count-button">-</div>
                                            <div className="count">1</div>
                                            <div className="count-button">+</div>
                                        </div>
                                    </div>
                                    <div className="total-price">$110.99</div>
                                </div>
                                <div className="close">X</div>
                            </div>
                        </div>
                    </div>
                    <div className="order">
                        <div className="title">Your Order</div>
                        <div className="order-price-wrapper">
                            <div className="price-row">
                                <div className="name">Order price</div>
                                <div>$146.98</div>
                            </div>
                            <div className="price-row">
                                <div className="name">Discount for promo code</div>
                                <div className="no-price">No</div>
                            </div>
                            <div className="price-row delimiter">
                                <div className="name">
                                    Delivery <span className="additional">(Aug 02 at 16:00)</span>
                                </div>
                                <div className="price">$16</div>
                            </div>
                            <div className="price-row total">
                                <div className="name">Total</div>
                                <div className="price">$162.98</div>
                            </div>
                            <div className="button-wrapper">
                                <button className="button">Checkout</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}