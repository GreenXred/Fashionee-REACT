import './contentBlock.css';

import bigDotsField from '../assets/bigDotsField.svg';

export default function ContentBlock() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="page-description">
                    <div className="description">
                        <div className="description-title">
                            <span>Shop</span>
                        </div>
                        <div className="mini-nav">
                            <div className="vertical-line"></div>
                            <div className="mini-nav-item">
                                <span>Home</span>
                            </div>
                            <div className="mini-nav-item active">
                                <span>Shop</span>
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
