import './shop.css';

// Верх страницы
import Header from '../../components/header/header.jsx';
import ContentBlock from '../../components/contentBlock/contentBlock.jsx'; //

// Левая колонка (sidebar)
import SearchBar from '../../components/showCase/sidebar/searchBar/searchBar.jsx';
import CategoryFilter from '../../components/showCase/sidebar/categoryFilter/categoryFilter.jsx';
import PriceBar from '../../components/showCase/sidebar/priceBar/priceBar.jsx';
import ColorFilter from '../../components/showCase/sidebar/colorFilter/colorFilter.jsx';
import ApplyButton from '../../components/showCase/sidebar/applyButton/applyButton.jsx';
import Reviewed from '../../components/showCase/sidebar/reviewed/reviewed.jsx';
import SaleBanner from '../../components/showCase/sidebar/saleBanner/saleBanner.jsx';

// Правая колонка (каталог)
import SortAndCount from '../../components/showCase/productsArea/sortAndCount/sortAndCount.jsx';
import ProductCard from '../../components/showCase/productsArea/productCard/productCard.jsx';
import Pagination from '../../components/showCase/productsArea/pagination/pagination.jsx';

// Моки для сетки (замени реальными данными при подключении API/JSON)
const PRODUCTS = [
    { id: 1, name: 'Textured turtleneck with zip', priceCurrent: 53.99, priceOld: 59.99, sale: true, isNew: false },
    { id: 2, name: 'Spray wrap skirt', priceCurrent: 35.99, priceOld: null, sale: false, isNew: false },
    { id: 3, name: 'Short shorts with straps', priceCurrent: 20.99, priceOld: null, sale: false, isNew: false },
    { id: 4, name: 'Warm casual sweater', priceCurrent: 80.99, priceOld: null, sale: false, isNew: true },
    { id: 5, name: 'Retro style handbag', priceCurrent: 45.99, priceOld: 59.99, sale: true, isNew: false },
    { id: 6, name: 'Long oversized T-shirt', priceCurrent: 30.99, priceOld: 59.99, sale: true, isNew: false },
    { id: 7, name: 'Shoulder bag', priceCurrent: 60.99, priceOld: null, sale: false, isNew: true },
    { id: 8, name: 'Stylish and comfortable cap', priceCurrent: 40.99, priceOld: null, sale: false, isNew: false },
    { id: 9, name: 'Blouse with insert and ruffles', priceCurrent: 30.99, priceOld: null, sale: false, isNew: true },
];

export default function ShopPage() {
    // Пока заглушки — стили и верстка уже совпадут
    const totalCount = 67;
    const sort = 'RELEVANCE';

    function handleChangeSort(value) {
        console.log('sort:', value);
    }
    function handlePrev() { console.log('prev'); }
    function handleNext() { console.log('next'); }

    return (
        <>
            {/* Верхняя шапка и блок с заголовком страницы */}
            <Header />
            <ContentBlock title="Shop" breadcrumbs={['Home', 'Shop']} />

            {/* Каркас страницы как в исходной вёрстке */}
            <div className="container">
                <div className="shop">
                    {/* Левая колонка — важный момент: НЕ дублируем заголовки/обёртки,
              т.к. они уже внутри самих компонентов сайдбара */}
                    <aside className="sidebar">
                        <SearchBar />
                        <CategoryFilter />
                        <PriceBar />
                        <ColorFilter />
                        <ApplyButton />
                        <Reviewed />
                        <SaleBanner />
                    </aside>

                    {/* Правая колонка — сортировка, сетка и пагинация */}
                    <section className="products-wrapper">
                        <SortAndCount
                            totalCount={totalCount}
                            sort={sort}
                            onChangeSort={handleChangeSort}
                        />

                        <div className="products">
                            {PRODUCTS.map(function (p) {
                                return (
                                    <ProductCard
                                        key={p.id}
                                        name={p.name}
                                        priceCurrent={p.priceCurrent}
                                        priceOld={p.priceOld}
                                        sale={p.sale}
                                        isNew={p.isNew}
                                    />
                                );
                            })}
                        </div>

                        <Pagination
                            page={1}
                            totalPages={3}
                            onPrev={handlePrev}
                            onNext={handleNext}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}
