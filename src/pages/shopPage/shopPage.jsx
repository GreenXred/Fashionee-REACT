import './shop.css';
import data from '../../../products.json';

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

const PRODUCTS = data.products; // данные из массива товаров

export default function ShopPage({ goCart }) {
    // Пока заглушки — стили и верстка уже совпадут
    const totalCount = PRODUCTS.length;
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
            <ContentBlock page="shop" onGoShop={() => {}} onGoCart={goCart}/>

            {/* Каркас страницы */}
            <div className="container">
                <div className="shop">
                    {/* Левая колонка */}
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
                                        id={p.id}
                                        name={p.name}
                                        priceCurrent={p.price}
                                        priceOld={p.oldPrice}
                                        sale={p.isSale}
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
