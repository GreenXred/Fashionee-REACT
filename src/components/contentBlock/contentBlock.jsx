import './contentBlock.css';

import bigDotsField from '../../assets/big-dots-field.svg';

export default function ContentBlock({ page, onGoShop, onGoCart }) {
    const isShop = page === 'shop';

    return (
        <nav className="nav">
            <div className="container">
                <div className="page-description">
                    <div className="description">
                        <div className="description-title">
                            <span>{isShop ? 'Shop' : 'Cart'}</span>
                        </div>
                        <div className="mini-nav">
                            <div className="vertical-line"></div>
                            <div className={'mini-nav-item' + (isShop ? ' active' : '')}
                                onClick={onGoShop}
                            >
                                <span>Shop</span>
                            </div>
                            <div className={'mini-nav-item' + (isShop ? '' : ' active')}
                                onClick={onGoCart}
                            >
                                <span>Cart</span>
                            </div>
                        </div>
                        <div className="border-line"></div>
                    </div>
                    <div className="top-banner">
                        <a href="#" aria-label='top-banner'></a>
                    </div>
                    <div className="dots-background">
                        <img src={bigDotsField} alt="Big dots field" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
