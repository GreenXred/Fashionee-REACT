import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const LS_KEY = 'cart';

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            const raw = localStorage.getItem(LS_KEY);
            const obj = raw ? JSON.parse(raw) : {};
            const m = new Map();
            if (obj && typeof obj === 'object') {
                Object.entries(obj).forEach(([k, v]) => { if (v > 0) m.set(String(k), Number(v)); });
            }
            return m;
        } catch {
            return new Map();
        }
    });

    useEffect(() => {
        const obj = Object.fromEntries(cart.entries());
        localStorage.setItem(LS_KEY, JSON.stringify(obj));
    }, [cart]);

    const api = useMemo(() => {
        const totalCount = Array.from(cart.values()).reduce((s, n) => s + n, 0);

        function addOne(id) {
            setCart(prev => {
                const next = new Map(prev);
                const key = String(id);
                next.set(key, (next.get(key) || 0) + 1);
                return next;
            });
        }

        function removeOne(id) {
            setCart(prev => {
                const next = new Map(prev);
                const key = String(id);
                const cur = next.get(key) || 0;
                if (cur <= 1) next.delete(key);
                else next.set(key, cur - 1);
                return next;
            });
        }

        function setQty(id, qty) {
            setCart(prev => {
                const next = new Map(prev);
                const key = String(id);
                if (qty > 0) next.set(key, qty);
                else next.delete(key);
                return next;
            });
        }

        return {
            totalCount,
            getQty: (id) => cart.get(String(id)) || 0,
            addOne,
            removeOne,
            setQty,
            clear: () => setCart(new Map()),
        };
    }, [cart]);

    return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within <CartProvider>');
    return ctx;
}
