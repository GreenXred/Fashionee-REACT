import "../../../assets/button-arrow.svg";

export default function Promo() {
    return (
        <div className="container">
            <div className="cart">
                <div class="promo-code-wrapper">
                    <div class="info">
                        <div class="title">You have a Promo Code?</div>
                        <div class="description">
                            To receive up-to-date promotional codes, subscribe to us on social networks.
                        </div>
                    </div>
                    <div class="promo-code">
                        <input type="text" name="promo-code" class="input" placeholder="Enter Promo Code" />
                            <div class="button-wrapper">
                                <button class="button">
                                    <img src={buttonArrow} alt="Arrow icon" />
                                </button>
                                <div class="vertical-line"></div>
                            </div>
                    </div>
                    <div class="find-us">
                        <div class="find-us-text">Find us here:</div>
                        <div class="find-us-links">
                            <div class="find-us-link">
                                <a href="">FB</a>
                            </div>
                            <div class="line"></div>
                            <div class="find-us-link">
                                <a href="">TW</a>
                            </div>
                            <div class="line"></div>
                            <div class="find-us-link">
                                <a href="">INS</a>
                            </div>
                            <div class="line"></div>
                            <div class="find-us-link">
                                <a href="">PT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}