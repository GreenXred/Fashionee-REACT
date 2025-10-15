export const DELIVERY_PRICE = 16;

export function calcSubtotal(items) {
    return items.reduce((sum, it) => sum + (it.priceCurrent ?? 0) * (it.qty ?? 0), 0);
}

// промокод: ilovereact -> 10%
export function calcDiscount(code, subtotal) {
    if (!code || subtotal <= 0) return 0;
    return code.trim().toLowerCase() === "ilovereact" ? +(subtotal * 0.1).toFixed(2) : 0;
}

export function calcTotal({ subtotal, discount, delivery = DELIVERY_PRICE }) {
    return +(subtotal - discount + delivery).toFixed(2);
}
