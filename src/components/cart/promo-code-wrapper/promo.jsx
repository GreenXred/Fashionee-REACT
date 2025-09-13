import buttonArrow from "../../../assets/button-arrow.svg";

export default function Promo() {
    return (
        <div className="promo-code-wrapper">
            <div className="info">
                <div className="title">You have a Promo Code?</div>
                <div className="description">
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <div className="promo-code">
                <input type="text" name="promo-code" className="input" placeholder="Enter Promo Code" />
                <div className="button-wrapper">
                    <button className="button">
                        <img src={buttonArrow} alt="Arrow icon" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="find-us">
                <div className="find-us-text">Find us here:</div>
                <div className="find-us-links">
                    <div className="find-us-link">
                        <a href="#" aria-label="Find us">FB</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#" aria-label="Follow us on Facebook">TW</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#" aria-label="Follow us on Instagram">INS</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="#" aria-label="Follow us on PT">PT</a>
                    </div>
                </div>
            </div>
        </div>
    );
}