import { toggleFavorite } from "../favorites";

test("toggleFavorite добавляет/удаляет товар из избранного", () => {
    const s1 = new Set();
    const s2 = toggleFavorite(s1, 42);
    expect(s2.has(42)).toBe(true);

    const s3 = toggleFavorite(s2, 42);
    expect(s3.has(42)).toBe(false);

    expect(s1.has(42)).toBe(false);
});
