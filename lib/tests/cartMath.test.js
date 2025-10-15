import { calcSubtotal, calcDiscount, calcTotal, DELIVERY_PRICE } from "../cartMath";

describe("cart math", () => {
    const items = [
        { id: 1, priceCurrent: 35.99, qty: 2 }, 
        { id: 2, priceCurrent: 80.99, qty: 1 }  
    ];

    test("считает subtotal по цене * количеству", () => {
        const subtotal = calcSubtotal(items);
        expect(subtotal).toBeCloseTo(71.98 + 80.99, 2); // 152.97
    });

    test("применяет 10% по промокоду ilovereact", () => {
        const subtotal = 200;
        expect(calcDiscount("ilovereact", subtotal)).toBeCloseTo(20, 2);
        expect(calcDiscount("ILOVEREACT", subtotal)).toBeCloseTo(20, 2); 
        expect(calcDiscount("wrong", subtotal)).toBe(0);
    });

    test("считает total = subtotal - discount + delivery", () => {
        const subtotal = 152.97;
        const discount = calcDiscount("ilovereact", subtotal); 
        const total = calcTotal({ subtotal, discount, delivery: DELIVERY_PRICE });
        expect(total).toBeCloseTo(subtotal - discount + DELIVERY_PRICE, 2);
    });
});
