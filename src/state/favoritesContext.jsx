import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);
const LS_KEY = 'favorites';

export function FavoritesProvider({ children }) {
    // загружаем из localStorage один раз при старте
    const [ids, setIds] = useState(function () {
        try {
            const raw = localStorage.getItem(LS_KEY);
            const arr = raw ? JSON.parse(raw) : [];
            return new Set(Array.isArray(arr) ? arr : []);
        } catch {
            return new Set();
        }
    });

    // запись в localStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(Array.from(ids)));
    }, [ids]);

    const api = useMemo(() => ({
        count: ids.size,
        isFavorite: (id) => ids.has(id),
        toggleFavorite: (id) =>
            setIds(prev => {
                const next = new Set(prev);
                next.has(id) ? next.delete(id) : next.add(id);
                return next;
            }),
        clearFavorites: () => setIds(new Set()),
    }), [ids]);

    return <FavoritesContext.Provider value={api}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error('useFavorites must be used within <FavoritesProvider>');
    return ctx;
}
