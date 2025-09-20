export default function SortAndCount({
    totalCount = 0,
    sort = 'RELEVANCE',
    onChangeSort,
}) {
    return (
        <div className="sort-and-count">
            <div className="products-count">
                There are <span className="bold">{totalCount}</span> products in this category
            </div>

            <div className="sort">
                <select
                    className="input"
                    value={sort}
                    onChange={(e) => onChangeSort?.(e.target.value)}
                >
                    <option value="RELEVANCE">Relevance</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
            </div>
        </div>
    );
}
