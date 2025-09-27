// Компонент Count: только количество товаров
export default function Count({ total = 0 }) {
    return (
        <div className="products-count">
            There are <span className="bold">{total}</span> products in this category
        </div>
    );
}

