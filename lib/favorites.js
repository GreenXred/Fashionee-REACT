export function toggleFavorite(prevSet, productId) {
    const next = new Set(prevSet);
    if (next.has(productId)) next.delete(productId);
    else next.add(productId);
    return next;
}
