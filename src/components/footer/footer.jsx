import "./footer.css"

import logo from '../../assets/icons/logo.svg';
import send from '../../assets/icons/send.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import paypal from '../../assets/icons/paypal.svg';
import payoneer from '../../assets/icons/payoneer.svg';
import bigDots from '../../assets/big-dots-field.svg';
import smallDots from '../../assets/small-dots-field.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="column column-1">
                        <div className="logo">
                            <img src="./icons/logo.svg" alt="logo" />
                        </div>
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column column-2">
                        <div className="title">About</div>
                        <ul className="custom-list">
                            <li className="item"><a href="">About us</a></li>
                            <li className="item"><a href="">Collections</a></li>
                            <li className="item"><a href="">Shop</a></li>
                            <li className="item"><a href="">Blog</a></li>
                            <li className="item"><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="column column-3">
                        <div className="title">Useful links</div>
                        <ul className="custom-list">
                            <li className="item"><a href="">Privacy Policy</a></li>
                            <li className="item"><a href="">Terms of use</a></li>
                            <li className="item"><a href="">Support</a></li>
                            <li className="item"><a href="">Shipping details</a></li>
                            <li className="item"><a href="">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="column column-4">
                        <div className="title">Newsletter</div>
                        <div className="newsletter-text">
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className="newsletter-form">
                            <input
                                id="newsletter-email"
                                className="input"
                                type="email"
                                placeholder="Your e-mail"
                            />
                            <label className="send" htmlFor="newsletter-email" aria-label="Submit email">
                                <img src="/icons/send.svg" alt="" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className="payment-methods-container">
                        <div>Payment methods:</div>
                        <div className="payment-methods">
                            <div className="payment-method">
                                <img src={visa} alt="visa" />
                            </div>
                            <div className="payment-method">
                                <img src={mastercard} alt="mastercard" />
                            </div>
                            <div className="payment-method">
                                <img src={paypal} alt="paypal" />
                            </div>
                            <div className="payment-method">
                                <img src={payoneer} alt="payoneer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="big-dots-background">
                    <img src={big - dots - field} alt="" />
                </div>
                <div className="small-dots-background">
                    <img src={small - dots - field} alt="" />
                </div>
            </div>
        </footer>
    )
}