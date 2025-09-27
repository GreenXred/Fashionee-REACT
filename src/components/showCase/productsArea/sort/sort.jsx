// Компонент Sort: выбираем тип сортировки
export default function Sort({ value = 'RELEVANCE', onChange }) {
    return (
        <div className="sort">
            <label className="visually-hidden" htmlFor="sort">Sort</label>
            <select
                id="sort"
                className="input"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="RELEVANCE">By relevance</option>
                <option value="PRICE_ASC">Price: low → high</option>
                <option value="PRICE_DESC">Price: high → low</option>
            </select>
        </div>
    );
}
