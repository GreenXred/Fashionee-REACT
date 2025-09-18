// sidebar
import SearchBar from './sidebar/searchBar/searchBar.jsx';
import CategoryFilter from './sidebar/categoryFilter/categoryFilter.jsx';
import PriceBar from './sidebar/priceBar/priceBar.jsx';
import ColorFilter from './sidebar/colorFilter/colorFilter.jsx';
import ApplyButton from './sidebar/applyButton/applyButton.jsx';
import Reviewed from './sidebar/reviewed/reviewed.jsx';
import SaleBanner from './sidebar/saleBanner/saleBanner.jsx';

// products-area
import SortAndCount from './productsArea/sortAndCount/sortAndCount.jsx';
import ProductCard from './productsArea/productCard/productCard.jsx';
import Pagination from './productsArea/pagination/pagination.jsx';

export default function ShowCase({
    products = [], // массив товаров
    page = 1,      // текущая страница
    pageSize = 12, // количество товаров на странице
    onPageChange,
    totalCount = products.length,
    sort = 'RELEVANCE',
    onChangeSort = () => { },
}) {
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
    const start = (page - 1) * pageSize;
    const visible = products.slice(start, start + pageSize);

    return (
        <div className="shop">
            <aside className="sidebar">
                <SearchBar />
                <CategoryFilter />
                <PriceBar />
                <ColorFilter />
                <ApplyButton />
                <Reviewed />
                <SaleBanner />
            </aside>

            <section className="products-wrapper">
                <SortAndCount totalCount={totalCount} sort={sort} onChangeSort={onChangeSort} />

                <div className="products">
                    {visible.map((p) => (
                        <ProductCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            priceCurrent={p.price}
                            priceOld={p.oldPrice}
                            sale={p.isSale}
                            isNew={p.isNew}
                            image={p.image}
                        />
                    ))}
                </div>

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPrev={() => onPageChange?.(Math.max(1, page - 1))}
                    onNext={() => onPageChange?.(Math.min(totalPages, page + 1))}
                    onSelect={(n) => onPageChange?.(n)}
                />
            </section>
        </div>
    );
}
