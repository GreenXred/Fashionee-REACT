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

import { useMemo, useState } from 'react';


export default function ShowCase({
    products = [], // массив товаров
    page = 1,      // текущая страница
    pageSize = 12, // количество товаров на странице
    onPageChange,
    totalCount = products.length,
    sort = 'RELEVANCE',
    onChangeSort = () => { },
}) {

    // поиск
    const [query, setQuery] = useState('');

    // категории: выбрана пользователем / применена
    const [pendingCategory, setPendingCategory] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All');

    // 1) фильтрация по поиску 
    const searched = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return products;
        return products.filter((p) => (p.name || '').toLowerCase().includes(q));
    }, [products, query]);

    // 2) фильтрация по примененной категории (activeCategory)
    const filtered = useMemo(() => {
        if (!activeCategory || activeCategory === 'All') return searched;
        return searched.filter(p => (p.categories || []).includes(activeCategory));
    }, [searched, activeCategory]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const start = (page - 1) * pageSize;
    const visible = filtered.slice(start, start + pageSize);

    return (
        <div className="shop">
            <aside className="sidebar">
                <SearchBar
                    defaultValue=""
                    onChange={(q) => {
                        setQuery(q);
                        onPageChange?.(1); // при новом поиске — на первую страницу
                    }}
                />
                <CategoryFilter // просто показать выбор
                    value={pendingCategory}
                    onChange={setPendingCategory}
                />
                <PriceBar />
                <ColorFilter />
                <ApplyButton // применить фильтр: переносим pending -> active
                    onApply={() => { setActiveCategory(pendingCategory); onPageChange?.(1); }}
                />
                <Reviewed />
                <SaleBanner />
            </aside>

            <section className="products-wrapper">
                <SortAndCount totalCount={filtered.length} sort={sort} onChangeSort={onChangeSort} />

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
