import { useState } from "react";
import { useCart } from "../../../state/cartContext";

import buttonArrow from "../../../assets/button-arrow.svg";



export default function Promo() {

    // ----- текущее значение промокода и сеттер из контекста ----- //
    const { promo, setPromo } = useCart();
    // ----- локальное состояние поля (начало из контекста) ----- //
    const [value, setValue] = useState(promo);
    // ----- обработчик сабмита формы ----- // 
    const apply = (e) => {
        e?.preventDefault?.();
        setPromo(value);
    };


    return (
        <div className="promo-code-wrapper">
            <div className="info">
                <div className="title">You have a Promo Code?</div>
                <div className="description">
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <form className="promo-code" onSubmit={apply}>
                <input
                    type="text"
                    name="promo-code"
                    className="input"
                    data-testid="promo-input"
                    placeholder="Enter Promo Code"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="button-wrapper">
                    <button type="submit" className="button" data-testid="promo-apply" aria-label="Apply">
                        <img src={buttonArrow} alt="Arrow icon" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </form>
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