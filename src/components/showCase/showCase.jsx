// sidebar
import SearchBar from './sidebar/searchBar/searchBar.jsx';
import CategoryFilter from './sidebar/categoryFilter/categoryFilter.jsx';
import PriceBar from './sidebar/priceBar/priceBar.jsx';
import ColorFilter from './sidebar/colorFilter/colorFilter.jsx';
import ApplyButton from './sidebar/applyButton/applyButton.jsx';
import Reviewed from './sidebar/reviewed/reviewed.jsx';
import SaleBanner from './sidebar/saleBanner/saleBanner.jsx';

// products-area
import Count from './productsArea/count/count.jsx';
import Sort from './productsArea/sort/sort.jsx';
import ProductCard from './productsArea/productCard/productCard.jsx';
import Pagination from './productsArea/pagination/pagination.jsx';

import { useMemo, useState } from 'react';


export default function ShowCase({
    products = [], // массив товаров
    page = 1,      // текущая страница
    pageSize = 12, // количество товаров на странице
    onPageChange,
}) {

    // ----- Храним состояния -----

    // поиск
    const [query, setQuery] = useState('');

    // категории: выбрана пользователем / применена
    const [pendingCategory, setPendingCategory] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All');

    // цена: выбрана / применена
    const [pendingPrice, setPendingPrice] = useState({ min: '', max: '' });
    const [activePrice, setActivePrice] = useState({ min: '', max: '' });

    // цвета: выбраны / применены (мультивыбор)
    const [pendingColors, setPendingColors] = useState([]); // ['red','blue',...]
    const [activeColors, setActiveColors] = useState([]);

    // сортировка: RELEVANCE | PRICE_ASC | PRICE_DESC
    const [sortMode, setSortMode] = useState('RELEVANCE');

    // ----- Брать данные динамически - json -----

    // категории из json
    const allCategories = useMemo(() => {
        const set = new Set();
        products.forEach((i) => (i.categories || []).forEach((cat) => cat && set.add(String(cat))));
        return ['All', ...Array.from(set)];
    }, [products]);

    // цвета из json 
    const allColors = useMemo(() => {
        const set = new Set();
        products.forEach((i) => {
            const raw = i.colors ?? i.color ?? [];
            const arr = Array.isArray(raw) ? raw : [raw];
            arr.forEach((color) => {
                const c = String(color || '').trim();
                if (c) set.add(c);
            });
        });
        return Array.from(set);
    }, [products]);

    //  мин/макс цен из json
    const [minPrice, maxPrice] = useMemo(() => {
        const cost = products.map((i) => Number(i.price)).filter((n) => !Number.isNaN(n));
        if (cost.length === 0) return [0, 0];
        return [Math.min(...cost), Math.max(...cost)];
    }, [products]);

    // ----- Фильтрация -----

    // 1) фильтрация по поиску (sideBar)
    const searched = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) return products;
        return products.filter((i) => (i.name || '').toLowerCase().includes(normalized));
    }, [products, query]);

    // 2) фильтрация по примененной категории (activeCategory) / (sideBar)
    const byCategory = useMemo(() => {
        if (!activeCategory || activeCategory === 'All') return searched;
        return searched.filter(p => (p.categories || []).includes(activeCategory));
    }, [searched, activeCategory]);

    // 3) фильтрация по применённой цене (sideBar)
    const byPrice = useMemo(() => {
        const min = Number(activePrice.min);
        const max = Number(activePrice.max);
        return byCategory.filter((i) => {
            const price = Number(i.price);
            if (!Number.isNaN(min) && activePrice.min !== '' && price < min) return false;
            if (!Number.isNaN(max) && activePrice.max !== '' && price > max) return false;
            return true;
        });
    }, [byCategory, activePrice]);

    // 4) фильтрация цветов (применённые) / (sideBar)
    const filtered = useMemo(() => {
        if (!activeColors.length) return byPrice;
        return byPrice.filter((i) => {
            const raw = i.colors ?? i.color ?? [];
            const colors = (Array.isArray(raw) ? raw : [raw]).map(c => String(c).toLowerCase());
            return activeColors.some(c => colors.includes(c));
        });
    }, [byPrice, activeColors]);

    // 5) сортировка (применяется к уже отфильтрованным товарам) / (productCard)
    const sorted = useMemo(() => {
        if (sortMode === 'PRICE_ASC') {
            return [...filtered].sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (sortMode === 'PRICE_DESC') {
            return [...filtered].sort((a, b) => Number(b.price) - Number(a.price));
        }
        return filtered; // RELEVANCE — исходный порядок
    }, [filtered, sortMode]);

    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const start = (page - 1) * pageSize;
    const visible = sorted.slice(start, start + pageSize);

    return (
        <div className="shop">
            <aside className="sidebar">
                <SearchBar
                    defaultValue=""
                    onChange={(i) => {
                        setQuery(i);
                        onPageChange?.(1); // при новом поиске — на первую страницу
                    }}
                />
                <CategoryFilter // фильтрация по категориям динамически
                    options={allCategories}
                    value={pendingCategory}
                    onChange={setPendingCategory}
                />
                <PriceBar // фильтрация по цене динамически
                    min={pendingPrice.min}
                    max={pendingPrice.max}
                    onChange={setPendingPrice}
                    minLimit={minPrice}
                    maxLimit={maxPrice}
                />
                <ColorFilter // фильтрация по цветам динамически
                    options={allColors}
                    value={pendingColors}
                    onChange={setPendingColors}
                />
                <ApplyButton // применить фильтр: переносим pending -> active
                    onApply={() => {
                        setActiveCategory(pendingCategory); // применяем категорию
                        setActivePrice(pendingPrice);   //  применяем цену
                        setActiveColors(pendingColors); // применяем цвета
                        onPageChange?.(1); // при применении фильтра — на первую страницу
                    }}
                />
                <Reviewed />
                <SaleBanner />
            </aside>
            <section className="products-wrapper">
                <div className="sort-and-count">
                    <Count total={sorted.length} />
                    <Sort
                        value={sortMode}
                        onChange={(mode) => { setSortMode(mode); onPageChange?.(1); }}
                    />
                </div>

                <div className="products">
                    {visible.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            priceCurrent={product.price}
                            priceOld={product.oldPrice}
                            sale={product.isSale}
                            isNew={product.isNew}
                            image={product.image}
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
