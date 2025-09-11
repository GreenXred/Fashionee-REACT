export default function OrderWrapper() {
    return (
        <div className="container">
            <div className="cart">
                <div className="order-wrapper">
                    <div className="order">
                        <div className="order-price-wrapper">
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