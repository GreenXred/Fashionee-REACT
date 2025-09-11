import "./header.css";

import logo from '../assets/logo.svg';
import arrow from '../assets/arrow.svg';
import arrowPink from '../assets/arrow-pink.svg';
import search from '../assets/search.svg';
import profile from '../assets/profile.svg';
import favorites from '../assets/favorites.svg';
import cart from '../assets/cart.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <span>Pages</span>
                        <img src={arrow} alt="arrow" className="arrow-inactive" />
                        <img src={arrowPink} alt="arrow-pink" className="arrow-active" />
                    </div>
                    <div className="menu-item active">
                        <span>Shop</span>
                        <img src={arrow} alt="arrow" className="arrow-inactive" />
                        <img src={arrowPink} alt="arrow-pink" className="arrow-active" />
                    </div>
                    <div className="menu-item">
                        <span>Blog</span>
                    </div>
                    <div className="menu-item">
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="header-icon">
                    <img src={search} alt="search" />
                </div>
                <div className="header-icon">
                    <img src={profile} alt="profile" />
                </div>
                <div className="header-icon">
                    <img src={favorites} alt="favorites" />
                    <div className="counter">1</div>
                </div>
                <div className="header-icon">
                    <img src={cart} alt="cart" />
                    <div className="counter">2</div>
                </div>
            </div>
        </header >
    );
}
